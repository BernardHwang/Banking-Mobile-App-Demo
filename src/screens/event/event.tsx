import React from 'react'
import { Container } from '../../components/container'
import { Header } from '../../components/header'
import { ScrollView, VStack } from 'native-base'
import { Voucher } from './components/voucher'
import { Sticker } from './components/sticker'
import { LuckyDraw } from './components/luckydraw'

export const Event = () => {
  return (
    <Container>
      <Header title='Event' backButton/>
      <ScrollView>
      <VStack pt={16} pb={12} space={6} px={6}>
        <Voucher />
        <Sticker />
        <LuckyDraw />
      </VStack>
      </ScrollView>
    </Container>
  )
}