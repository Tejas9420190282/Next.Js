// action.js

"use server";

import mySqlPool from "@/config/db";

const insert_Action = async (previousState, formData) => {
  console.log(formData.get("name"));
  console.log(formData.get("skills"));
  console.log(formData.get("std"));

  const { name, skills, std } = Object.fromEntries(formData.entries());

  console.log(name, skills, std);

  try {
    const [data] = await mySqlPool.query(
      "INSERT INTO students (name, skills, std) VALUES (?, ?, ?)",
      [name, skills, std],
    );

    console.log(`Data inserted into students values.`);

    return {
      success: true,
      message: `Data inserted into students values.`,
    };
  } catch (error) {
    console.log(`ERROR IN DATA INSERTION : ${error.message}`);

    return {
      success: false,
      message: `ERROR IN DATA INSERTION : ${error.message}`,
    };
  }
};

export default insert_Action;
