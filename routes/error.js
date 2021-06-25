const router = require('express').Router();

const { sendError } = require('../controllers/error');

router.all('*', sendError);

module.exports = router;
