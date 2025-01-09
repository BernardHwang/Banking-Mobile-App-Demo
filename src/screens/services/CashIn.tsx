import React, { useState } from 'react';
import { Box, Text, VStack, Input, Button, FormControl, Alert } from 'native-base';
import { useBoolVariation } from '@launchdarkly/react-native-client-sdk';

const CashInPage = () => {
  const [cashInAmount, setCashInAmount] = useState(''); // State to track the amount
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const [alertMessage, setAlertMessage] = useState(''); // State for custom alert message

//  Flag
const CashInputFlag = useBoolVariation('cash-in-input', false)

  const handleCashIn = () => {
    const amount = parseFloat(cashInAmount);
    
    if (isNaN(amount) || amount <= 0) {
      setAlertMessage('Please enter a valid amount');
      setShowAlert(true);
    } else {
      setAlertMessage(`Successfully cashed in $${amount}`);
      setShowAlert(true);
      // Implement logic for cash-in (e.g., updating backend or balance)
      setCashInAmount(''); // Clear input field after successful cash-in
    }
  };

  return (
    <Box flex={1} bg="white" p={4}> {/* White background and padding */}
      <VStack flex={1} justifyContent="center" alignItems="center">
        <Text fontSize="lg" fontWeight="bold" color="black">Cash In</Text> {/* Explicit text color */}
        <Text mt={2} color="gray.500">Add funds to your account securely.</Text>

        {/* Alert for success or error */}
        {showAlert && (
          <Alert status={alertMessage.includes('success') ? 'success' : 'error'} mt={4}>
            <Text>{alertMessage}</Text>
          </Alert>
        )}

        {CashInputFlag ? (
          <>
            <FormControl isRequired mt={6}>
              <FormControl.Label>Enter Amount</FormControl.Label>
              <Input
                placeholder="Enter amount"
                value={cashInAmount}
                onChangeText={setCashInAmount}
                keyboardType="numeric"
                mb={4}
              />
            </FormControl>
            <Button onPress={handleCashIn} colorScheme="blue">
              Confirm Cash In
            </Button>

          </>
        ) : (
          <Text mt={4} color="red.500">Cash-in feature is currently disabled.</Text>
        )}

        
      </VStack>
    </Box>
  );
};

export default CashInPage;
