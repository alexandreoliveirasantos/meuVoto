var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('questao1', { title: 'Questao1' });
});

module.exports = router;
