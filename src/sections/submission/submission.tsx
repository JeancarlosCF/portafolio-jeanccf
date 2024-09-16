import { FaDiscord, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Banner from "../../assets/Banner.svg";
import Iconitem from "../../components/iconItem/iconitem";
import {highlightText} from "../../lib/formatVariables";

const intro = "Hola, soy Jeancarlos Castrillón."
const intro2 = "Desarrollador Frontend de Colombia"
const Submission = () => {
  return (
    <div className="h-[90vh] p-8 grid grid-cols-1 content items-center gap-4 justify-center relative">
      <div className="lg:absolute lg:top-0 lg:right-0 pointer-events-none">
        <img src={Banner} alt="banner" />
      </div>
      <div className="max-w-xl md:text-2xl lg:text-4xl text-xl">
        <h1>{highlightText(intro, ["Jeancarlos Castrillón"])} </h1>
        {highlightText(intro2, ["Frontend", "Colombia"])}
      </div>
      <div className="max-w-lg lg:w-1/2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        ipsa odit praesentium aut repellendus suscipit, quo sapiente quod iste
        ullam alias, neque ut ipsum vero animi veniam sunt beatae totam eveniet.
      </div>
      <div className="max-w-lg flex gap-4">
        <Iconitem icon={<FaFacebook size={20} />} />
        <Iconitem icon={<FaXTwitter size={20} />} />
        <Iconitem icon={<FaInstagram size={20} />} />
        <Iconitem icon={<FaDiscord size={20} />} />
      </div>
    </div>
  );
};

export default Submission;
