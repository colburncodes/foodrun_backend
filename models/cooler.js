const mongoose = require("mongoose");

const coolerSchema = mongoose.Schema({
  make: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  model: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  serialNumber: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  condition: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  lastServiced: {
    type: Date,
    default: Date.now,
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "store",
    required: true
  }
});

module.exports = mongoose.model("cooler", coolerSchema);
