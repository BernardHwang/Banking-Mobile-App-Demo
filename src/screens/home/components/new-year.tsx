import { Container, Heading, HStack, Modal, Stack, Text, useTheme, VStack } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useUserContext } from "../../../contexts/user-context";

export const NewYear = () => {
  const { colors } = useTheme();
  const { user } = useUserContext();

  const [ state, setState ] = useState(false);

  return (
    <Container maxWidth='full' width='full'>
      <TouchableOpacity style={{width: '91%'}} onPress={() => setState(true)}>
        <Stack
          width='full'
          mx={4}
          mt={4}
          p={4}
          alignItems="center"
          justifyContent="flex-start"
          background={'red.500'}
          borderRadius={'15'}
        >
          <Text fontSize="md" fontWeight="bold" color={colors.text[500]}>
            New Year Promotion, Click for more!!!
          </Text>
        </Stack>
      </TouchableOpacity>
      <Modal isOpen={state} onClose={() => setState(false)} size='lg'>
        <Modal.Content maxWidth="350px" backgroundColor={colors.secondary[500]}>
          <Modal.CloseButton color={colors.white}/>
          <Modal.Body m={4}>
            <Heading m={2} color={colors.text[500]} fontSize={36}>New Year offer:</Heading>
            <Text m={2} color={colors.text[500]} fontWeight='bold' fontSize={16}>1st Jan 2025 - 31st Dec 2025</Text>
            <Text m={2} color={colors.text[500]} fontSize={16}>{user?.isVIP ? "Here's the" :'Grab the VIP Ticket to enjoy the'} new deposit rate of <Text fontSize={24} fontWeight='bold' color={colors.red[500]}>15%</Text> per year</Text>
          </Modal.Body>
          </Modal.Content>
      </Modal>
    </Container>
  )
}