var express = require("express");
var router = express.Router();
var db = require("./../models/connectdb");

router.get("/kpi-change/:ticket_id",function(req, res) {
  let ticket_id = req.params.ticket_id
  let sql = `select * from vw_kpi_change where ticket_id = '${ticket_id}';`;
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

router.get("/kpi-change/:ticket_id/beneficiary",function(req, res) {
  let ticket_id = req.params.ticket_id
  let sql = `select * from vw_kpi_change_beneficiary where ticket_id = '${ticket_id}' order by bn_order asc;`;
  db.query(sql, function(response) {
    if (response.length > 0) {
      res
      .status(200)
      .json(response);
    }else{
      res.status(404).send(`not found ticket id = ${ticket_id}` );
    }
  })
})

router.get("/kpi-change/:ticket_id/question",function(req, res) {
  let ticket_id = req.params.ticket_id
  let sql = `select * from vw_kpi_change_question where ticket_id = '${ticket_id}';`;
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