const express = require("express");
const path = require('path')
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
//require the http module
const http = require("http").Server(app);

const port = process.env.PORT || 8989;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/page/index.html');
});
app.get('/kpi-campaign', function (req, res) {
  res.sendFile(__dirname + '/public/page/kpi_campaign.html');
});

app.use('/api', require('./api/api.js'));

http.listen(port, () => {
  console.log("Running on Port: " + port);
});