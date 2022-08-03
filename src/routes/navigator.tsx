import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import {
  House as HouseIcon,
  CreditCard as CardIcon,
} from 'phosphor-react-native';

import { Home } from '../screens/home';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const { colors } = useTheme();

  const renderIcons = (route: string, focused: boolean) => {
    const color = focused ? colors.blue[600] : colors.gray[300];

    switch (route) {
      case 'Home':
        return <HouseIcon color={color} />;
      case 'Cards':
        return <CardIcon color={color} />;
      default:
        return null;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.blue[600],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarIcon: ({ focused }) => renderIcons(route.name, focused),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cards" component={Home} />
    </Tab.Navigator>
  );
};
