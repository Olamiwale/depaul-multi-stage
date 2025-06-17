const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 5000

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Sever running on localhost 5000") })


app.listen(PORT, () => 
    console.log(`Server run on port ${PORT}`));
