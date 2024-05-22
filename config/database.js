const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@prakarsa-hijau.koqsddm.mongodb.net/prakarsa-hijau?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = {
  connectToDatabase,
};