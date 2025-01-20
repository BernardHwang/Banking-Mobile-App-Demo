import React, { useState } from 'react';
import { VStack, Input, Select, Button, HStack, Text, Box, IconButton, useTheme } from 'native-base';
import { Container } from '../../../../components/container';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList, StackRoutes } from '../../../../navigation/routes/stack-routes';
import { Header } from '../../../../components/header';
import { CaretLeft as BackIcon } from 'phosphor-react-native';
import { Alert } from 'react-native';
import { Card } from '../../../../components/card';

const backButton = (activeTab: number, setActiveTab: any) => {
  const { colors } = useTheme();

  return (
    <IconButton
      variant="ghost"
      alignItems="center"
      justifyContent="center"
      p={1}
      icon={<BackIcon size={24} color={colors.text[500]} />}
      onPress={() => setActiveTab(activeTab - 1)}
    />
  );
};

export const InfoFillingAdv = ({ route }: any) => {
  const { colors } = useTheme();
  const { item } = route.params;
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phoneNum, setPhoneNum ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ marriage, setMarriage ] = useState('');
  const [ occupation, setOccupation ] = useState('');
  const [ salary, setSalary ] = useState('');
  const [ loan, setLoan ] = useState('');
  const [ loanDetails, setLoanDetails ] = useState('');
  const [ monthCommitment, setMonthCommitment ] = useState('');
  const [ compName, setCompName ] = useState('');
  const [ compPhoneNum, setCompPhoneNum ] = useState('');
  const [ compAddress, setCompAddress ] = useState('');
  const [ famName, setFamName ] = useState('');
  const [ famPhoneNum, setFamPhoneNum ] = useState('');
  const [ famAddress, setFamAddress ] = useState('');

  const submit = () => {
      if (
        name === '' &&
        email === '' &&
        phoneNum === '' &&
        address === '' &&
        marriage === '' &&
        occupation === '' &&
        salary === '' &&
        loan === '' && 
        loanDetails === '' &&
        monthCommitment === '' &&
        compName === '' &&
        compPhoneNum === '' &&
        compAddress === '' &&
        famName === '' &&
        famPhoneNum === '' && 
        famAddress === ''
      ) {
        Alert.alert("Please Fill In All the Information")
      } else {
        navigation.navigate(StackRoutes.CreditCardStatus)
        Alert.alert("Successfully Submited Application. Please Wait For Notification")
      }
    }

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <VStack mt={6} space={4}>
            <Input 
              placeholder="Name" 
              size="2xl" 
              variant="filled" 
              defaultValue={name} 
              onChange={e => setName(e.nativeEvent.text)} 
            />
            <Input 
              placeholder="Email" 
              size="2xl" 
              variant="filled" 
              defaultValue={email} 
              onChange={e => setEmail(e.nativeEvent.text)} 
            />
            <Input 
              placeholder="Phone Number" 
              size="2xl" 
              variant="filled" 
              defaultValue={phoneNum} 
              onChange={e => setPhoneNum(e.nativeEvent.text)} 
            />
            <Input 
              placeholder="Address" 
              size="2xl" 
              variant="filled" 
              defaultValue={address} 
              onChange={e => setAddress(e.nativeEvent.text)} 
            />
            <Select 
              placeholder="Marriage Status" 
              size="2xl" variant="filled" 
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
          </VStack>
        );
      case 1:
        return (
          <VStack mt={6} space={4}>
            <Input 
              placeholder="Loan Details" 
              size="2xl" 
              variant="filled"
              defaultValue={loanDetails}
              onChange={e => setLoanDetails(e.nativeEvent.text)}
            />
            <Input 
              placeholder="Monthly Commitment Amount" 
              size="2xl" 
              variant="filled" 
              defaultValue={monthCommitment}
              onChange={e => setMonthCommitment(e.nativeEvent.text)}
            />
          </VStack>
        );
      case 2:
        return (
          <VStack mt={6} space={4}>
            <Input 
            placeholder="Company Name" 
            size="2xl" 
            variant="filled" 
            defaultValue={compName}
            onChange={e => setCompName(e.nativeEvent.text)}
          />
            <Input 
            placeholder="Company Phone Number" 
            size="2xl" 
            variant="filled" 
            defaultValue={compPhoneNum}
            onChange={e => setCompPhoneNum(e.nativeEvent.text)}
          />
            <Input 
            placeholder="Company Address" 
            size="2xl" 
            variant="filled" 
            defaultValue={compAddress}
            onChange={e => setCompAddress
              (e.nativeEvent.text)}
          />
        </VStack>
        );
      case 3:
        return (
          <VStack mt={6} space={4}>
            <Input 
              placeholder="Family Member Name" 
              size="2xl" 
              variant="filled" 
              defaultValue={famName}
              onChange={e => setFamName(e.nativeEvent.text)}
            />
            <Input 
              placeholder="Family Phone Number" 
              size="2xl" 
              variant="filled" 
              defaultValue={famPhoneNum}
              onChange={e => setFamPhoneNum(e.nativeEvent.text)}
            />
            <Input 
              placeholder="Family Address" 
              size="2xl" 
              variant="filled" 
              defaultValue={famAddress}
              onChange={e => setFamAddress(e.nativeEvent.text)}
            />
          </VStack>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <KeyboardAwareScrollView style={{ flex: 1 }} extraScrollHeight={20} >
        <Header title={['Personal', 'Loan', 'Company', 'Family'][activeTab]} backButton />
        <VStack  pt={16} pb={12} px={4}> 
          <Card {...item}/>
          {/* Tab Content */}
          <Box px={4} >{renderTabContent()}</Box>
          {/* Submit Button */}
          <HStack width='full' justifyContent='center'>
            {activeTab >= 1 && (
              <Button mt={4} mx={4} rounded="full" width='40%' onPress={() => setActiveTab(activeTab-1)}>
                <HStack alignItems="center" space={2}>
                  <Text fontSize={16} color={colors.text[500]}>
                    Back
                  </Text>
                </HStack>
              </Button>
            )}
            <Button mt={4} mx={4} rounded="full" width='40%' onPress={() => activeTab !== 3 ? setActiveTab(activeTab+1) : submit()}>
              <HStack alignItems="center" space={2}>
                <Text fontSize={16} color={colors.text[500]}>
                  {activeTab === 3 ? 'Finish' : 'Next'}
                </Text>
              </HStack>
            </Button>
          </HStack>
        </VStack>
      </KeyboardAwareScrollView> 
    </Container>
  );
}
