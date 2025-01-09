export enum StackRoutes {
  HomeTabs = 'HomeTabs',
  Transactions = 'Transactions',
  TransactionsType = 'TransactionsType',
  BillHistory = 'BillHistory',
  Transfer = 'Transfer',
}

export type StackParamList = {
  [StackRoutes.HomeTabs]: undefined;
  [StackRoutes.Transactions]: undefined;
  [StackRoutes.TransactionsType]: undefined;
  [StackRoutes.BillHistory]: undefined;
  [StackRoutes.Transfer]: any;
};
