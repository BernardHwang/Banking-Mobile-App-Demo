import React from 'react';
import { Box, Text, VStack } from 'native-base';

const SendMoneyPage = () => {
  return (
    <Box flex={1} bg="white" p={4}>
    <VStack flex={1} justifyContent="center" alignItems="center">
      <Text fontSize="lg" fontWeight="bold">Send Money</Text>
      <Text mt={2} color="gray.500">Transfer money quickly and securely.</Text>
    </VStack>
    </Box>
  );
};

export default SendMoneyPage;
