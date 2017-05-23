var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
//
// io.on('connection', function(client) {
//     console.log('Client connected...');
//
//     client.on('join', function(data) {
//         console.log(data);
//         client.emit('messages', 'Hello from server');
//     });
//
// });

module.exports = router;
