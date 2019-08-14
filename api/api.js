const express = require('express');
const router = express.Router();
const moment = require('moment');
moment.locale('th');

router.use(require('./kpi_campaign'));



module.exports = router;