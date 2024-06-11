const mongoose = require("mongoose");

const mongoDBConnect = (() => {
  mongoose
    .connect("mongodb+srv://MangeshThakre:MangeshThakre@cluster0.k5cw5.mongodb.net/slack?retryWrites=true&w=majority")
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));
})();

module.exports = mongoDBConnect;
