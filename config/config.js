const PORT = process.env.PORT || 3000;
const development =
  {
    "username": process.env.USERNAME || "root",
    "password": process.env.PASSWORD || "",
    "database": process.env.DATABASE || "bookstore-online-dev",
    "host": process.env.HOST || "127.0.0.1",
    "dialect": process.env.DIALECT || "mysql"
  };

module.exports = {
    PORT,
    development
};