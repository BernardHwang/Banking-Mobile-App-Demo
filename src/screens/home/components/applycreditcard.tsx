import { Container, Heading, HStack, Modal, Stack, Text, useTheme, VStack } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useUserContext } from "../../../contexts/user-context";
import { useNavigation } from "@react-navigation/native";
import { StackParamList, StackRoutes } from "../../../navigation/routes/stack-routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { CaretRight } from "phosphor-react-native";

export const CCBanner = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>()

  return (
    <Container maxWidth='full' width='full'>
      <TouchableOpacity style={{width: '91%'}} onPress={() => navigation.navigate(StackRoutes.CreditCard)}>
        <HStack
          width='full'
          mx={4}
          mt={4}
          p={4}
          alignItems="center"
          justifyContent="center"
          background={'blue.300'}
          borderRadius={'15'}
        >
          <Text fontSize="md" fontWeight="bold" color={colors.text[500]}>
            Get Your Credit Card Right Now!
          </Text>
          <CaretRight />
        </HStack>
      </TouchableOpacity>
    </Container>
  )
}