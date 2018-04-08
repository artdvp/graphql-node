const dotenv = require("dotenv");

dotenv.config();

module.exports.getEnvVars = () => ({
  value1: process.env.PRISMA_SECRET
});
