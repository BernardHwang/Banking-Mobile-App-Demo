import { CardModel } from "../../models/card-model";

export const NORMALCARDS = (user: any): CardModel[] => [
  {
    id: 1,
    number: '2323446567890123',
    name: user ? user?.username : '',
    expiry: '12/24',
    type: 'classic',
    brand: 'visa',
    color: ['#E66B11', '#f98836'],
  },
  {
    id: 2,
    number: '3324556656435549',
    name: user ? user?.username : '',
    expiry: '12/26',
    type: 'gold',
    brand: 'mastercard',
    color: ['#0AA194', '#0a9386'],
  },
];

export const VIPCARDS = (user: any): CardModel[] => [
  {
    id: 1,
    number: '9854243723437557',
    name: user ? user?.username : '',
    expiry: '07/29',
    type: 'platinum',
    brand: 'visa',
    color: ['#9030BB', '#ad34e5'],
  },
  {
    id: 2,
    number: '4324232135453456',
    name: user ? user?.username : '',
    expiry: '04/26',
    type: 'platinum',
    brand: 'mastercard',
    color: ['#113368', '#081A37'],
  },
  {
    id: 3,
    number: '3213442123456789',
    name: user ? user?.username : '',
    expiry: '09/30',
    type: 'black',
    brand: 'mastercard',
    color: ['#35363d', '#202126'],
  },
]