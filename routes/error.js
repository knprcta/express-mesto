const router = require('express').Router();

const { sendError } = require('../controllers/error');

router.get('*', sendError);

module.exports = router;
