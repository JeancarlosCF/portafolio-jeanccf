import { useEffect, useState } from "react";
import { getPreferredTheme, toggleDarkmode } from "../../lib/darkmode";
import Navigation from "./navigation/navigation";
import ResumeBtn from "./resume/resume";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const [iconTheme, setIconTheme] = useState("")
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    setIconTheme(theme || getPreferredTheme());

  }, [iconTheme])
  return (
    <div className="flex justify-between items-center content py-4 w-100">
      <div className="flex item-center gap-2 font-bold">(logo) Personal</div>
      <div className="hidden md:flex gap-8 font-semibold">
        <Navigation />
      </div>
      <div className="flex gap-6">
        <button onClick={() => toggleDarkmode()}>
          {iconTheme === "dark" ? (
            <MdOutlineLightMode />
          ) : (
            <MdOutlineDarkMode />
          )}
        </button>
        <ResumeBtn />
      </div>
    </div>
  );
};

export default Header;
