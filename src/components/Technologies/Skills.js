import { DiReact, DiTerminal, DiDrupal, DiPhp } from "react-icons/di";
import { SiFirebase, SiGit } from "react-icons/si";


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
    Description: () => <>Currently working with Drupal9.</>,
  },
  {
    slug: "php",
    Component: DiPhp,
    title: "PHP",
    Description: () => <>I can code in PHP 7+. I have developed and maintained some platforms using it.</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I have written dozens of Shell scripts for various purposes including CI/CD and automations.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth & database in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub or Bitbucket for pushing my code.</>,
  },
];
