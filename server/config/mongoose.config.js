const mongoose = require("mongoose");
// const db_name= "Jokes";

mongoose
  .connect("mongodb://localhost/Jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((err) => {
    console.log("mongoose connection failed: ", err);
  });
