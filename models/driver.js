const mongoose = require("mongoose");
const validator = require("validator");

const driverSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  nickname: {
    type: String,
    required: false,
    minlength: 5,
    maxlength: 30,
  },
  phoneNumber: {
    type: String,
    required: true,
    enum: ["home", "work", "mobile", "other"],
  },
  emailaddress: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 30,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      },
      message: "You must enter a valid Email",
    },
  },
});

module.exports = mongoose.model("driver", driverSchema);
