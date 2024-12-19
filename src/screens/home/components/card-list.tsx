import { Box, FlatList } from 'native-base';
import { useWindowDimensions } from 'react-native';

import { Card } from '../../../components/card';
import { useUserContext } from '../../../contexts/user-context';
import { CardModel } from '../../../models/card-model';
import { NORMALCARDS, VIPCARDS } from '../../../constant/cards';




export const CardList = () => {
  const { width } = useWindowDimensions();
  const { user } = useUserContext()
  const cards = user?.isVIP ? VIPCARDS(user) : NORMALCARDS(user)

  return (
    <FlatList
      horizontal
      stickyHeaderIndices={[0]}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      data={cards}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{
        paddingHorizontal: 8,
      }}
      renderItem={({ item }) => (
        <Box mb={6} px={2} style={{ width: width * 0.85 }}>
          <Card {...item} />
        </Box>
      )}
    />
  );
};
