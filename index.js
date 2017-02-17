var express = require('express');
var app = new express();
var router = express.Router();
router.get('/', function (req, res, next) {
  req.url = ('/index.html');
  next();
});
app.use(router);
app.use(express.static('./src'));
module.exports = app.listen(3000, function (err) {
  if (err) {
    console.log(err);
  }
  console.log('listing at 22 \n');
});