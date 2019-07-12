var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:1997mayo27@localhost:5432/postgres');

var Animals = sequelize.define('animals', {
    //create name and material as strings,
    id:{ type: Sequelize.INTEGER, primaryKey: true},
    name: Sequelize.STRING,
    //height as an integer,
    age: Sequelize.INTEGER
    
})


.sync()
.then(function(){
//`Hat` is now ready to be used.
  console.log("Jeff Almanzar")
  
})



