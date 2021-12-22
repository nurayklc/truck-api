const { Pool } = require("pg");

const pool = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
};

const postgresql = new Pool(pool);

try {
  postgresql.connect();
  console.log("PostgreSQL Server is Ready");
} catch (error) {
  console.log(error);
}

exports.postgresql = postgresql
