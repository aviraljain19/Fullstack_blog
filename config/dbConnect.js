const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected succesfully");
  } catch (error) {
    console.log("DB COnnection Failed", error.message);
  }
};

dbConnect();
