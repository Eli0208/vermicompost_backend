const express = require("express");
const sensorController = require("../controllers/sensor");

const router = express.Router();

// Route to get sensor data
router.get("/sensors", sensorController.getSensorData);

// Route to save sensor data
router.post("/sensors", sensorController.saveSensorData);

module.exports = router;
