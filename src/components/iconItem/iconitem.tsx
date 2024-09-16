interface IconitemProps {
  icon: React.ReactNode;
  text?: string;
}

const Iconitem = ({ icon, text }: IconitemProps) => {
  return (
    <div
      className={`dark:hover:text-slate-950 flex flex-col items-center justify-center gap-2 p-4 w-fit rounded-sm border-2 border-slate-950 ease-in-out duration-300 transition-all cursor-pointer hover:text-white hover:bg-slate-950 dark:border-white dark:hover:bg-white  ${text ? "md:min-w-36 md:min-h-32 min-w-32 min-h-28" : ""}`}
    >
      {icon}
      {text && <span className="font-bold">{text}</span>}
    </div>
  );
};
export default Iconitem;
