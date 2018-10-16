const userModel = require('./../models/users.js')
const axios = require('axios');
const usersController = {
	show:async function(req,res,next){
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
		res.header('Access-Control-Allow-Credentials', 'true');
		try{
			const users = await userModel.all();
			res.json({ code: 200, message: '成功！',data: users})
		}catch(e){
			res.json({ code: 0, data: e })
		}
	},
	select:async function(req,res,next){
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
		res.header('Access-Control-Allow-Credentials', 'true');
		const id = req.params.id
		try{
			const users = await userModel.select(id);
			res.json({ code: 200, message: '成功！',data: users})
		}catch(e){
			res.json({ code: 0, data: e })
		}
	},
	update: async function(req,res,next){
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
		res.header('Access-Control-Allow-Credentials', 'true');
		const id = req.body.id;
		const name = req.body.name;
		const phonenumber = req.body.phonenumber;
		console.log(name)
		try{
			const users = await userModel.update(id,{name});
			res.json({ code: 200, message: '成功！',data: users})
		}catch(e){
			res.json({ code: 0, data: e })
		}
	}
}
module.exports = usersController