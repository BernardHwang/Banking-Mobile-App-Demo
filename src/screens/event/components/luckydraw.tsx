import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Box, Heading, Image, useTheme } from 'native-base'
import React from 'react'
import { StackParamList, StackRoutes } from '../../../navigation/routes/stack-routes';
import { TouchableOpacity } from 'react-native';

export const LuckyDraw = () => {
    const { colors } = useTheme();
    const navigation = useNavigation<StackNavigationProp<StackParamList>>();

    return (
      <>
        <Heading>Lucky Draw:</Heading>
        <TouchableOpacity onPress={() => navigation.navigate(StackRoutes.RedeemSticker)}>
          <Image source={{uri: 'https://png.pngtree.com/png-clipart/20190903/original/pngtree-wheel-of-fortune-wheel-lucky-draw-fortune-wheel-png-image_4426571.jpg'}} size='2xl' width='full'/>
        </TouchableOpacity>
      </>
    )
}