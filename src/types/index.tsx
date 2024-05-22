type ActivityType =
  | "PR Open"
  | "PR Merged"
  | "Commits"
  | "PR Reviewed"
  | "PR Comments"
  | "Incident Alerts"
  | "Incidents Resolved";

interface ActivityMeta {
  label: ActivityType;
  fillColor: string;
}

interface ChildItem {
  count: string;
  label: string;
  fillColor: string;
}

interface Item {
  children: ChildItem[];
}

export interface DayWiseActivity {
  date: string;
  items: Item;
}

interface IActiveDays {
  days: number;
  isBurnOut: boolean;
  insight: string[];
}

export interface TotalActivity {
  name: ActivityType;
  value: number;
}

export interface Row {
  name: string;
  totalActivity: TotalActivity[];
  dayWiseActivity: DayWiseActivity[];
  activeDays: IActiveDays;
}

export interface IData {
  // data: {
  AuthorWorklog: {
    activityMeta: ActivityMeta[];
    rows: Row[];
  };
  // };
}
