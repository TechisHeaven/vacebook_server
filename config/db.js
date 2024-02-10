const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected to Mongo - ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = ConnectDB;
