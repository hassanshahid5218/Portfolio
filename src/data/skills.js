import {
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiTailwindcss,
  SiBootstrap,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiCloudinary,
  SiFirebase,
  SiSupabase,
  SiStripe,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiLock, FiUpload, FiDatabase } from "react-icons/fi";
import {
  HiOutlineTemplate,
  HiOutlineRefresh,
  HiOutlineGlobeAlt,
  HiOutlineDeviceMobile,
} from "react-icons/hi";

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "C++", icon: SiCplusplus },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Router DOM", icon: SiReactrouter },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Axios", icon: SiAxios },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: FiDatabase },
    ],
  },
  {
    title: "Authentication",
    skills: [
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "bcrypt.js", icon: FiLock },
    ],
  },
  {
    title: "Cloud & Services",
    skills: [
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Firebase Auth", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "Stripe", icon: SiStripe },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "Multer", icon: FiUpload },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscode },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "REST APIs", icon: HiOutlineGlobeAlt },
      { name: "MVC Architecture", icon: HiOutlineTemplate },
      { name: "CRUD Operations", icon: HiOutlineRefresh },
      { name: "Responsive Web Design", icon: HiOutlineDeviceMobile },
    ],
  },
];
