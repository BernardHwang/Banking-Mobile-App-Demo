import { Box, Button, HStack, Text, useTheme, VStack } from 'native-base';
import React from 'react'
import { Header } from '../../components/header';
import { Container } from '../../components/container';
import { StackParamList, StackRoutes } from '../../navigation/routes/stack-routes';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CreditCard, Vault } from 'phosphor-react-native';

type ApplicationType = {
  title: string;
  description: string;
  icon: React.ReactElement;
  navigate: StackRoutes | undefined;
  // onPress?: () => void;
  isDisabled?: boolean;
};

const ApplicationList: ApplicationType[] = [
  {
    title: 'Credit Card',
    description: 'Get exclusive rewards and cashback offers. Apply now to enjoy a credit limit tailored to your needs.',
    icon: <CreditCard />,
    navigate: StackRoutes.CreditCard,
  },
  {
    title: 'Fixed Deposit',
    description: 'Secure your future with attractive interest rates and flexible tenures. Start saving today!',
    icon: <Vault />,
    navigate: undefined,
  },
]

export  const Application = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return(
    <Container>
      <Header title="Application" backButton/>
      <VStack px={4} mt={16} width='full' space={4}>
        {ApplicationList.map((item, index) => (
          <Button key={index} rounded='2xl' height='16' onPress={() => item.navigate && navigation.navigate(item.navigate)}>
            <HStack width='full' space={8}>
              <Box
                size="20"
                alignItems="center"
                justifyContent="center"
                opacity={0.9}
                color={colors.text['500']}
              >
                {React.cloneElement(item.icon, {
                  size: 30,
                  color: colors.white,
                })}
                <Text color={colors.text[500]}>{item.title}</Text>
              </Box>
              <Text fontSize="xs" fontWeight="medium" ml={4} color={colors.text[500]} alignSelf='center' width='1/2'>
                {item.description}
              </Text>
            </HStack>
          </Button>
        ))}
      </VStack>
    </Container>
  )
};
