export enum StackRoutes {
  HomeTabs = 'HomeTabs',
  Transactions = 'Transactions',
  CashIn = 'CashIn',
  SendMoney='SendMoney',
  TransactionsType = 'TransactionsType',
  BillHistory = 'BillHistory',
  Transfer = 'Transfer',
  Application = 'Application',
  CreditCard = 'CreditCard',
  CreditCardInfoFilling = 'CreditCardInfoFilling',
  CreditCardInfoFillingAdv = 'CreditCardInfoFillingAdv',
  CreditCardStatus = 'CreditCardStatus',
  Event = 'Event',
  RedeemSticker = 'RedeemSticker',
  Support = 'Support'
}

export type StackParamList = {
  [StackRoutes.HomeTabs]: undefined;
  [StackRoutes.Transactions]: undefined;
  [StackRoutes.CashIn]: undefined;
  [StackRoutes.SendMoney]: undefined;
  [StackRoutes.TransactionsType]: undefined;
  [StackRoutes.BillHistory]: undefined;
  [StackRoutes.Transfer]: any;
  [StackRoutes.Application]: undefined;
  [StackRoutes.CreditCard]: undefined;
  [StackRoutes.CreditCardInfoFilling]: any;
  [StackRoutes.CreditCardInfoFillingAdv]: any;
  [StackRoutes.Event]: undefined;
  [StackRoutes.RedeemSticker]: undefined;
  [StackRoutes.CreditCardStatus]: undefined;
  [StackRoutes.Support]: undefined;
};
