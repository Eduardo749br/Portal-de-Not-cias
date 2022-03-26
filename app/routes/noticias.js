const dbConnection = require('../../config/dbConnection');

module.exports=function(app){

	var connection=dbConnection();

	app.get('/noticais',function(req,res){

		connection.query('select * from noticias', function(error,result){
			if(error){
				console.log(error);
			}

			res.render('noticias/noticias.ejs',{noticias:result});
		});

		});
};