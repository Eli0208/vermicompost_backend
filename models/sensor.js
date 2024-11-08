const mongoose = require("mongoose");

// Define a schema for sensor data
const sensorSchema = new mongoose.Schema({
  phValue: {
    type: Number,
    required: true,
    default: 7,
  },
  moisture: {
    type: Number,
    required: true,
    default: 50,
  },
  teaNitro: {
    type: Number,
    default: 0,
  },
  teaPhos: {
    type: Number,
    default: 0,
  },
  teaPota: {
    type: Number,
    default: 0,
  },
  comNitro: {
    type: Number,
    default: 0,
  },
  comPhos: {
    type: Number,
    default: 0,
  },
  comPota: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the model based on the schema
module.exports = mongoose.model("Sensor", sensorSchema);
