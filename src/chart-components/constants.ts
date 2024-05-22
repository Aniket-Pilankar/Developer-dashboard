import { tokens } from "../styles/theme";

interface ChildItem {
  count: string;
  label: string;
  fillColor: string;
}

interface Item {
  children: ChildItem[];
}

interface DayData {
  date: string;
  items: Item;
}

export interface FormattedData {
  date: string;
  [key: string]: string;
}

export const data: DayData[] = [
  {
    date: "2024-05-06",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "7",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "2",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-07",
    items: {
      children: [
        {
          count: "1",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "7",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "4",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "1",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-08",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "4",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "2",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-09",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "1",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "12",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "1",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-10",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "2",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "3",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-11",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "4",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "0",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-12",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "4",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "0",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-13",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "5",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "4",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "2",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-14",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "3",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "3",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "1",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-15",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "1",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "0",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-16",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "0",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "0",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-17",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "0",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "0",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-18",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "0",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "0",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
  {
    date: "2024-05-19",
    items: {
      children: [
        {
          count: "0",
          label: "PR Open",
          fillColor: "#EF6B6B",
        },
        {
          count: "0",
          label: "PR Merged",
          fillColor: "#61CDBB",
        },
        {
          count: "0",
          label: "Commits",
          fillColor: "#FAC76E",
        },
        {
          count: "0",
          label: "PR Reviewed",
          fillColor: "#C2528B",
        },
        {
          count: "0",
          label: "PR Comments",
          fillColor: "#0396A6",
        },
        {
          count: "0",
          label: "Incident Alerts",
          fillColor: "#5F50A9",
        },
        {
          count: "0",
          label: "Incidents Resolved",
          fillColor: "#8F3519",
        },
      ],
    },
  },
];

export const mockLineData = [
  {
    id: "totalActivity",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        name: "PR Open",
        value: "1",
      },
      {
        name: "PR Merged",
        value: "1",
      },
      {
        name: "Commits",
        value: "49",
      },
      {
        name: "PR Reviewed",
        value: "19",
      },
      {
        name: "PR Comments",
        value: "4",
      },
      {
        name: "Incident Alerts",
        value: "0",
      },
      {
        name: "Incidents Resolved",
        value: "0",
      },
    ],
  },
];

// export const mockBarData = [
//   {
//     country: "AD",
//     "hot dog": 137,
//     "hot dogColor": "hsl(229, 70%, 50%)",
//     burger: 96,
//     burgerColor: "hsl(296, 70%, 50%)",
//     kebab: 72,
//     kebabColor: "hsl(97, 70%, 50%)",
//     donut: 140,
//     donutColor: "hsl(340, 70%, 50%)",
//   },
//   {
//     country: "AE",
//     "hot dog": 55,
//     "hot dogColor": "hsl(307, 70%, 50%)",
//     burger: 28,
//     burgerColor: "hsl(111, 70%, 50%)",
//     kebab: 58,
//     kebabColor: "hsl(273, 70%, 50%)",
//     donut: 29,
//     donutColor: "hsl(275, 70%, 50%)",
//   },
//   {
//     country: "AF",
//     "hot dog": 109,
//     "hot dogColor": "hsl(72, 70%, 50%)",
//     burger: 23,
//     burgerColor: "hsl(96, 70%, 50%)",
//     kebab: 34,
//     kebabColor: "hsl(106, 70%, 50%)",
//     donut: 152,
//     donutColor: "hsl(256, 70%, 50%)",
//   },
//   {
//     country: "AG",
//     "hot dog": 133,
//     "hot dogColor": "hsl(257, 70%, 50%)",
//     burger: 52,
//     burgerColor: "hsl(326, 70%, 50%)",
//     kebab: 43,
//     kebabColor: "hsl(110, 70%, 50%)",
//     donut: 83,
//     donutColor: "hsl(9, 70%, 50%)",
//   },
//   {
//     country: "AI",
//     "hot dog": 81,
//     "hot dogColor": "hsl(190, 70%, 50%)",
//     burger: 80,
//     burgerColor: "hsl(325, 70%, 50%)",
//     kebab: 112,
//     kebabColor: "hsl(54, 70%, 50%)",
//     donut: 35,
//     donutColor: "hsl(285, 70%, 50%)",
//   },
//   {
//     country: "AL",
//     "hot dog": 66,
//     "hot dogColor": "hsl(208, 70%, 50%)",
//     burger: 111,
//     burgerColor: "hsl(334, 70%, 50%)",
//     kebab: 167,
//     kebabColor: "hsl(182, 70%, 50%)",
//     donut: 18,
//     donutColor: "hsl(76, 70%, 50%)",
//   },
//   {
//     country: "AM",
//     "hot dog": 80,
//     "hot dogColor": "hsl(87, 70%, 50%)",
//     burger: 47,
//     burgerColor: "hsl(141, 70%, 50%)",
//     kebab: 158,
//     kebabColor: "hsl(224, 70%, 50%)",
//     donut: 49,
//     donutColor: "hsl(274, 70%, 50%)",
//   },
// ];
