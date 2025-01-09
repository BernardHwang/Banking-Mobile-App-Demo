import { Header } from '../../components/header';
import { Container } from '../../components/container';
import { Box, Button, Heading, HStack, Text, useTheme, VStack } from 'native-base';
import React from 'react'
import { Bank, Buildings, DeviceMobile, IdentificationCard, PoliceCar, QrCode } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList, StackRoutes } from '../../navigation/routes/stack-routes';

type TransactionsType = {
  name: string;
  icon: React.ReactElement;
}

const TransactionsTypeList : TransactionsType[] = [
  {
    name: 'Acc No.',
    icon: <Bank />,
  },
  {
    name: 'DuitNow',
    icon: <QrCode />,
  },
  {
    name: 'Phone No.',
    icon: <DeviceMobile/>,
  },
  {
    name: 'NRIC No.',
    icon: <IdentificationCard/>,
  },
  {
    name: 'Army No./Police No.',
    icon: <PoliceCar/>,
  },
  {
    name: 'Business Registration No.',
    icon: <Buildings/>,
  },
]

export const TransactionsType = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>()

  return (
    <Container>
      <Header title='Transaction Type' backButton/>
      <VStack alignItems="left" px={4} mt={16} space={4} width="full">
        {TransactionsTypeList.map((item, index) => (
          <Button key={index} rounded='2xl' height='16' width='full' justifyContent='space-between' onPress={() => navigation.navigate(StackRoutes.Transfer, {item})}>
            <HStack my={14} width='full'>
              <Box
                size="16"
                alignItems="center"
                justifyContent="center"
                opacity={0.9}
              >
                {React.cloneElement(item.icon, {
                  size: 30,
                  color: colors.white,
                })}
              </Box>
            
              <Text fontSize="xs" fontWeight="medium" ml={4} color={colors.text[500]} alignSelf='center'>
                {item.name}
              </Text>
            </HStack>
          </Button>
        ))}
      </VStack>
    </Container>
  )
}