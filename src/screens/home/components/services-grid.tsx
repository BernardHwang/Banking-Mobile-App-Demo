import React from 'react';
import { Box, Button, HStack, Text, useTheme, VStack } from 'native-base';
import {
  Money as CashInIcon,
  UploadSimple as SendIcon,
  DownloadSimple as ReceiveIcon,
  QrCode as PayQr,
  Calendar,
  Receipt as PayBillsIcon,
  Files,
  User,
} from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList, StackRoutes } from '../../../navigation/routes/stack-routes';
import { useBoolVariation } from '@launchdarkly/react-native-client-sdk';


type ServiceItemType = {
  id: number;
  title: string;
  icon: React.ReactElement;
  navigate: StackRoutes | undefined;
  // onPress?: () => void;
  isDisabled?: boolean;
};

const SERVICES_LINE_1: ServiceItemType[] = [
  {
    id: 1,
    title: 'Cash In',
    icon: <CashInIcon />,
    navigate: StackRoutes.CashIn,
  },
  {
    id: 2,
    title: 'Send',
    icon: <SendIcon />,
    navigate: StackRoutes.TransactionsType,
  },
  {
    id: 3,
    title: 'Receive',
    icon: <ReceiveIcon />,
    navigate: undefined,
  },
  {
    id: 4,
    title: 'Pay QR',
    icon: <PayQr />,
    navigate: undefined,
  },
];

const SERVICES_LINE_2 = [
  {
    id: 5,
    title: 'Event',
    icon: <Calendar />,
    navigate: StackRoutes.Event,
  },
  {
    id: 6,
    title: 'Bill History',
    icon: <PayBillsIcon />,
    navigate: StackRoutes.BillHistory,
  },
  {
    id: 7,
    title: 'Application',
    icon: <Files />,
    navigate: StackRoutes.Application,
  },
  {
    id: 8,
    title: 'Support',
    icon: <User />,
    navigate: StackRoutes.Support,
  },
];

const ServiceItem = ({ icon, title, navigate, isDisabled = false}: ServiceItemType) => {
  const { colors } = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <VStack alignItems="center">

      <Button rounded="full" size="16" onPress={() => navigate && navigation.navigate(navigate)} isDisabled={isDisabled}>
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
