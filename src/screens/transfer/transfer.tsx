import React from "react";
import { Container } from "../../components/container";
import { Header } from "../../components/header";
import { Button, HStack, Input, Text, useTheme, View, VStack } from "native-base";
import { ArrowElbowDownRight } from "phosphor-react-native";

export const Transfer = ({ route } :any) => {
  const { colors } = useTheme()
  const { item } = route.params;

  return (
    <Container>
      <Header title='Transfer Page' backButton/>
      <VStack mt={20} mx={4} space={6}>
        <Input
          placeholder={`${item.name} *`}
          size='2xl'
          variant='rounded'
          type='text'
          isRequired
        />
        <Input
          placeholder="Amount *"
          size='2xl'
          variant='rounded'
          isRequired
        />
        <Input
          placeholder="Description"
          size='2xl'
          variant='rounded'
        />
        <Button rounded='full' onPress={() => {}}>
          <HStack alignItems='center' space={2}>
            <ArrowElbowDownRight color={colors.text[500]}/>
            <Text fontSize={16}  color={colors.text[500]} >Next</Text>
          </HStack>
        </Button>
      </VStack>
    </Container>
  )
}