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
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList, StackRoutes } from '../../../navigation/routes/stack-routes';

type ServiceItemType = {
  id: number;
  title: string;
  icon: React.ReactElement;
  navigate: StackRoutes | undefined;
};

const SERVICES_LINE_1: ServiceItemType[] = [
  {
    id: 1,
    title: 'Cash In',
    icon: <CashInIcon />,
    navigate: undefined,
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
    title: 'Withdraw',
    icon: <WithdrawIcon />,
    navigate: undefined,
  },
  {
    id: 6,
    title: 'Bill History',
    icon: <PayBillsIcon />,
    navigate: StackRoutes.BillHistory,
  },
  {
    id: 7,
    title: 'Exchange',
    icon: <ExchangeIcon />,
    navigate: undefined,
  },
  {
    id: 8,
    title: 'More',
    icon: <MoreIcon />,
    navigate: undefined,
  },
];

const ServiceItem = ({ icon, title, navigate }: ServiceItemType) => {
  const { colors } = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <VStack alignItems="center">
      <Button rounded="full" size="16" onPress={() => navigate && navigation.navigate(navigate)}>
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
  return (
    <VStack px={4} my={3} width="full">
      <HStack width="full" justifyContent="space-evenly">
        {SERVICES_LINE_1.map(item => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </HStack>
      <HStack width="full" justifyContent="space-evenly" mt={4}>
        {SERVICES_LINE_2.map(item => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </HStack>
    </VStack>
  );
};
