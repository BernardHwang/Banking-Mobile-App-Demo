import { HStack, Text, useTheme, VStack } from "native-base";
import React from "react";
import { useUserContext } from "../../../contexts/user-context";

export const VIPExclusive = () => {
  const { user } = useUserContext();
  const { colors } = useTheme();
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
        <Text fontSize="2xl" fontWeight="bold" color={'red.500'}>New !!! VIP exclusive promotion: </Text>
        <Text fontSize="md" fontWeight="bold" color={colors.text[500]}>
          Priority Loan Approvals: Faster approvals with tailored rates exclusively for VIPs.
        </Text>
      </VStack>
    </HStack>
  )
}
