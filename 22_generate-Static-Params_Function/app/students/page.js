import mySqlPool from "@/config/db";
import React from "react";

const page = async () => {
  const [data] = await mySqlPool.query(`SELECT * FROM students`);

  return (
    <>
      <div className="ml-2">
        {data.map((e) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="" key={e.id}>
              <p>ID : {e.id}</p>
              <p>Name : {e.name}</p>
              <p>Skills : {e.skills}</p>
              <p>STD : {e.std}</p>

              <p className="m-5">====================</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;