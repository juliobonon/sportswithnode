
const express = require("express");

const app = express(),
     bodyParser = require("body-parser");
     port = 3080;


// server/index.js
const path = require('path');


// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
