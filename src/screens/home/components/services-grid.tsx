import React from 'react';
import { Box, Button, HStack, Text, useTheme, VStack } from 'native-base';
import {
  Money as CashInIcon,
  UploadSimple as SendIcon,
  DownloadSimple as ReceiveIcon,
  QrCode as PayQr,
  Bank as WithdrawIcon,
  Receipt as PayBillsIcon,
  Coins as ExchangeIcon,
  CirclesFour as MoreIcon,
} from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { useBoolVariation } from '@launchdarkly/react-native-client-sdk';


type ServiceItemType = {
  id: number;
  title: string;
  icon: React.ReactElement;
  onPress?: () => void;
  isDisabled?: boolean;
};

const SERVICES_LINE_1: ServiceItemType[] = [
  {
    id: 1,
    title: 'Cash In',
    icon: <CashInIcon />,
  },
  {
    id: 2,
    title: 'Send',
    icon: <SendIcon />,
  },
  {
    id: 3,
    title: 'Receive',
    icon: <ReceiveIcon />,
  },
  {
    id: 4,
    title: 'Pay QR',
    icon: <PayQr />,
  },
];

const SERVICES_LINE_2 = [
  {
    id: 5,
    title: 'Withdraw',
    icon: <WithdrawIcon />,
  },
  {
    id: 6,
    title: 'Pay Bills',
    icon: <PayBillsIcon />,
  },
  {
    id: 7,
    title: 'Exchange',
    icon: <ExchangeIcon />,
  },
  {
    id: 8,
    title: 'More',
    icon: <MoreIcon />,
  },
];

const ServiceItem = ({ icon, title, onPress, isDisabled = false }: ServiceItemType & { onPress: () => void; isDisabled?: boolean }) => {
  const { colors } = useTheme();

  return (
    <VStack alignItems="center">
      <Button rounded="full" size="16"  onPress={onPress} isDisabled={isDisabled}>
        <Box
          flex={1}
          rounded="full"
          size="16"
          alignItems="center"
          justifyContent="center"
          opacity={0.9}
          bg={{
            linearGradient: {
              colors: [colors.primary[600], colors.primary[700]],
              start: [0, 0],
              end: [1, 0],
            },
          }}
        >
          {React.cloneElement(icon, {
            size: 30,
            color: colors.white,
          })}
        </Box>
      </Button>
      <Text fontSize="xs" fontWeight="medium" mt={2} color={colors.text[500]}>
        {title}
      </Text>
    </VStack>
  );
};

export const ServicesGrid = () => {
  const navigation = useNavigation();

  //  Flag
  const CashInputButtonFlag = useBoolVariation('cash-in-button', false)

  const updatedServicesLine1 = SERVICES_LINE_1.map((item) => ({
    ...item,
    isDisabled: item.id === 1 ? !CashInputButtonFlag : false,
    onPress: () => {
      switch (item.id) {
        case 1:
          navigation.navigate('CashIn' as never);
          break;
        case 2:
          navigation.navigate('SendMoney'as never );
          break;
        // case 3:
        //   navigation.navigate('ReceiveMoney');
        //   break;
        default:
          console.log('Service not mapped:', item.title);
      }
    },
  }));

  const updatedServicesLine2 = SERVICES_LINE_2.map((item) => ({
    ...item,
    onPress: () => {
      console.log('Service not implemented:', item.title);
    },
  }));

  return (
    <VStack px={4} my={3} width="full">
      <HStack width="full" justifyContent="space-evenly">
        {/* {SERVICES_LINE_1.map(item => (
          <ServiceItem key={item.id} {...item} />
        ))} */}
        {updatedServicesLine1.map((item) => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </HStack>
      <HStack width="full" justifyContent="space-evenly" mt={4}>
        {/* {SERVICES_LINE_2.map(item => (
          <ServiceItem key={item.id} {...item} />
        ))} */}
        {updatedServicesLine2.map((item) => (
          <ServiceItem key={item.id} {...item} />
        ))}

      </HStack>
    </VStack>
  );
};
