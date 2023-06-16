import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 113 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 209 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369 },
  { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 313 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 9,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 178,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 742,
    text: "Design Items",
  },
  {
    id: 4,
    number: 112,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/project1.png",
    name: "GenZcart (Ecommerce Web App)",
    tools: ["React", "NodeJs", "MongoDb", "Redux", "ExpressJs"],
    githubLink:"https://github.com/VishalArora14/ecart",
    websiteLink:"https://gen-z-cart.vercel.app/",
  },
  {
    id: 2,
    img: "/project2.png",
    name: "To-Do-List",
    tools: ["MongoDb", "ExpressJs", "ReactJs", "NodeJs"],
    githubLink:"https://github.com/VishalArora14/To-Do-List/",
    websiteLink:"https://va-to-do-list.vercel.app/",
  },
  {
    id: 3,
    img: "/project3.png",
    name: "Digital Board",
    tools: ["Canvas Web API", "HTML", "CSS", "JavaScript"],
    githubLink:"https://github.com/VishalArora14/Digital-Board/",
    websiteLink:"https://vishal-digital-board.netlify.app/",
  },
  {
    id: 4,
    img: "/project4.png",
    name: "Personal Portfolio",
    tools: ["NextJs", "ReactJs","Typescript", "Tailwind CSS"],
    githubLink:"https://github.com/VishalArora14/personal-portfolio/",
    websiteLink:"https://vishal-portfolio.vercel.app/",
  },
];

const skills = [
  { name: "C++", level: 95 },
  { name: "ReactJS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "NodeJs", level: 90 },
  { name: "NextJS", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 95 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "Delhi, India" },
  { id: 2, title: "Phone", text: "+91- 97115 89089" },
  { id: 3, title: "Email", text: "vishalarora0802@gmail.com" },
];

export { navLinks, projects, countUpItems, services, skills, contacts };
