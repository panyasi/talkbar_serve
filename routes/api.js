var express = require('express');
var router = express.Router();
const userController = require('./../controllers/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/users', userController.show);
router.get('/users/:id', userController.select);
router.post('users/:id', userController.update)

router.get('/record',function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.json({
		code:200,
		data:"record"
	})
})

module.exports = router;
