import { SiNestjs } from "react-icons/si";

interface ExperienceInfo {
  info: {
    icon: React.ReactNode;
    title: string;
    company: string;
    date: string;
    description: string;
  };
}

const ExpLabel = (/* { info }: ExperienceInfo */) => {
  return (
    <div className="flex flex-col w-full p-4 rounded-md border-gray-600 border-2 gap-2">
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center gap-4 text-lg font-semibold capitalize">
          <SiNestjs />
          <p>Desarrollador Frontend en Fundación ET</p>
        </div>
        <p className="font-semibold text-gray-500 text-sm">
          Abril 2023 - Actualidad
        </p>
      </div>
      <p className="font-semibold text-gray-500 text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti esse
        in, quis, animi et pariatur dolorem, excepturi tempore mollitia placeat
        nulla. Assumenda velit laudantium in, error repellendus ab officia
        quibusdam.
      </p>
    </div>
  );
};

export default ExpLabel;
