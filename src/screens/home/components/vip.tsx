import { HStack, Text, useTheme, VStack } from "native-base";
import React from "react";
import { useUserContext } from "../../../contexts/user-context";

export const VIPExclusive = () => {
  const { colors } = useTheme();
  const { user } = useUserContext();
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
              You are not joined Our VIP, Let's Grab the ticket to enjoy the VIP Privillege
            </Text>
          </>
        )}
        
      </VStack>
    </HStack>
  )
}
