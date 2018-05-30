export interface Application {
  appID: string;
  state: ApplicationState;
  participant: string;
  activity: string;
  transactionId?: string;
  timestamp?: Date;
}

export enum ApplicationState {
  PENDING = 'PENDING',
  // APPROVED,
  // REJECTED,
  // /*
  // */
  // DIRECTED,
  // WRITE,
  // ADVERTISED,
  // APPLY_HOLYDAY,
  // APPLY_SALARY,
  // APPLY_EVENT,
  // ORDER,
}
