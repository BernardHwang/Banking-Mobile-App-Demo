import { HStack, Text, useTheme, VStack } from "native-base";
import React, { useEffect } from "react";
import { useUserContext } from "../../../contexts/user-context";
import { Alert, TouchableOpacity } from "react-native";
import { useLDClient, useStringVariation } from "@launchdarkly/react-native-client-sdk";

export const NonVIPExclusive = () => {
  const { user } = useUserContext();
  const { colors } = useTheme();
  const client = useLDClient();
  const { differentColourMobile } = client.allFlags();
    
  const SignUpVipFlag = useStringVariation('differentColourMobile', 'alert');


    const howToBecomeVIPButton = () =>{
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
                  }} // Button to dismiss the alert
            ]
            );
    }

  useEffect(() => {
    // if (test){
    //   Alert.alert(JSON.stringify(test))

    // }
    if (SignUpVipFlag == "alert"){
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
            }} // Button to dismiss the alert
        ]
        );
    }

  })

  return (
    <>
      {!user?.isVIP && SignUpVipFlag == "frontpage" && 
        <TouchableOpacity  onPress={() => howToBecomeVIPButton()} >
          <HStack
            mx={4}
            mt={4}
            p={4}
            alignItems="center"
            justifyContent="flex-start"
            background={'yellow.500'}
            borderRadius={'15'}
          >
            <VStack>
              <Text fontSize="2xl" fontWeight="bold" color={'red.700'}>How to become VIP? </Text>
              <Text fontSize="lg" fontWeight="bold" color={colors.text[500]}>Current MemberShip: SILVER</Text>
              {/* <Text fontSize="md" fontWeight="bold"  color={colors.text[500]}>{`${user?.memberType} Membership`.toUpperCase()}</Text> */}
              <Text fontSize="sm" fontWeight="bold" underline color={colors.text[500]}>Click here to review how you can do so</Text>
            </VStack>
          </HStack>
        </TouchableOpacity>
      }

  </>
  )
}
