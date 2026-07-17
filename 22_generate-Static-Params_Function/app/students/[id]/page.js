import mySqlPool from "@/config/db";
import React from "react";
import NotFound from "../not-found";

export async function generateStaticParams() {
  const [doctor] = await mySqlPool.query("SELECT * FROM students");

  console.log("Doctors data in generateStaticParams : ", doctor);

  return doctor.map((doctor) => {
    return {
      id: doctor.id.toString(),
    };
  });
}

const page = async (prop) => {
  const params = await prop.params;

  const id = params.id;

  console.log(id);

  const [data] = await mySqlPool.query("SELECT * FROM students WHERE id=?", [
    id,
  ]);

  if (data.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <div className="ml-2">
        {data.map((e) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="" key={e.id}>
              <p key={e.id}>ID : {e.id}</p>
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
