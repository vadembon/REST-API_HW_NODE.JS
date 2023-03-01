const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://vadym:k8017g9uF97X7ZY8@cluster0.e5ydca8.mongodb.net/Contacts_book?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);

    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
