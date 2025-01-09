import { HStack, Text, useTheme, VStack } from "native-base";
import React, { useEffect } from "react";
import { useUserContext } from "../../../contexts/user-context";
import { Alert, TouchableOpacity } from "react-native";
import { useLDClient } from "@launchdarkly/react-native-client-sdk";

export const ClaimRewards = () => {
  const { user } = useUserContext();
  const { colors } = useTheme();
    const {
        numberVariationFlag,
    } = useLDClient().allFlags()
    
    // Alert.alert(JSON.stringify(useLDClient().allFlags()));

    const howToBecomeVIPButton = () =>{
        Alert.alert(
            "Congratulations!", // Title of the alert
            `You received interest rate of ${numberVariationFlag}% p.a. for a 12-month tenure if you place your fixed deposit with us today.`,
            [
                { text: "OK", onPress: () => console.log("Non-VIP Alert dismissed") } // Button to dismiss the alert
            ]
            );
    }

//   useEffect(() => {
//     Alert.alert(
//     "How to Become a VIP", // Title of the alert
//     "Upgrade to VIP to enjoy exclusive benefits! Here's how:\n\n" + // Message on becoming a VIP
//         "- Maintain a high account balance.\n" +
//         "- Use the app actively for transactions.\n" +
//         "- Enroll in priority banking programs.\n" +
//         "- Stay loyal and qualify for invitation-only VIP access.",
//     [
//         { text: "OK", onPress: () => console.log("Non-VIP Alert dismissed") } // Button to dismiss the alert
//     ]
//     );
//   })
  return (
    <TouchableOpacity onPress={() => howToBecomeVIPButton()} style={{padding: 12}}>
    <HStack
      mx={4}
      mt={4}
      p={4}
      alignItems="center"
      justifyContent="flex-start"
      background={'blue.400'}
      borderRadius={'15'}
    >

      <VStack>
        {/* <Text fontSize="2xl" fontWeight="bold" color={'red.500'}>New !!! VIP exclusive promotion: </Text> */}
        <Text fontSize="lg" fontWeight="bold" color={colors.text[500]}>
          Get your special rate of fixed deposit(FD) today!
        </Text>
        <Text fontSize="md"  color={colors.text[500]}>Click to review interest rate you received</Text>
      </VStack>
    </HStack>
  </TouchableOpacity>

  )
}
