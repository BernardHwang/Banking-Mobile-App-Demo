import { Box, Button, Heading, Image, useTheme, VStack } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StackParamList, StackRoutes } from '../../../navigation/routes/stack-routes';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const Sticker = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <>
      <Heading>Click to Collect Sticker:</Heading>
      <TouchableOpacity onPress={() => navigation.navigate(StackRoutes.RedeemSticker)}>
        <Image source={{uri: 'https://www.wikihow.com/images/thumb/3/35/Collect-Stickers-Step-17.jpg/v4-460px-Collect-Stickers-Step-17.jpg.webp'}} size='2xl' width='full'/>
      </TouchableOpacity>
    </>
  )
}