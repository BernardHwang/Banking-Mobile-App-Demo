import React, { useState } from 'react'
import { Container } from '../../../../components/container';
import { Header } from '../../../../components/header';
import { Input, VStack, Button, useTheme, HStack, Text, Select, ScrollView, KeyboardAvoidingView } from 'native-base';
import { ArrowElbowDownRight } from 'phosphor-react-native';
import { Card } from '../../../../components/card';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList, StackRoutes } from '../../../../navigation/routes/stack-routes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Alert } from 'react-native';

export const InfoFilling = ({ route } :any) => {
  const { colors } = useTheme();
  const { item } = route.params;
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phoneNum, setPhoneNum ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ marriage, setMarriage ] = useState('');
  const [ occupation, setOccupation ] = useState('');
  const [ salary, setSalary ] = useState('');
  const [ loan, setLoan ] = useState('');

  const submit = () => {
    if (
      name === '' &&
      email === '' &&
      phoneNum === '' &&
      address === '' &&
      marriage === '' &&
      occupation === '' &&
      salary === '' &&
      loan === ''
    ) {
      Alert.alert("Please Fill In All the Information")
    } else {
      navigation.navigate(StackRoutes.CreditCardStatus)
      Alert.alert("Successfully Submited Application. Please Wait For Notification")
    }
  }

  return (
    <Container>
      <Header title="Info Required" backButton />
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{flexGrow: 1}}
        enableOnAndroid={true}
        extraScrollHeight={20} // Adjust scroll height to position the input better
      >
        <VStack mt={20} mb={12} mx={4} space={6}>
          <Card {...item} />
          <Input
            placeholder="Name"
            size="2xl"
            variant="filled"
            defaultValue={name}
            onChange={(text) => setName(text.nativeEvent.text)}
          />
          <Input
            placeholder="Email"
            size="2xl"
            variant="filled"
            defaultValue={email}
            onChange={(text) => setEmail(text.nativeEvent.text)}
          />
          <Input
            placeholder="Phone Number"
            size="2xl"
            variant="filled"
            defaultValue={phoneNum}
            onChange={(text) => setPhoneNum(text.nativeEvent.text)}
          />
          <Input
            placeholder="Address"
            size="2xl"
            variant="filled"
            defaultValue={address}
            onChange={(text) => setAddress(text.nativeEvent.text)}
          />
          <Select
            placeholder="Marriage Status"
            size="2xl"
            variant="filled"
            selectedValue={marriage}
            onValueChange={setMarriage}
          >
            <Select.Item label="Single" value="single" />
            <Select.Item label="Married" value="married" />
          </Select>
          <Input
            placeholder="Occupation"
            size="2xl"
            variant="filled"
            defaultValue={occupation}
            onChange={(text) => setOccupation(text.nativeEvent.text)}
          />
          <Input
            placeholder="Basic Salary"
            size="2xl"
            variant="filled"
            defaultValue={salary}
            onChange={(text) => setSalary(text.nativeEvent.text)}
          />
          <Select
            placeholder="Loan or Commitment"
            size="2xl"
            variant="filled"
            selectedValue={loan}
            onValueChange={setLoan}
          >
            <Select.Item label="Yes" value="yes" />
            <Select.Item label="No" value="no" />
          </Select>
          <Button rounded="full" onPress={() => submit()}>
            <HStack alignItems="center" space={2}>
              <ArrowElbowDownRight color={colors.text[500]} />
              <Text fontSize={16} color={colors.text[500]}>
                Submit
              </Text>
            </HStack>
          </Button>
        </VStack>
      </KeyboardAwareScrollView>
    </Container>
  )
};