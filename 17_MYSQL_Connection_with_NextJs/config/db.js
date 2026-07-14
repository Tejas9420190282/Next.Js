
// location of mySqlPool - "@/config/db.js"

const mysql = require('mysql2/promise');

const mySqlPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nextjs',
})

try {
    const connection = await mySqlPool.getConnection();

    console.log("Database connection successfully");
    
    connection.release()
    
} catch (error) {
    console.log(`Database connection Failed, because : ${error.message}`);
    
    process.exit(1);
}

export default mySqlPool;