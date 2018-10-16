const knex = require('./knex');
const axios = require('axios');
const users ={
	all(){
		return new Promise((resolve,reject) =>{
			knex('users').select().then(res =>{
          resolve(res)
      }).catch(err =>{
          reject(err)
      })
		})
	},
	select(id){
  	return new Promise((resolve,reject)=>{
      knex('users').select().where('id', '=', id)
      .then( res => {
        resolve(res)
      }).catch( err => {
        reject(err)
      })
    })
	},
	update(id,params){
		return new Promise((resolve,reject)=>{
			knex('users').where('id', '=', id).update(params)
			.then(res =>{
				resolve(res)
			}).catch(err =>{
				reject(err)
			})
		})
	}
}
module.exports = users