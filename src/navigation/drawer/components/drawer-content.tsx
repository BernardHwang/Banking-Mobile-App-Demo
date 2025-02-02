import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import { Box, Heading, HStack, Image, Stack, Switch, useTheme, View, VStack } from 'native-base';
import { useLayoutEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useAppContext } from '../../../contexts/app-context';
import { useUserContext } from '../../../contexts/user-context';
import { Alert, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useLDClient, useStringVariation } from '@launchdarkly/react-native-client-sdk';

const AnimatedDrawerContentScrollView = Animated.createAnimatedComponent(
  DrawerContentScrollView
);

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const { theme, setTheme } = useAppContext();
  const { user, logout } = useUserContext();
  const { colors } = useTheme();
  const drawerStatus = useDrawerStatus();
  const rotate = useSharedValue('25deg');
  const marginVertical = useSharedValue(0);
  const client = useLDClient();
  // const { differentColourMobile } = client.allFlags();
  const SignUpVipFlag = useStringVariation('differentColourMobile', 'alert');
  let nonVipSuggestion = null;
  if (SignUpVipFlag == "drawer"){
    nonVipSuggestion = 'How to become VIP'
  }

  useLayoutEffect(() => {
    if (drawerStatus === 'open') {
      rotate.value = '0';
      marginVertical.value = 32;
    } else {
      rotate.value = '25deg';
      marginVertical.value = 0;
    }
  }, [drawerStatus, rotate, marginVertical]);

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      marginVertical: withTiming(marginVertical.value, { duration: 300 }),
      transform: [
        {
          perspective: 1000,
        },
        {
          rotateY: withTiming(rotate.value, {
            duration: 300,
          }),
        },
      ],
    };
  });

  const vipDesc = () => {
    if (user?.isVIP) {
      Alert.alert(
        "VIP Privileges", // Title of the alert
        "As a VIP, you enjoy exclusive benefits such as:\n\n" + // Message with VIP privileges
          "- Priority Customer Support\n" +
          "- Higher Transaction Limits\n" +
          "- Exclusive Offers and Rewards\n" +
          "- Personalized Financial Services\n" +
          "- Complimentary Airport Lounge Access",
        [
          { text: "OK", onPress: () => console.log("VIP Alert dismissed") } // Button to dismiss the alert
        ]
      );
    } else {
      Alert.alert(
        "How to Become a VIP", // Title of the alert
        "Upgrade to VIP to enjoy exclusive benefits! Here's how:\n\n" + // Message on becoming a VIP
          "- Maintain a high account balance.\n" +
          "- Use the app actively for transactions.\n" +
          "- Enroll in priority banking programs.\n" +
          "- Stay loyal and qualify for invitation-only VIP access.",
        [
          { text: "OK", onPress: () => console.log("Non-VIP Alert dismissed") }, // Button to dismiss the alert
          { text: "I'm interested", onPress: () => {
            client.track('PromotionalVipClick');
            client.flush();
            console.log("Button click Event Tracked");
          }}
        ]
      );
    }
  };

  return (
    <AnimatedDrawerContentScrollView {...props} style={animatedViewStyle}>
      <VStack w="full" p={3}>
        <Image
          size={20}
          resizeMode="contain"
          borderRadius={100}
          source={{
            uri: user?.picUrl,
          }}
          alt="User image"
          mb={3}
        />
        <Heading fontSize="md" color="white">
          {user?.username}
        </Heading>
      </VStack>
      <HStack alignItems="center" p={3} mb={8}>
        <MaterialCommunityIcons size={12} name='crown-outline' color={user?.isVIP ? '#edd24a' : '#d1d0c9'}/>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{user?.isVIP ? 'VIP User' : 'Normal User'}</Text>
      </HStack>
      {/* <DrawerItemList {...props} /> */}
      {
        user?.isVIP && 
        <TouchableOpacity onPress={() => vipDesc()} style={{padding: 12}}>
          <HStack alignItems="center">
            <MaterialCommunityIcons name='account-arrow-up-outline' color={'white'} size={25}/>
            <Text style={{color: 'white', marginLeft: 16}}>VIP Privilege</Text>
          </HStack>
        </TouchableOpacity>
      }
      {
        !user?.isVIP && SignUpVipFlag == "drawer" && 
        <TouchableOpacity onPress={() => vipDesc()} style={{padding: 12}}>
          <HStack alignItems="center">
            <MaterialCommunityIcons name='account-arrow-up-outline' color={'white'} size={25}/>
            <Text style={{color: 'white', marginLeft: 16}}>{nonVipSuggestion}</Text>
          </HStack>
        </TouchableOpacity>
      }

      <HStack alignItems="center" p={3} mt={8}>
        <Heading fontSize="sm" color="white" mr={4}>
          Dark Mode
        </Heading>
        <Switch
          isChecked={theme === 'dark'}
          onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          offTrackColor={colors.gray[300]}
          onTrackColor={colors.primary[500]}
        />
      </HStack>
      <TouchableOpacity onPress={() => logout()} style={{padding: 12}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>LogOut</Text>
      </TouchableOpacity>
    </AnimatedDrawerContentScrollView>
  );
};

