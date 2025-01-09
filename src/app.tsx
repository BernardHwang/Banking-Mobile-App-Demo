import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppContextProvider, useAppContext } from './contexts/app-context';
import { StickyScrollProvider } from './contexts/sticky-scroll-context';
import { Navigator } from './navigation';
import { DARK_THEME } from './themes/dark';
import { LIGHT_THEME } from './themes/light';
import { UserProvider, useUserContext } from './contexts/user-context';
import Login from './screens/login';

import { AutoEnvAttributes, LDClientImpl, LDProvider, ReactNativeLDClient } from '@launchdarkly/react-native-client-sdk';
import { useEffect } from 'react';
import { Alert } from 'react-native';


const client = new ReactNativeLDClient('mob-deb8e733-2957-46a2-bb51-0b35e99ba46f', AutoEnvAttributes.Enabled);


const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const ThemedApp = () => {
  // useEffect(() => {
  //   // client.identify(context).catch((e: any) => console.log(e));
  //   Alert.alert(JSON.stringify(client));
  // }, []);
  const { theme } = useAppContext();
  const { user } = useUserContext();
  return (
    <NativeBaseProvider
      config={config}
      theme={theme === 'light' ? LIGHT_THEME : DARK_THEME}
    >
      <SafeAreaProvider>
        <StickyScrollProvider>
          {user ? <Navigator /> : <Login/>}
        </StickyScrollProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default function App() {
  return (
    <LDProvider client={client}>
      <AppContextProvider>
        <UserProvider>
          <ThemedApp />
        </UserProvider>
      </AppContextProvider>
    </LDProvider>

  );
}
