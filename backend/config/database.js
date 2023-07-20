const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
      await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
            useUnifiedTopology: true,
      });
  
      // Define your models and their schemas here...
  
      console.log(`Mongodb connected with server ${mongoose.connection.host}`);
    } catch (err) {
      console.error(err);
    }
  };

module.exports = connectDatabase;
