// page.js

import mySqlPool from "@/config/db";
import React from "react";
import StudentsList from "./StudentsList";


export const dynamic = 'force-dynamic';     // ==========> This statment is for making this file Dynamic.

const dynamic_Page = async () => {
  const [data] = await mySqlPool.query("SELECT * FROM students");

  console.log("Dynamic Page");
 

  return (
    <>
    <p className="bg-blue-400 text-black p-3 text-2xl">Dynamic Page</p>
    <StudentsList students={data} />
    </>
  );
};

export default dynamic_Page;
