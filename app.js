const express = require("express");
const path = require('path')
const cors = require('cors')
const app = express();
var db = require("./models/connectdb");
const bodyParser = require("body-parser");
//require the http module
const http = require("http").Server(app);

const port = process.env.PORT || 9001;
db.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/page/index.html');
});
app.get('/404', function (req, res) {
  res.sendFile(__dirname + '/public/page/not_found.html');
});
app.get('/kpi-complain', function (req, res) {
  res.sendFile(__dirname + '/public/page/kpi_complain.html');
});
app.get('/kpi-claim', function (req, res) {
  res.sendFile(__dirname + '/public/page/kpi_claim.html');
});
app.get('/kpi-cancel', function (req, res) {
  res.sendFile(__dirname + '/public/page/kpi_cancel.html');
});
app.get('/kpi-conserv', function (req, res) {
  res.sendFile(__dirname + '/public/page/kpi_conserv.html');
});
app.get('/kpi-followup', function (req, res) {
  res.sendFile(__dirname + '/public/page/kpi_followup.html');
});
app.get('/kpi-ticket', function (req, res) {
  res.sendFile(__dirname + '/public/page/kpi_followup.html');
});
app.get('/kpi-change', function (req, res) {
  res.sendFile(__dirname + '/public/page/kpi_change.html');
});
app.use('/api', require('./api/api.js'));

http.listen(port, () => {
  console.log("Running on Port: " + port);
});