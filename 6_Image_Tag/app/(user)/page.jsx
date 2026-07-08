// /app/(user)/service/page.jsx

import Image from "next/image";

const ServicePage = () => {
  return (
    <div>
      <h1>Service Page</h1>
      <p>This is the service page content.</p>

      <div className="flex justify-center items-center gap-5 mt-5">
        <div className="bg-white h-40 w-40 rounded-lg shadow-md flex flex-col justify-center items-center">
          <div className="bg-blue-300 h-15 w-15 flex justify-center mx-auto  rounded-full mt-5">
            <Image
              src="/Thapa.jpg"
              alt="SP"
              width={600}
              height={600}
              className="rounded-full w-full h-full"
            />
          </div>
          <div>
            <p className="text-center mt-2 text-md font-semibold text-black">
              Shubhangi Patil
            </p>
            <p className="text-center  text-sm text-black">.Net Developer</p>
            <p className="text-center text-sm text-black">C#, ASP.NET</p>
          </div>
        </div>

        {/* We have given 'relative' to parent div in this div because We have given 'fill={true}' to Image tag <Image fill={true} /> for showing full size image to parent div */}
        <div className="bg-white h-40 w-40 rounded-lg shadow-md flex flex-col justify-center items-center relative">
          <div className="bg-pink-200 h-15 w-15 flex justify-center mx-auto  rounded-full mt-5">
            <Image src="/Thapa.jpg" alt="TS" fill={true} priority />
          </div>
          <div>
            <p className="text-center  text-sm text-black">
              MERN Stack Developer
            </p>
            <p className="text-center text-sm text-black">React, Node</p>
          </div>
        </div>

        <div className="bg-white h-40 w-40 rounded-lg shadow-md flex flex-col justify-center items-center">
          <div className="bg-red-200 h-15 w-15 flex justify-center mx-auto  rounded-full mt-5">
            <p className="text-red-600 text-center my-auto mx-auto font-bold text-xl">
              AS
            </p>
          </div>
          <div>
            <p className="text-center mt-2 text-md font-semibold text-black">
              Anjali Shinde
            </p>
            <p className="text-center  text-sm text-black">Mannual Tester</p>
            <p className="text-center text-sm text-black">Java, Selenium</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 mt-5">
        <div className="bg-white h-40 w-40 rounded-lg shadow-md flex flex-col justify-center items-center">
          <div className="bg-violet-200 h-15 w-15 flex justify-center mx-auto  rounded-full mt-5">
            <p className="text-red-600 text-center my-auto mx-auto font-bold text-xl">
              AM
            </p>
          </div>
          <div>
            <p className="text-center mt-2 text-md font-semibold text-black">
              Anurag More
            </p>
            <p className="text-center  text-sm text-black">
              Full Stack Developer
            </p>
            <p className="text-center text-sm text-black">Java, Hibernate</p>
          </div>
        </div>

        <div className="bg-white h-40 w-40 rounded-lg shadow-md flex flex-col justify-center items-center">
          <div className="bg-yellow-200 h-15 w-15 flex justify-center mx-auto  rounded-full mt-5">
            <p className="text-red-600 text-center my-auto mx-auto font-bold text-xl">
              TT
            </p>
          </div>
          <div>
            <p className="text-center mt-2 text-md font-semibold text-black">
              Tanmay Tambe
            </p>
            <p className="text-center  text-sm text-black">
              Java Full Stack Developer
            </p>
            <p className="text-center text-sm text-black">Java, Spring</p>
          </div>
        </div>
        <div className="bg-white h-40 w-40 rounded-lg shadow-md flex flex-col justify-center items-center">
          <div className="bg-gray-300 h-15 w-15 flex justify-center mx-auto  rounded-full mt-5">
            <p className="text-red-600 text-center my-auto mx-auto font-bold text-xl">
              JP
            </p>
          </div>
          <div>
            <p className="text-center mt-2 text-md font-semibold text-black">
              Jayesh Patil
            </p>
            <p className="text-center  text-sm text-black">.Net Developer</p>
            <p className="text-center text-sm text-black">C#, ASP.NET</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
