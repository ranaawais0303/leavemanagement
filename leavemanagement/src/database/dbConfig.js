const sql = require("mssql");

const config = {
  user: "sa",
  password: "magnus00", // Replace with your actual password
  server: "localhost",
  port: 1433,
  database: "LeaveSystem",
  authentication: "integrated",
  options: {
    encrypt: true, // Use this for Azure/SSL
    trustServerCertificate: true, // For self-signed certificates
  },
};

module.exports = config;
