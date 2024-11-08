const Sensor = require("../models/sensor");

// Controller to get sensor data from MongoDB
exports.getSensorData = async (req, res) => {
  try {
    const sensors = await Sensor.find().sort({ createdAt: -1 }).limit(10);
    res.json(sensors);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving sensor data", err });
  }
};

// Controller to save sensor data to MongoDB
exports.saveSensorData = async (req, res) => {
  const {
    phValue,
    moisture,
    teaNitro,
    teaPhos,
    teaPota,
    comNitro,
    comPhos,
    comPota,
  } = req.body;

  const newSensorData = new Sensor({
    phValue: phValue || 7, // Default pH value if not provided
    moisture: moisture || 50, // Default moisture value if not provided
    teaNitro: teaNitro || 0, // Default teaNitro value if not provided
    teaPhos: teaPhos || 0, // Default teaPhos value if not provided
    teaPota: teaPota || 0, // Default teaPota value if not provided
    comNitro: comNitro || 0, // Default comNitro value if not provided
    comPhos: comPhos || 0, // Default comPhos value if not provided
    comPota: comPota || 0, // Default comPota value if not provided
  });

  try {
    const savedSensorData = await newSensorData.save();
    res.json({ message: "Sensor data saved successfully!", savedSensorData });
  } catch (err) {
    res.status(500).json({ message: "Error saving sensor data", err });
  }
};
