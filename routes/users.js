var express = require('express');
var router = express.Router();
var value = 0;

/* GET users listing. */
router.get('/users', function (req, res, next) {
  valuea++;
  res.send('User access is: $(value)');
});

module.exports = router;
