import DescriptionItem from "../../components/descriptionItem/descriptionItem";

const Proyects = () => {
  return (
    <div className="flex flex-col gap-12 text-justify content py-16 bg-black text-white min-h-screen">
        <p className="text-center py-4 text-3xl">Mis <span className="font-bold">Proyectos</span></p>
        <DescriptionItem/>
        <DescriptionItem/>
        <DescriptionItem/>
    </div>
  );
};

export default Proyects;
