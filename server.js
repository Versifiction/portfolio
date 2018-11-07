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

app.get('/', (req, res) => response.sendFile(`${__dirname}/src/components/ContactForm/index.js`));

app.post('messages', (req, res) => {
  const postBody = request.body;
  console.log(postBody);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);