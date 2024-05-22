import { ActivityData } from "../../redux/developer-redux/types";

export function getName({ activity }: { activity: ActivityData }) {
  if (!activity) return;
  const names = activity.AuthorWorklog.rows.map((elem) => ({
    name: elem.name,
    value: elem.name,
  }));

  return names;
}
