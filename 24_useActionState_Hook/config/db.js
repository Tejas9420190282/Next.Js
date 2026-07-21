const mysql = require("mysql2/promise");

// Create the connection pool. The pool-specific settings are the defaults
const mySqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nextjs",
});

try {
  const connection = await mySqlPool.getConnection();

  console.log(`database Connection Success.`);

  connection.release();
} catch (error) {
  console.log(`Database Connection Failed because : ${error.message}`);

  process.exit(1);
}

export default mySqlPool;
