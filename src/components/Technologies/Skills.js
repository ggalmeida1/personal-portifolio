import { DiReact, DiTerminal, DiDrupal, DiLaravel, DiAws, DiMysql } from "react-icons/di";


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
    slug: "laravel",
    Component: DiLaravel,
    title: "Laravel",
    Description: () => <>I can code in PHP 7+. I have developed and maintained platforms using it purely and working with Laravel.</>,
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
