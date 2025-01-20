import React from 'react';
import { Container } from '../../../../components/container';
import { Header } from '../../../../components/header';
import { Box, Button, Divider, Heading, HStack, Icon, ScrollView, Text, useTheme, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { StackParamList, StackRoutes } from '../../../../navigation/routes/stack-routes';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const CreditCardStatus = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const statuses = [
    { label: 'Submitted', date: '2025-01-01', icon: 'send', status: 'completed' },
    { label: 'In Review', date: '2025-01-05', icon: 'rate-review', status: 'completed' },
    { label: 'Approved', date: '2025-01-10', icon: 'check-circle', status: 'active' },
    { label: 'Completed', date: '', icon: 'done-all', status: 'pending' },
  ];

  return (
    <Container>
      <Header title='Application State'/>
      <ScrollView pt={16}>
        <VStack p={4}>
          <Heading mb={4}>Application Status</Heading>
          <VStack space={6}>
            {statuses.map((step, index) => (
              <Box key={index} justifyContent='center'>
                <HStack alignItems="center" space={4} width='full'>
                  <Icon
                    as={MaterialIcons}
                    name={step.icon}
                    size="2xl"
                    color={
                      step.status === 'completed'
                        ? 'green.500'
                        : step.status === 'active'
                        ? 'blue.500'
                        : 'gray.400'
                    }
                  />
                  <VStack>
                    <Text bold color={step.status === 'completed' || step.status === 'active' ? 'black' : 'gray.500'}>
                      {step.label}
                    </Text>
                    {step.date ? (
                      <Text fontSize="xs" color="gray.500">
                        {step.date}
                      </Text>
                    ) : null}
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
          <Heading my={4}>Extra Offer</Heading>
          <Text>Stay Tuned, Coming Soon</Text>
        </VStack>
        <Button style={{alignSelf: 'center'}} width='4/5' bottom={0} onPress={() => navigation.navigate(StackRoutes.HomeTabs)}>Back to Home</Button>
      </ScrollView>
    </Container>
  )
}