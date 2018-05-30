export interface Activity {
  actID: string;
  type: ActivityType;
  title: string;
  description: string;
  speaker: string;
  credits: number;
}

export enum ActivityType {
  Workshop_attended,
  Blog_Post,
  Employee_hired
}
