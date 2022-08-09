import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Heading, HStack, useTheme } from 'native-base';
import { UserCircle as UserIcon } from 'phosphor-react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { useStickyScrollContext } from '../contexts/sticky-scroll-context';

import { MenuButton } from './menu-button';

const AnimatedHStack = Animated.createAnimatedComponent(HStack);

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { isScrollingDown } = useStickyScrollContext();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const headerAnimatedStyles = useAnimatedStyle(() => {
    const top = isScrollingDown ? -50 : 0;
    return {
      top: withTiming(top, { duration: 200 }),
      shadowOffset: {
        width: 0,
        height: -1,
      },
      shadowOpacity: isScrollingDown ? 0 : 0.1,
      shadowRadius: 4.0,
    };
  });

  return (
    <AnimatedHStack
      px={4}
      py={3}
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      zIndex={2}
      left={0}
      right={0}
      style={headerAnimatedStyles}
      bg={colors.white}
    >
      <HStack flex={1} justifyContent="flex-start">
        <MenuButton onPress={openDrawer} />
      </HStack>
      <Heading fontSize="lg" flex={1} textAlign="center">
        {title}
      </Heading>
      <HStack flex={1} justifyContent="flex-end">
        <UserIcon size={30} />
      </HStack>
    </AnimatedHStack>
  );
};
