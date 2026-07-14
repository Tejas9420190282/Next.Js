
1) npm install mysql2

2) create folder config in root 

3) create db.js file in config folder

4) Write code 


// location of mySqlPool - "@/config/db.js"

const mysql = require('mysql2/promise');

const mySqlPool = mysql.createPool({
  host: 'host_name',
  user: 'user_name',
  password: 'password',
  database: 'database_name',
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