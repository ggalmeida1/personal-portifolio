import { DiReact, DiTerminal, DiDrupal, DiNodejsSmall, DiAws, DiMysql } from "react-icons/di";


export const Skills = [
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => <>I have developed and maintained WebApps using React.</>,
  },
  {
    slug: "drupal",
    Component: DiDrupal,
    title: "Drupal",
    Description: () => <>I have worked contributing with Drupal's open source community.</>,
  },
  {
    slug: "nodejs",
    Component: DiNodejsSmall,
    title: "Node.js",
    Description: () => <>I can code in NodeJS. I have developed and maintained Apps using it purely and working with Typescript.</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I have written dozens of Shell scripts for various purposes including CI/CD and automations.</>,
  },
  {
    slug: "mysql",
    Component: DiMysql,
    title: "MySQL",
    Description: () => <>I have used MySQL as DBMS in almost every project in my career.</>,
  },
  {
    slug: "aws",
    Component: DiAws,
    title: "AWS",
    Description: () => <>I am well versed with AWS services and have deployed production ready apps in to it.</>,
  },
];
