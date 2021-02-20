const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const auth = require('./routes/auth');
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/auth', auth);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
