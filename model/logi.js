const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  frm: {
    type: String,
    require: true,
  },
  to: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("log", bookSchema);
