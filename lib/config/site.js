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
    designation: "Business Development Associate",
    image: "https://avatars.githubusercontent.com/isadarsh",
  },
];

const FeaturesList = [
  {
    title: "Allies",
    description:
      "Meet your mental health squad – a team of witty chatbots with distinct personalities! Engage with the Rational Guru for problem-solving, seek Comfort Cuddles for empathy, and get a Boost Buddy to energize your motivation. They'll be your trusty companions on the path to well-being.",
  },
  {
    title: "Mind Reader AI",
    description:
      "Our advanced deep learning algorithms analyze your interactions and provide insights into potential mental health conditions. Saathi's predictive powers help you take proactive steps towards self-awareness and growth.",
  },
  {
    title: "Personalized Empowerment Dashboard",
    description:
      "Your mental health command center awaits! Get a comprehensive and personalized dashboard packed with insights about your mental well-being. From identifying patterns to offering tailor-made solutions and Cognitive Behavioral Therapy (CBT) insights, it's your portal to progress.",
  },
  {
    title: "AI Empowered To-Do List",
    description:
      "Our AI generates a thoughtful to-do list, suggesting actions that foster well-being for you and those around you. Embrace positive change with confidence and clarity.",
  },
  {
    title: "Sonic Serenity Playlists",
    description:
      "Immerse yourself in harmonious healing. Saathi creates custom Spotify playlists and recommends podcasts to elevate your mood and engage your mind. Let the power of music and knowledge be your soothing companions.",
  },
  {
    title: "Continuous Evolution Algorithm",
    description:
      "Our evolving algorithm thrives on user metrics, consistently enhancing your experience. Expect continuous improvements that keep pace with your personal growth and needs.",
  },
];

export { NavItems, NavMenuItems, People, FeaturesList };
