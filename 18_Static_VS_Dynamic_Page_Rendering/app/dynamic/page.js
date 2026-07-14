
import mySqlPool from "@/config/db";
import React from "react";

export const dynamic = 'force-dynamic';     // ==========> This statment is for making this file Dynamic.

const dynamic_Page = async () => {
  const [data] = await mySqlPool.query("SELECT * FROM students");

  console.log(data);

  console.log("Dynamic Page");
  

  return (
    <>
    <p className="bg-blue-400 text-black p-3 text-2xl">Dynamic Page</p>
      <div>
        {data.map((e) => {
          return (
            <>
              <div className="ml-5">
                <p key={e.id}>ID : {e.id}</p>
                <p>Name : {e.name}</p>
                <p>Skills : {e.skills}</p>
                <p>STD : {e.std}</p>
                <p className="m-5">---------------</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default dynamic_Page;
