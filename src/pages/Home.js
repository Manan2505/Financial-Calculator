const Home = () => {
  return (
    <div className=" homed flex items-center justify-between mx-64 mt-60">
      <div>
        <h3 className="text-4xl font-semibold">
          Plan Your Retirement with Confidence
        </h3>
        <p className="mt-2">
          Utilize our advanced financial calculator to accurately estimate the
          amount you&apos;ll need for retirement by inputting your current
          expenses and factoring in inflation rates, ensuring a secure and
          comfortable future for you and your loved ones.
        </p>
        <a href="/calculate">
          <button className="mt-2 px-4 py-2 bg-[--ac-4] rounded-md text-[--ac-1] font-medium">
            Calculate Now!
          </button>
        </a>
      </div>
      <div className="h-full w-full m-8 px-8 pt-8 border-b-2 border-[--ac-4]">
        <img src="/hero.svg" alt="hero" height={500} width={500} />
      </div>
    </div>
  );
};

export default Home;
