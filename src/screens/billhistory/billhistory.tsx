import React, { useEffect, useState } from 'react';
import { Container } from '../../components/container';
import { Header } from '../../components/header';
import { createClient } from '@supabase/supabase-js';
import { Box, Heading, HStack, IconButton, Modal, Row, SimpleGrid, Text, useTheme, View, VStack } from 'native-base';
import { Printer } from 'phosphor-react-native';

const PrintButton = (setState: any) => {
  const { colors } = useTheme()

  return (
    <IconButton
      variant="ghost"
      alignItems="center"
      justifyContent="center"
      p={1}
      icon={<Printer size={24} color={colors.text[500]} />}
      onPress={() => {setState(true)}}
    />
  )
}

export const BillHistory = () => {
  const supabaseUrl = 'https://chlwpnxukledzhymqioe.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNobHdwbnh1a2xlZHpoeW1xaW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMTk4ODgsImV4cCI6MjA1MTg5NTg4OH0.wBwXn3XpQTrbOQFe7t0v76eCUYwSvkiUmPdnmPTK5HU';
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { colors } = useTheme()

  const [ bill, setBill ] = useState<any[] | null>([]);
  const [ state, setState ] = useState(false);

  useEffect(() => {
    getBillHistory();
  }, [])

  const getBillHistory = async () => {
    const { data, error } = await supabase.from('trxhistory').select('*');
    setBill(data);
  };

  return (
    <Container>
      <Header title="Bill History" backButton rightHeader={PrintButton(setState)}/>
      <VStack px={4} mt={16} width='full'>
        {bill?.map((item, index) => (
          <HStack key={index} alignItems="center" py={3}>
            <VStack>
              <HStack>
                <Text
                  fontSize="md"
                  textTransform="capitalize"
                  fontWeight="bold"
                  color={colors.text[500]}
                >
                  {item.bene_name}
                </Text>
              </HStack>
              <Text fontSize="xs" color={colors.gray[500]} mt={1}>
                {new Date(item.timestamp).toLocaleString('en-MY')}
              </Text>
              <Text fontSize="xs" color={colors.gray[500]} mt={1}>
                Description: {item.description}
              </Text>
            </VStack>
            <Text
              fontSize="md"
              fontWeight="bold"
              flex={1}
              textAlign="right"
              color={colors.text[500]}
            >
              {item.type === 'receive' ? '+' : '-'}RM
              {item.amount.toFixed(2)}
            </Text>
          </HStack>
        ))}
      </VStack>
      <Modal isOpen={state} onClose={() => setState(false)} size='lg'>
        <Modal.Content maxWidth="350px" backgroundColor={colors.secondary[500]}>
          <Modal.CloseButton color={colors.white}/>
          <Modal.Header color={colors.text[500]}>Print</Modal.Header>
          <Modal.Body>
            <VStack width='full'>
              {bill?.map((item, index) => (
                <HStack key={index} alignItems="center" py={3}>
                  <VStack>
                    <HStack>
                      <Text
                        fontSize="md"
                        textTransform="capitalize"
                        fontWeight="bold"
                        color={colors.text[500]}
                      >
                        {item.bene_name}
                      </Text>
                    </HStack>
                    <Text fontSize="xs" color={colors.gray[500]} mt={1}>
                      {new Date(item.timestamp).toLocaleString('en-MY')}
                    </Text>
                    <Text fontSize="xs" color={colors.gray[500]} mt={1}>
                      Description: {item.description}
                    </Text>
                  </VStack>
                  <Text
                    fontSize="md"
                    fontWeight="bold"
                    flex={1}
                    textAlign="right"
                    color={colors.text[500]}
                  >
                    {item.type === 'receive' ? '+' : '-'}RM
                    {item.amount.toFixed(2)}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          </Modal.Content>
      </Modal>
    </Container>
  )
}