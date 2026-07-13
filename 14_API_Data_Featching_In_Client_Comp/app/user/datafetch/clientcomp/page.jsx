"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import React from "react";

const page = () => {

    const [userData, setUserData] = useState([]);

  const searchParams = useSearchParams();

  const userName = searchParams.get("name");

  console.log(userName);

  useEffect(() => {
    const url = `https://api.genderize.io/?name=${userName}`;

    const revelGender = async () => {
      const res = await fetch(url);

      const data = await res.json();

      console.log(data);
      if (data) {
        
        setUserData(data)
      }
    };

    revelGender();
  }, []);

  if (!userName) {
    return (
      <>
        <div className="bg-blue-300 flex flex-col justify-center items-center mt-25 p-5">
          <h1 className="text-red-500 font-bold text-xl ">
            No username provided
          </h1>
          <p className="text-black mt-5 text-2xl ">
            Please add ?name=username to url
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Data featching</h1>

      <div className="flex flex-col justify-center mx-auto my-[10%] items-center bg-white text-black w-120 h-48 gap-2 shadow-xl shadow-blue-100 shadow-current">
        <p>Name : {userData.name}</p>
        <p>gender : {userData.gender}</p>
        <p>probability : {userData.probability}</p>
        <p>count : {userData.count}</p>
      </div>
    </>
  );
};

export default page;
