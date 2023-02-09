const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

const app = express();

//create express applications
app.use(cors());
app.use(express.json());

//create a get route
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

//start server
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
