const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Import the routes
const sensorRoutes = require("./routes/sensor.js");

// MongoDB connection string
const dbURI =
  "mongodb+srv://compostvermi2024:XgfeMbPBEw7p7b7I@cluster0.io6i3.mongodb.net/?retryWrites=true&w=majority";

// Initialize express app
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use the sensor routes
app.use("/api", sensorRoutes);

// MongoDB connection
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
