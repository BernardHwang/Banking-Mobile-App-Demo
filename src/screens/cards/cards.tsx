import { Box, IconButton, useTheme } from 'native-base';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { PlusCircle } from 'phosphor-react-native';

import { Card } from '../../components/card';
import { Container } from '../../components/container';
import { Header } from '../../components/header';
import { NORMALCARDS, VIPCARDS } from '../../constant/cards';

import { AnimatedCard } from './components/animated-card';
import { useUserContext } from '../../contexts/user-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList, StackRoutes } from '../../navigation/routes/stack-routes';

export const Cards = () => {
  const { colors } = useTheme();
  const { user } = useUserContext();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const scrollY = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const cards = user?.isVIP ? VIPCARDS(user) : NORMALCARDS(user);

  const renderAddCardButton = () => {
    return (
      <IconButton
        variant="ghost"
        alignItems="center"
        justifyContent="center"
        p={1}
        icon={<PlusCircle size={28} color={colors.text[500]} />}
        onPress={() => navigation.navigate(StackRoutes.CreditCard)}
      />
    );
  };

  return (
    <Container>
      <Header title="My cards" rightHeader={renderAddCardButton()} />
      <Animated.FlatList
        style={{
          backgroundColor: colors.secondary[500],
          flex: 1,
        }}
        contentContainerStyle={{
          paddingTop: 80,
          backgroundColor: colors.secondary[500],
        }}
        contentInset={{
          top: 0,
          bottom: cards.length * 100,
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={cards}
        keyExtractor={item => item.id.toString()}
        renderItem={({ index, item }) => (
          <Box mb={6} px={6}>
            <AnimatedCard index={index} scrollY={scrollY}>
              <Card {...item} />
            </AnimatedCard>
          </Box>
        )}
        onScroll={onScrollHandler}
      />
    </Container>
  );
};
