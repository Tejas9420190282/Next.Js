// action.js

"use server";

import mySqlPool from "@/config/db";

export const action = async (formData) => {
  console.log(formData.get("name"));
  console.log(formData.get("skills"));
  console.log(formData.get("std"));

  const { name, skills, std } = Object.fromEntries(formData.entries());

  console.log(name, skills, std);

  try {
    const [result] = await mySqlPool.query(
      `INSERT INTO students (name, skills, std) VALUES (?, ?, ?)`,
      [name, skills, std],
    );

    console.log(`Data submited successfully in DB`);
  } catch (error) {
    console.log(`Error in Data insertion : ${error.message}`);
  }
};
