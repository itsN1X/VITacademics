var express = require('express');
var router = express.Router();

router.get('/', function (req, res)
{
    res.send('Vellore API Documentation');
});

module.exports = router;