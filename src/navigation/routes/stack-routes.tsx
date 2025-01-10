export enum StackRoutes {
  HomeTabs = 'HomeTabs',
  Transactions = 'Transactions',
  CashIn = 'CashIn',
  SendMoney='SendMoney'
  TransactionsType = 'TransactionsType',
  BillHistory = 'BillHistory',
  Transfer = 'Transfer',
}

export type StackParamList = {
  [StackRoutes.HomeTabs]: undefined;
  [StackRoutes.Transactions]: undefined;
  [StackRoutes.CashIn]: undefined;
  [StackRoutes.SendMoney]: undefined;
  [StackRoutes.TransactionsType]: undefined;
  [StackRoutes.BillHistory]: undefined;
  [StackRoutes.Transfer]: any;
};
