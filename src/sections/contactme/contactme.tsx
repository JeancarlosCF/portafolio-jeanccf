import Form from "../../components/contactForm/form";

const ContactMe = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-20 text-justify content py-16 min-h-[90vh]">
      <div className="w-5/6">
        <Form />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-6xl font-bold">Contáctame</h3>
        <p className="text-gray-500 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          veniam, vero provident sed praesentium nesciunt quis ullam dignissimos
          libero perferendis.
        </p>
        <h4 className="text-2xl font-bold">
          Jeancarlos.castrillon2274@gmail.com <br /> +57 323 8041952
        </h4>
      </div>
    </div>
  );
};

export default ContactMe;
