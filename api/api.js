const express = require('express');
const router = express.Router();
const moment = require('moment');
moment.locale('th');

router.use(require('./kpi_campaign'));
router.use(require('./kpi_claim'));
router.use(require('./kpi_cancel'));
router.use(require('./kpi_conserv'));
router.use(require('./kpi_followup'));
router.use(require('./kpi_change'));



module.exports = router;