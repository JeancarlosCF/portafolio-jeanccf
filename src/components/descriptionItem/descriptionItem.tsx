import Ima from "../../assets/dashboard.png";
import { MdOpenInNew } from "react-icons/md";


const DescriptionItem = () => {
  return (
    <div className="flex flex-col md:items-center md:flex-row p-8 gap-12 md:gap-24 md:[&:nth-child(3)]:flex-row-reverse">
      <img src={Ima} alt="" className="md:w-1/2 rounded-md object-cover" />
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-4xl">01</h3>
        <h2 className="font-bold text-2xl">Title</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          exercitationem obcaecati odit quas ullam quia est at sapiente iste
          cum. Doloremque aut ipsum deserunt voluptate. Consequatur quam
          voluptates similique provident.
        </p>
        <MdOpenInNew size={25} className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default DescriptionItem;
