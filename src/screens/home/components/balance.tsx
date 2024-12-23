import { HStack, VStack, Text, useTheme } from 'native-base';
import { useUserContext } from '../../../contexts/user-context';

export const Balance = () => {
  const { colors } = useTheme();
  const { user } = useUserContext();

  const generateRandomCurrency = (min: number, max: number) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR' }).format(randomNumber);
  };
  
  return (
    <HStack
      px={4}
      pt={8}
      pb={6}
      alignItems="center"
      justifyContent="flex-start"
    >
      <VStack>
        <Text fontSize="xs" fontWeight="bold" color={colors.text[500]}>
          Total balance
        </Text>
        <HStack>
          <Text fontSize="3xl" fontWeight="bold" color={colors.text[500]}>
            {user?.isVIP ? generateRandomCurrency(1000000, 9999999) : generateRandomCurrency(100, 50000)}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
