import hybridwork from "../../../public/image/hybridwork.png";

const Work = () => {
  return (
    <section className="my-14 max-w-[1120px] mx-auto px-4 text-center lg:text-left lg:px-0">
      <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row">
        <div className="max-w-[410px]">
          <h2 className="text-gray-900 text-3xl lg:text-4xl font-bold leading-14 tracking-tight">
            Work together, wherever you work
          </h2>
          <p className="text-gray-600 font-normal text-base leading-6 mt-4">
            In the office, remote, or a mix of the two, with Miro, your team can
            connect, collaborate, and co-create in one space no matter where you
            are.
          </p>
          <button className="text-blue-500 text-lg flex items-center justify-center mx-auto lg:mx-0 gap-2 mt-9">
            <span className="border-b border-blue-500">Learn more</span>
            <span>→</span>
          </button>
        </div>
        <div>
          <img src={hybridwork} alt="hybridwork" />
        </div>
      </div>
    </section>
  );
};

export default Work;
