import { HStack, Text, useTheme, VStack } from "native-base";
import React, { useEffect } from "react";
import { useUserContext } from "../../../contexts/user-context";
import { useLDClient, useStringVariation } from "@launchdarkly/react-native-client-sdk";
import { Alert } from "react-native";


export const VIPExclusive = () => {
  const { colors } = useTheme();
  const { user } = useUserContext();
  // const SignUpVipFlag = useStringVariation('differentColourMobile', 'alert');

  return (
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
        {user?.isVIP ? (
          <>
            <Text fontSize="2xl" fontWeight="bold" color={'red.500'}>New !!! VIP exclusive promotion: </Text>
            <Text fontSize="md" fontWeight="bold" color={colors.text[500]}>
              Priority Loan Approvals: Faster approvals with tailored rates exclusively for VIPs.
            </Text>
          </>
        ) : (
          <>
            <Text fontSize="2xl" fontWeight="bold" color={'red.500'}>Grab the VIP Ticket !!!</Text>
            <Text fontSize="md" fontWeight="bold" color={colors.text[500]}>
              You are not joined Our VIP, Enjoy VIP Privillege with new only 50,000k Fresh Fund by June 2025.
            </Text>
          </>
        )}
        
      </VStack>
    </HStack>
  )
}
