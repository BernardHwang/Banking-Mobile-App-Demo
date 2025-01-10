import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'native-base';

import { Transactions as TransactionsScreen } from '../../screens/transactions';
import { TransactionsType } from '../../screens/transactionstype';
import { BillHistory } from '../../screens/billhistory';
import { TabNavigator } from '../bottom-tabs/bottom-tabs-navigator';
import { Drawer3dContainer } from '../drawer/components/drawer-3d-container';
import { StackParamList, StackRoutes } from '../routes/stack-routes';
import CashInPage from '../../screens/services/CashIn';
import SendMoneyPage from '../../screens/services/SendMoney'; 
import { Transfer } from '../../screens/transfer';

const Stack = createStackNavigator<StackParamList>();

const HomeTabs = () => (
  <Drawer3dContainer>
    <TabNavigator />
  </Drawer3dContainer>
);

export const StackNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.primary[600] },
      }}
    >
      <Stack.Screen name={StackRoutes.HomeTabs} component={HomeTabs} />
      <Stack.Screen
        name={StackRoutes.Transactions}
        component={TransactionsScreen}
      />
      <Stack.Screen 
        name={StackRoutes.CashIn} 
        component={CashInPage} 
      />
      <Stack.Screen 
        name={StackRoutes.SendMoney} 
        component={SendMoneyPage} 
      />
      <Stack.Screen
        name={StackRoutes.TransactionsType}
        component={TransactionsType}
      />
      <Stack.Screen
        name={StackRoutes.BillHistory}
        component={BillHistory}
      />
      <Stack.Screen
        name={StackRoutes.Transfer}
        component={Transfer}
      />
    </Stack.Navigator>
  );
};
