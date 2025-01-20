import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const dummyData = {
  base: "USD",
  rates: {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110.53,
    AUD: 1.35,
    CAD: 1.25,
    CHF: 0.92,
    CNY: 6.45,
    SEK: 8.58,
    NZD: 1.45,
  },
};

const ExchangePage = () => {
  const [currencies, setCurrencies] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  useEffect(() => {
    // Using dummy data instead of API call
    setCurrencies(Object.keys(dummyData.rates));
    setExchangeRate(dummyData.rates[targetCurrency]);
  }, [baseCurrency, targetCurrency]);

  const handleConvert = () => {
    setConvertedAmount((amount * exchangeRate).toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text>Select Base Currency</Text>
      <Picker
        selectedValue={baseCurrency}
        onValueChange={(itemValue) => setBaseCurrency(itemValue)}
      >
        {currencies.map(currency => (
          <Picker.Item key={currency} label={currency} value={currency} />
        ))}
      </Picker>

      <Text>Select Target Currency</Text>
      <Picker
        selectedValue={targetCurrency}
        onValueChange={(itemValue) => {
          setTargetCurrency(itemValue);
          setExchangeRate(dummyData.rates[itemValue]);
        }}
      >
        {currencies.map(currency => (
          <Picker.Item key={currency} label={currency} value={currency} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      
      <Button title="Convert" onPress={handleConvert} />

      {convertedAmount !== '' && (
        <Text>
          {amount} {baseCurrency} = {convertedAmount} {targetCurrency}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});

export default ExchangePage;
