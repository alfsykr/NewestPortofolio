import { BsFillBootstrapFill, BsFileEarmarkTextFill } from "react-icons/bs";
import { FaNpm, FaClipboardList } from "react-icons/fa6";
import { GiDatabase } from "react-icons/gi";
import {
  SiArduino,
  SiFlask,
  SiPython,
  SiSupabase,
  SiFigma,
  SiGoogleappsscript,
} from "react-icons/si";
import {
  SiCss3,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiLaravel,
  SiPhp,
  SiVuedotjs,
  SiFirebase,
  SiMysql,
  SiMongodb,
  SiYarn,
} from "react-icons/si";

export type SkillProps = {
  [key: string]: {
    icon: JSX.Element;
    background: string;
    color: string;
    isActive?: boolean;
  };
};

const iconSize = 26;

export const STACKS: SkillProps = {
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    isActive: true,
  },
  CSS: {
    icon: <SiCss3 size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  Bootstrap: {
    icon: <BsFillBootstrapFill size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: true,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: "bg-sky-400",
    color: "text-sky-400",
    isActive: true,
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: true,
  },
  TypeScript: {
    icon: <SiTypescript size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  "React.js": {
    icon: <SiReact size={iconSize} />,
    background: "bg-cyan-400",
    color: "text-cyan-400",
    isActive: true,
  },
  Vite: {
    icon: <SiVite size={iconSize} />,
    background: "bg-purple-500",
    color: "text-purple-500",
    isActive: true,
  },
  "Vue.js": {
    icon: <SiVuedotjs size={iconSize} />,
    background: "bg-green-400",
    color: "text-green-400",
    isActive: true,
  },
  "Next.js": {
    icon: <SiNextdotjs size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-50",
    isActive: true,
  },
  "Node.js": {
    icon: <SiNodedotjs size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: true,
  },
  "Express.js": {
    icon: <SiExpress size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-800",
    isActive: true,
  },
  PHP: {
    icon: <SiPhp size={iconSize} />,
    background: "bg-indigo-400",
    color: "text-indigo-400",
    isActive: true,
  },
  Laravel: {
    icon: <SiLaravel size={iconSize} />,
    background: "bg-red-700",
    color: "text-red-700",
    isActive: true,
  },
  MySQL: {
    icon: <SiMysql size={iconSize} />,
    background: "bg-cyan-700",
    color: "text-cyan-700",
    isActive: true,
  },
  Firebase: {
    icon: <SiFirebase size={iconSize} />,
    background: "bg-amber-500",
    color: "text-amber-500",
    isActive: true,
  },
  MongoDB: {
    icon: <SiMongodb size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: true,
  },
  npm: {
    icon: <FaNpm size={iconSize} />,
    background: "bg-red-700",
    color: "text-red-500",
    isActive: true,
  },
  GitHub: {
    icon: <SiGithub size={iconSize} />,
    background: "bg-slate-800",
    color: "text-neutral-50",
    isActive: true,
  },
  Yarn: {
    icon: <SiYarn size={iconSize} />,
    background: "bg-violet-800",
    color: "text-sky-400",
    isActive: true,
  },
  Arduino: {
    icon: <SiArduino size={iconSize} />,
    background: "bg-teal-600",
    color: "text-teal-600",
    isActive: true,
  },
  "SQL Server": {
    icon: <GiDatabase size={iconSize} />,
    background: "bg-red-600",
    color: "text-red-600",
    isActive: true,
  },
  Flask: {
    icon: <SiFlask size={iconSize} />,
    background: "bg-slate-700",
    color: "text-slate-700",
    isActive: true,
  },
  Python: {
    icon: <SiPython size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-600",
    isActive: true,
  },
  Supabase: {
    icon: <SiSupabase size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-600",
    isActive: true,
  },
  Figma: {
    icon: <SiFigma size={iconSize} />,
    background: "bg-pink-600",
    color: "text-pink-500",
    isActive: true,
  },
  "Google Apps Script": {
    icon: <SiGoogleappsscript size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  FSD: {
    icon: <BsFileEarmarkTextFill size={iconSize} />,
    background: "bg-emerald-600",
    color: "text-emerald-500",
    isActive: true,
  },
  BRD: {
    icon: <FaClipboardList size={iconSize} />,
    background: "bg-teal-600",
    color: "text-teal-500",
    isActive: true,
  },
};
