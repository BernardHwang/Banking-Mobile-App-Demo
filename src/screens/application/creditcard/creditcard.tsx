import React from 'react'
import { Container } from '../../../components/container';
import { Header } from '../../../components/header';
import { Box, Button, Stack, useTheme, VStack } from 'native-base';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { AnimatedCard } from '../../cards/components/animated-card';
import { Card } from '../../../components/card';
import { CardModel } from '../../../models/card-model';
import { TouchableOpacity } from 'react-native';
import { StackRouter, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList, StackRoutes } from '../../../navigation/routes/stack-routes';
import { useUserContext } from '../../../contexts/user-context';

const CreditCardList: CardModel[] = [
  {
    id: 1,
    number: '9854243723430000',
    name: 'xxx',
    expiry: '07/29',
    type: 'classic',
    brand: 'visa',
    color: ['#9030BB', '#ad34e5'],
  },
  {
    id: 2,
    number: '9854243723430000',
    name: 'xxx',
    expiry: '07/29',
    type: 'classic',
    brand: 'mastercard',
    color: ['#9030BB', '#ad34e5'],
  },
  {
    id: 3,
    number: '9854243723430000',
    name: 'xxx',
    expiry: '07/29',
    type: 'gold',
    brand: 'visa',
    color: ['#FBC901', '#AA6B39'],
  },
  {
    id: 4,
    number: '9854243723430000',
    name: 'xxx',
    expiry: '07/29',
    type: 'gold',
    brand: 'mastercard',
    color: ['#FBC901', '#AA6B39'],
  },
  {
    id: 5,
    number: '4324232135450000',
    name: 'xxx',
    expiry: '07/29',
    type: 'platinum',
    brand: 'visa',
    color: ['#E5E4E2', '#584f3f'],
  },
  {
    id: 6,
    number: '4324232135450000',
    name: 'xxx',
    expiry: '07/29',
    type: 'platinum',
    brand: 'mastercard',
    color: ['#E5E4E2', '#584f3f'],
  },
  {
    id: 7,
    number: '3213442123456789',
    name: 'xxx',
    expiry: '07/29',
    type: 'black',
    brand: 'visa',
    color: ['#35363d', '#202126'],
  },
  {
    id: 8,
    number: '3213442123456789',
    name: 'xxx',
    expiry: '07/29',
    type: 'black',
    brand: 'mastercard',
    color: ['#35363d', '#202126'],
  },
]

export const CreditCard = () => {
  const { colors } = useTheme();
  const { user } = useUserContext();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const scrollY = useSharedValue(0);
  
  const onScrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <Container>
      <Header title='Apply CreditCard' backButton />
      <Button onPress={() => navigation.navigate(StackRoutes.CreditCardStatus)} mt={16} m={4} borderRadius='3xl'>
        Check Status
      </Button>
      <Animated.FlatList
        style={{
          backgroundColor: colors.secondary[500],
          flex: 1,
        }}
        contentContainerStyle={{
          paddingTop: 10,
          backgroundColor: colors.secondary[500],
        }}
        contentInset={{
          top: 0,
          bottom: CreditCardList.length * 100,
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={CreditCardList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ index, item }) => (
          <TouchableOpacity onPress={() => navigation.navigate((user?.isVIP ? StackRoutes.CreditCardInfoFilling : StackRoutes.CreditCardInfoFillingAdv), {item})}>
            <Box mb={6} px={6}>
              <Card {...item} />
            </Box>
          </TouchableOpacity>
        )}
        onScroll={onScrollHandler}
      />
    </Container>
  )
};