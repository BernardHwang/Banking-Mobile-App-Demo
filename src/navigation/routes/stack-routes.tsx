export enum StackRoutes {
  HomeTabs = 'HomeTabs',
  Transactions = 'Transactions',
  CashIn = 'CashIn',
  SendMoney='SendMoney'
}

export type StackParamList = {
  [StackRoutes.HomeTabs]: undefined;
  [StackRoutes.Transactions]: undefined;
  [StackRoutes.CashIn]: undefined;
  [StackRoutes.SendMoney]: undefined;
};
