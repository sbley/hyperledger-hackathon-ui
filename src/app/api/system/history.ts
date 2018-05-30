export interface HistorianRecord {
  transactionId: string;
  transactionType: string;
  transactionInvoked: string;
  participantInvoking: string;
  identityUsed: string;
  transactionTimestamp: Date;
}
