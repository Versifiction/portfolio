const express = require('express');

const app = express();
const router = express.Router();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/messages', function(req, res, next) {
  const postBody = request.body;
  res.json(message);
  console.log(postBody);
  console.log(message);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);