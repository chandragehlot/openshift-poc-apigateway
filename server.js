'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
// Constants
const PORT = process.env.PORT
//const HOST = '0.0.0.0';

// App
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/quote', (req, res) => {
  const reqData = req.body;
  console.log('username', reqData.username);
  res.json({ status : 200, message : 'Quote success',  name : reqData.username });
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);