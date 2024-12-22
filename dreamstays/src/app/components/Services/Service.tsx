export function Service() {
  return (
    <>
      <h2
        className="text-8xl absolute px-10 text-[#f9f7f1] hidden md:block"
        style={{ WebkitTextStroke: "0.3px #455d58" }}
      >
        first class service
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mx-10 my-20 mt-[200px] w-">
        <div className="md:w-1/2">
          <div className="flex flex-row gap-10 pt-20">
            <h2 className="text-xl font-bold">SERVICES</h2>
            <p className="text-xl w-1/2 flex items-start">
              Experience the charm of Rajasthan, the laid-back vibes of Boho,
              and sleek Modern comfort—all in one place! Our 3-room retreat
              offers unique themed rooms, each fully equipped with essential
              amenities for a cozy and memorable stay.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="./service1.jpg"
            className="absolute roundex-xl h-[50%] right-[100px] top-[20%]"
          ></img>
          <img src="./service.jpeg" className=" w-[70%]"></img>
        </div>
      </div>
    </>
  );
}
