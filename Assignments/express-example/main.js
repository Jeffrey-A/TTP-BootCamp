let express = require('express');
let app = express();
let Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres:1997mayo27@localhost/postgres');


console.log("testsaa");

//let's take another look at `hats` from the Postgres lecture
//define a `hat` model with the following properties:
let Hat = sequelize.define('hat', {
	 //create name and material as strings,
	 name: Sequelize.STRING,
	 material: Sequelize.STRING,
	 //height as an integer,
	 height: Sequelize.INTEGER,
	 //and brim as a true/false
	 brim: Sequelize.BOOLEAN
});


Hat.sync().then(function(){
  console.log("Hat is now ready to be used...");


  Hat.create({
	  name: 'cowboy',
	  material: 'straw',
	  height: 4,
	  brim: true
  });



app.get('/hats', function (req, res) {

	let name;
	let brim;

	let allInfo = "";

	Hat.findAll().then(function(rows) {
		for(var i = 0; i < rows.length; i++) {
			var columnData = rows[i].dataValues;
			name = columnData.name;
			brim = columnData.brim;
			allInfo = allInfo  +"\n" +name + " " + brim;
		}

		res.send(allInfo);
	});
 });

 });

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
