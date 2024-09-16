import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import Iconitem from "../../components/iconItem/iconitem";

const skills = [
  {name:"Git", icon: FaGitAlt},
  {name:"HTML", icon: FaHtml5},
  {name:"CSS 3", icon: FaCss3Alt},
  {name:"JavaScript", icon: FaJs},
  {name:"React", icon: FaReact},
  {name:"Next.Js", icon: RiNextjsFill},
  {name:"Nest.Js", icon: SiNestjs},
  {name:"TailwindCSS", icon: RiTailwindCssFill},
  {name:"TailwindCSS", icon: RiTailwindCssFill},
  {name:"TailwindCSS", icon: RiTailwindCssFill},
];

const SkillSet = () => {
  return (
    <div className="flex flex-col gap-12 items-center lg:px-48 md:px-12 md:py-0 py-12 min-h-[80vh]">
      <div className="text-3xl">
        Mis <span className="font-bold">Habilidades</span>
      </div>
      <div className="flex flex-wrap justify-center md:gap-12 gap-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Iconitem key={index} icon={<Icon size={35} />} text={skill.name} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillSet;
