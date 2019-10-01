'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Constants
const PORT = 8085;
const HOST = '0.0.0.0';

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

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);