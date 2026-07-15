// get_All_Student.js

import mySqlPool from "@/config/db"
import { cache } from "react";

const get_All_Student = cache(async () => {
    const [data] = await mySqlPool.query(`SELECT * FROM students`);

    console.log(`fetching Students.....`);
    

    return data;1
})

export default get_All_Student;