var express = require("express");
var router = express.Router();
var db = require("./../models/connectdb");

router.get("/kpi-campaign/:ticket_id",function(req, res) {
  let ticket_id = req.params.ticket_id
  let sql = `select * from vw_kpi_complain where ticket_id = '${ticket_id}';`;
  db.query(sql, function(response) {
    if (response.length > 0) {      
      res
      .status(200)
      .json(response[0]);
    }else{
      res.status(404).send(`not found ticket id = ${ticket_id}` );
    }
  })
})

module.exports = router;