import { IconButton, useTheme, ScrollView } from 'native-base';
import { Bell as NotificationIcon } from 'phosphor-react-native';

import { Container } from '../../components/container';
import { Header } from '../../components/header';
import { useStickyScrollEvents } from '../../hooks/use-sticky-scroll-events';

import { Balance } from './components/balance';
import { CardList } from './components/card-list';
import { ServicesGrid } from './components/services-grid';
import { TransactionHistory } from './components/transaction-history';
import { useUserContext } from '../../contexts/user-context';
import { VIPExclusive } from './components/vip';
import { NonVIPExclusive } from './components/non-vip';
import { useEffect } from 'react';
import { useLDClient } from '@launchdarkly/react-native-client-sdk';
import { Alert } from 'react-native';
import { ClaimRewards } from './components/claim-reward';


const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace"];


function getRandomName(nameList:string[]) {
  const randomIndex = Math.floor(Math.random() * nameList.length);
  return nameList[randomIndex];
}
export const Home = () => {
  const { colors } = useTheme();
  const { user } = useUserContext();
  let name = '';
  if (user){
    name = user.id
  }
  const client = useLDClient();
  const context = { kind: 'user', key: name, name:user?.username, memberType: user?.memberType  }
    const { numberVariationFlag, isVip } = client.allFlags();
    client.identify(context).catch((e: any) => console.log(e));
  // Alert.alert(JSON.stringify(context));
  // Alert.alert(JSON.stringify(user))
  // Alert.alert(JSON.stringify(numberVariationFlag));

  const { onScroll, onScrollViewLayout } = useStickyScrollEvents();

  const renderNotificationsButton = () => {
    return (
      <IconButton
        variant="ghost"
        alignItems="center"
        justifyContent="center"
        p={1}
        icon={<NotificationIcon size={24} color={colors.text[500]} />}
      />
    );
  };

  return (
    <Container>
      <Header title="Home" rightHeader={renderNotificationsButton()} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 56 }}
        showsVerticalScrollIndicator={false}
        onLayout={onScrollViewLayout}
        // onScrollBeginDrag={onScroll}
        // onScrollEndDrag={onScroll}
        scrollEventThrottle={16}
        flex={1}
        bg={colors.secondary[500]}
      >
        <ClaimRewards/>
        {isVip ? <VIPExclusive/> : <NonVIPExclusive/>}
        <Balance />
        <CardList />
        <ServicesGrid />
        <TransactionHistory />
      </ScrollView>
    </Container>
  );
};
