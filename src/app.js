const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Ricky's DevOps pipeline!",
    version: process.env.APP_VERSION || "dev",
  });
});

// Used by Docker/AWS health checks and monitoring
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

module.exports = app;
