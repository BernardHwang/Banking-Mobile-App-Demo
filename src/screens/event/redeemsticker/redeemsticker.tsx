import React from 'react'
import { Container } from '../../../components/container'
import { Header } from '../../../components/header'
import { Box, HStack, Image, ScrollView, Stack, Text, useTheme, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

const StickerList = [
  {
    pic: 'https://i.pinimg.com/564x/6a/ba/8b/6aba8b5c288c728568945c53625eba87.jpg',
    name: 'Smiley Face',
  },
  {
    pic: 'https://i.pinimg.com/originals/3c/16/46/3c1646a04c1ed4612e0ee830eff0d1bc.png',
    name: 'Thumbs Up',
  },
  {
    pic: 'https://cdn-icons-png.flaticon.com/256/6782/6782732.png',
    name: 'Heart Sticker',
  },
  {
    pic: 'https://cdn-icons-png.flaticon.com/256/6381/6381582.png',
    name: 'Star Sticker',
  },
  {
    pic: 'https://cdn-icons-png.flaticon.com/512/3304/3304555.png',
    name: 'Fire Icon',
  },
  {
    pic: 'https://stickershop.line-scdn.net/stickershop/v1/product/8967767/LINEStorePC/main.png?v=1',
    name: 'Love Sticker',
  },
  {
    pic: 'https://static.wikia.nocookie.net/roblox-arcane-adventures/images/0/03/Cool_shades.png/revision/latest/thumbnail/width/360/height/450?cb=20240627181759',
    name: 'Cool Shades',
  },
  {
    pic: 'https://64.media.tumblr.com/d4f26ec0d345e31807950b435e69beea/tumblr_inline_pn1bmuUcUv1qzs6oc_640.png',
    name: 'Wow Reaction',
  },
];

export const RedeemSticker = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <Header title='Redeem Sticker' backButton/>
      <ScrollView>
        <HStack pt={16} display='flex' flexWrap='wrap' justifyContent='center'>
          {StickerList.map((item, index) => (
            <Box key={index} backgroundColor={colors.coolGray[100]} p={4} m={4} borderRadius='3xl'>
              <TouchableOpacity>
                <VStack size='50%'  justifyContent='center'>
                  <Image source={{uri: item.pic}} alt='Image' size={'xl'} borderRadius='full'/>
                  <Text style={{textAlign: 'center'}} fontSize={16} fontWeight='bold'>{item.name}</Text>
                </VStack>
              </TouchableOpacity>
            </Box>
          ))}
        </HStack>
      </ScrollView>
    </Container>
  )
}