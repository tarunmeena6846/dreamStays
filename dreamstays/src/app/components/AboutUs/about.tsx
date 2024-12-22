export function About() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mx-10 my-20">
      <div className="md:w-1/2 relative">
        <img
          src="./about-section.jpg"
          className="absolute roundex-xl h-[50%] right-[100px] top-[20%]"
        ></img>
        <img src="./about-section1.jpeg" className=" w-[70%]"></img>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-5xl">
          It’s the perfect choice for anyone looking for the ideal place to
          relax.
        </h2>
        <div className="flex flex-row gap-10 pt-20">
          <h2 className="text-xl font-bold">ABOUT US</h2>
          <p className="text-xl w-1/2 flex items-start">
            Cozy Corner is the perfect choice for visitors seeking a blend of
            charm and a convenient location for exploring the surrounding area.
          </p>
        </div>
      </div>
    </div>
  );
}
