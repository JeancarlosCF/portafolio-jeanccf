import aboutmeSVG from "../../assets/Aboutme.svg";

const Aboutme = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 text-justify content py-16 min-h-screen">
      <div className="w-full">
        <img src={aboutmeSVG} alt="" />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h3 className="text-5xl py-4">
          Sobre <span className="font-bold">Mí</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis
          excepturi impedit, facilis maxime autem minima dolores qui optio quod
          nulla ipsum aliquam placeat architecto eaque magnam eius explicabo et
          officia. Commodi dolorem est possimus praesentium cupiditate harum
          velit quibusdam nisi recusandae ipsam corrupti incidunt,
          exercitationem non repellat eveniet eum atque at? Numquam consequuntur
          accusantium a! Perferendis magni expedita inventore! Voluptatem
          corrupti eligendi praesentium consequuntur vel suscipit harum
          recusandae dolore laudantium repellat autem, quibusdam deleniti, sit
          culpa nostrum ducimus dolorem a quod. Provident molestiae minus dolor
          iure veritatis quae quisquam eos obcaecati tenetur magnam dolorum, eum
          aliquam? Ea eum dolorem sed sapiente quam magni quod laudantium ipsam,
          mollitia commodi illo itaque nostrum reprehenderit voluptates
          excepturi, ratione labore esse. Magni, inventore!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vel
          officia culpa libero saepe, necessitatibus deleniti omnis magnam eum
          nesciunt non error. Consequatur architecto dolorum in est quisquam
          ducimus aspernatur.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
