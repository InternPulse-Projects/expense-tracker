import { color } from "framer-motion";
import { colgroup, title } from "framer-motion/client";

export const bills = [
  {
    id: 1,
    title: "Total Expenses",
    amount: "$24,500",
    color: "green",
    stat: "12% from last month",
  },
  {
    id: 2,
    title: "Monthly Budget",
    amount: "$30,000",
  },
  {
    id: 3,
    title: "Outstanding Bills",
    amount: "$5,240",
    color: "red",
    stat: "Due in 5 days",
  },
];

export const statData = [
  {
    title: "Expense Category",
    data: [
      {
        type: "Office Supplies",
        amount: "$8,500",
        prog: "8500",
        color: "blue",
      },
      {
        type: "Marketing",
        amount: "$6,300",
        prog: "6300",
        color: "purple",
      },
      {
        type: "Software",
        amount: "$5,100",
        prog: "5100",
        color: "green",
      },
    ],
  },
  {
    title: "Recent Transactions",
    data: [
      {
        type: "Office Supplies",
        amount: "-$250.00",
        date: "Today, 2:30 PM",
      },
      {
        type: "Marketing Campaign",
        amount: "-$1200.00",
        date: "yesterday",
      },
      {
        type: "Cloud Services",
        amount: "-$499.99.00",
        date: "Feb 5, 2025",
      },
    ],
  },
];

export const quickActions = [
  {
    title: "Add expense",
    color: "blue",
    background: "#EFF6FF",
  },
  {
    title: "Create Invoice",
    color: "purple",
    background: "#F5F3FF",
  },
  {
    title: "Generate Report",
    color: "green",
    background: "#ECFDF5",
  },
  {
    title: "Settings",
    color: "orange",
    background: "#FFF7ED",
  },
];
