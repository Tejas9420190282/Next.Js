import mySqlPool from "@/config/db";
import React from "react";
export const dynamic = 'force-dynamic';

const allStudent_Page = async () => {
  const [students] = await mySqlPool.query("SELECT * FROM students");

  return (
    <>
      <div>
        {students.map((e) => {
          return (
            <div className="text-white ml-3 mt-2" key={e.id}>
              <p>ID : {e.id}</p>
              <p>Name : {e.name}</p>
              <p>Skills : {e.skills}</p>
              <p>STD : {e.std}</p>
              <p className="m-5 ">---------------</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default allStudent_Page;
