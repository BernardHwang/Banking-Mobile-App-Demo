import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { Container } from '../../components/container';
import { Header } from '../../components/header';
import { VStack, Input, Button, HStack, Text, ScrollView } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Support = () => {
  interface Message {
    sender: 'user' | 'bot';
    text: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const commands = [
    'Sure, let me help you with that!',
    'I am here to assist you.',
    'Can you provide more details?',
    'Interesting question! Let me think...',
    'I am not sure, but I will find out for you.',
    'Thank you for asking, let me process that.',
  ];

  useEffect(() => {
    // Send a welcome message when the chatbot loads
    setMessages([{ sender: 'bot', text: 'Welcome! How can I assist you today?' }]);
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      // Add the user message
      const userMessage: Message = { sender: 'user', text: input.trim() };
      setMessages((prev) => [...prev, userMessage]);

      // Generate a random bot response
      const botResponse: Message = { sender: 'bot', text: commands[Math.floor(Math.random() * commands.length)] };
      setTimeout(() => setMessages((prev) => [...prev, botResponse]), 1000);

      setInput(''); // Clear input
    }
  };

  return (
    <Container>
      <Header title="Support" backButton />
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        extraScrollHeight={10} // Adjust this to ensure the input is fully visible
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <VStack flex={1} space={4} p={4} mt={16}>
          {/* Message Display */}
          <ScrollView
            flex={1}
            bg="gray.100"
            borderRadius="md"
            p={4}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
          >
            {messages.map((message, index) => (
              <HStack
                key={index}
                alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
                bg={message.sender === 'user' ? 'blue.500' : 'gray.300'}
                borderRadius="lg"
                px={4}
                py={2}
                my={1}
                maxWidth="70%"
              >
                <Text color={message.sender === 'user' ? 'white' : 'black'}>{message.text}</Text>
              </HStack>
            ))}
          </ScrollView>

          {/* Input and Send Button */}
          <HStack space={2} alignItems="center">
            <Input
              flex={1}
              placeholder="Type your message..."
              value={input}
              onChangeText={(text) => setInput(text)}
              size="md"
            />
            <Button onPress={handleSend} size="md">
              Send
            </Button>
          </HStack>
        </VStack>
      </KeyboardAwareScrollView>
    </Container>
  );
};
