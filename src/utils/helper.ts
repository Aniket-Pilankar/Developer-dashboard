import { ActivityData } from "../redux/developer-redux/types";

export function getDeveloperInfo({
  name,
  activity,
}: {
  name: string;
  activity: ActivityData;
}) {
  if (!activity) return;
  return activity.AuthorWorklog.rows.filter(
    (developer) => developer.name === name
  )[0];
}

export {};
