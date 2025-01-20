import { Box, Heading, HStack, Image, Text, useTheme, VStack } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native';

type Voucher = {
  pic: string;
  name: string;
  description: string;
  expireDate: Date;
}

const VoucherList: Voucher[] = [
  {
    pic: 'https://st.depositphotos.com/2036511/2769/v/950/depositphotos_27691611-stock-illustration-red-10-percent-discount-sign.jpg',
    name: '10% Off on Electronics',
    description: 'Get 10% off on all electronics. Applicable for online purchases only.',
    expireDate: new Date('2025-02-15'),
  },
  {
    pic: 'https://scontent.fkul10-1.fna.fbcdn.net/v/t39.30808-6/473683913_122149782206330607_5335729600426274748_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=4g7Zc9du1P8Q7kNvgGg-jjn&_nc_zt=23&_nc_ht=scontent.fkul10-1.fna&_nc_gid=AoqrxsbN4jvIax4YRtTUb9U&oh=00_AYB_wVX7Pbhv1SxVDHoLLLbiGiq8yzqI9tX3_PDCPqNYjA&oe=6793C312',
    name: 'Buy 1 Get 1 Free',
    description: 'Buy one get one free on select clothing brands.',
    expireDate: new Date('2025-03-01'),
  },
  {
    pic: 'https://www.shutterstock.com/image-photo/selective-focus-on-red-discount-260nw-2499617949.jpg',
    name: 'Flat 50% Off on Shoes',
    description: 'Enjoy a flat 50% discount on premium footwear. Limited time offer!',
    expireDate: new Date('2025-01-31'),
  },
  {
    pic: 'https://www.shutterstock.com/image-vector/free-shipping-voucher-coupon-printable-260nw-2473073179.jpg',
    name: 'Free Shipping Voucher',
    description: 'Get free shipping on orders above $50. Valid for all products.',
    expireDate: new Date('2025-04-10'),
  },
  {
    pic: 'https://www.shutterstock.com/image-vector/5-cashback-sign-stamp-label-600nw-2335973021.jpg',
    name: '5% Cashback Voucher',
    description: 'Earn 5% cashback on grocery shopping over $100.',
    expireDate: new Date('2025-05-20'),
  },
]

export const Voucher = () => {
  const { colors } = useTheme();
  
  return (
    <>
      <Heading>Voucher:</Heading>
      <VStack space={2}>
        {VoucherList.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => {}}>
            <HStack alignItems="center" p={3} background='gray.100' borderRadius='2xl'>
            <Box
              style={{ width: 60, height: 60 }}
              size="full"
              rounded={16}
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              mr={4}
            >
              <Image source={{ uri: item.pic }} alt="Voucher Pic" size='sm'/>
            </Box>
            <VStack>
              <HStack>
                <Text
                  fontSize="md"
                  textTransform="capitalize"
                  fontWeight="bold"
                  color={colors.text[500]}
                >
                  {item.name}
                </Text>
              </HStack>
              <Text fontSize="xs" color={colors.gray[500]} mt={1}>
                {item.expireDate.toLocaleString('en-MY')}
              </Text>
            </VStack>
            <Text
              fontSize="xs"
              fontWeight="bold"
              flex={1}
              textAlign="right"
              color={colors.text[500]}
              justifyItems='justify'
            >
              {item.description}
            </Text>
          </HStack>
        </TouchableOpacity>
        ))}
      </VStack>
    </>
  )
}