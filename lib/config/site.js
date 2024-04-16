// import {
//   BookText,
//   CalendarCheck,
//   HeartPulse,
//   LayoutDashboard,
//   MessageCircleMore,
// } from "lucide-react";

// import { slugify } from "@/lib/utils";

// const links = {
//   twitter: "https://twitter.com/Arghyad18",
//   github: "https://github.com/NemesisLW",
// };

const NavItems = [
  {
    title: "Features",
    href: "/#features",
    description: "Explore the various features offered by our product.",
  },
  {
    title: "Benefits",
    href: "/benefits",
    description:
      "Check out our benefits plans and choose the one that suits your needs.",
  },
  {
    title: "Guides",
    href: "/guides",
    description:
      "Find helpful guides and tutorials to assist you in using our product effectively.",
  },
  {
    title: "Documentation",
    href: "/docs",
    description:
      "Access detailed documentation for in-depth information about our product's functionality.",
  },
];

const NavMenuItems = [
  {
    title: "MainNav Item 1",
    href: "/mainnav-item-1",
    description: "Description for MainNav Item 1",
  },
  {
    title: "MainNav Item 2",
    description: "Description for MainNav Item 2",
    items: [
      {
        title: "Sub-Item 2.1",
        href: "/sub-item-2-1",
        description: "Description for Sub-Item 2.1",
      },
      {
        title: "Sub-Item 2.2",
        href: "/sub-item-2-2",
        description: "Description for Sub-Item 2.2",
      },
    ],
  },
  {
    title: "MainNav Item 3",
    href: "/mainnav-item-3",
    description: "Description for MainNav Item 3",
    items: [
      {
        title: "Sub-Item 2.1",
        href: "/sub-item-2-1",
        description: "Description for Sub-Item 2.1",
      },
      {
        title: "Sub-Item 2.2",
        href: "/sub-item-2-2",
        description: "Description for Sub-Item 2.2",
      },
    ],
  },
];

const People = [
  {
    id: 1,
    name: "Arghya Dutta",
    designation: "Full Stack Product Engineer",
    image: "https://avatars.githubusercontent.com/DuttaArghya",
  },
  {
    id: 2,
    name: "Nilesh Ranjan Pal",
    designation: "ML Researcher",
    image: "https://avatars.githubusercontent.com/smallboy713102",
  },
  {
    id: 3,
    name: "Riddhankur Sarkar",
    designation: "Full Stack Software Developer",
    image: "https://avatars.githubusercontent.com/riddhankur000",
  },
  {
    id: 4,
    name: "Adarsh Pandey",
    designation:
      "Associate Web Developer, Lead Database Analyst, Representing U.P, #Hindi HeartLand Diversification",
    image: "https://avatars.githubusercontent.com/isadarsh",
  },
];

export { NavItems, NavMenuItems, People };
