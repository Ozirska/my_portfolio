import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

import mealSerch from "../assets/mealSerch.png";
import AplusStudio from "../assets/AplusStudio.png";
import recipes from "../assets/recipes.png";
import bulky from "../assets/bulky.png";
import postgeSql from "../assets/tech/postgeSql.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "postgeSql",
    icon: postgeSql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Lex&Co",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - May 2024",
    points: [
      "Developed a mobile application using React Native, integrating it with an Appwrite backend hosted on Docker.",
      "Collaborated with cross-functional teams during project planning and setup, contributing to daily standups to enhance team communication.",
      "Ensured seamless integration between the frontend and backend services.",
      "Adapted quickly to project needs by learning React Native, demonstrating a strong ability to pick up new technologies efficiently.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "BeCode",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - March 2024",
    points: [
      "Gained hands-on experience in a collaborative environment by joining BeCode, focusing on both frontend and backend development.",
      "Utilized Git and GitHub for version control while working on group projects that simulated real job scenarios.",
      "Developed frontend applications using JavaScript, HTML, and CSS, while ensuring responsive and user-friendly interfaces.",
      "Expanded backend expertise by working with Node.js, Express.js, PostgreSQL, and MongoDB.",
      "Applied React framework to build dynamic, interactive web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Meal Serch",
    description:
      "Web-based platform that enables users to search for meal recipes, view results, and explore detailed cooking instructions, ingredients, and measurements through a dynamic modal interface.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "FetchAPI",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: mealSerch,
    source_code_link: "https://ozirska.github.io/mealSearch/",
  },
  {
    name: "A+ Studio",
    description:
      "A practice web application where I utilized libraries and honed my layout skills.",
    tags: [
      {
        name: "SwiperJS",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html/scss",
        color: "pink-text-gradient",
      },
    ],
    image: AplusStudio,
    source_code_link: "https://ozirska.github.io/AplusStudio/",
  },
  {
    name: "Recipes",
    description:
      "A practice web application where users can create an account to access a complete collection of recipes and store their own personalized recipes, enhancing both authentication and CRUD functionalities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: recipes,
    source_code_link: "https://recipe-gilt-two.vercel.app/",
  },
  {
    name: "Bulky_MVC",
    description:
      "An application built with ASP.NET, where users can browse products, manage their shopping cart, and place orders. It includes features like product management, category setup, and user authentication, providing an efficient solution for online shopping.",
    tags: [
      {
        name: "ASP.Net",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bulky,
    source_code_link: "https://github.com/Ozirska/Bulky_MVC",
  },
];

export { services, technologies, experiences, testimonials, projects };
