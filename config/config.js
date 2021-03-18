const PORT = process.env.PORT || 3000;
const development = {
  username: process.env.USERNAMEDB || "root",
  password: process.env.PASSWORDDB || "",
  database: process.env.DATABASE || "bookstore-online-dev",
  host: process.env.HOSTDB || "127.0.0.1",
  dialect: process.env.DIALECTDB || "mysql",
};

  const test = {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  };

  const production = {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  };
  
module.exports = {
    PORT,
    development,
    test,
    production
};