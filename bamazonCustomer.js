var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345",
  database: "bamazon"
});

connection.connect(function(err){
    if(err) throw err;
    showAll();
});

function showAll(){
    connection.query("SELECT * FROM products", function (err, results){
        if(err)throw err;
        
console.log("---------------------------------------------");
        for (var i = 0; i < results.length; i++) {
            console.log("Id: " +results[i].id + " -- " + results[i].product_name+ " -- "
                + results[i].department_name + " -- " + results[i].price + "--" + results[i].stock_quantity);
        }
    });
}

connection.query("SELECT * FROM bamazon.products;", function(err, results){
	if (err) throw err;
  /*  console.log(results);*/
    begin();
});

function begin(){
    var loc = "SELECT*FROM bamazon.products";
    var myuserReq;
connection.query(loc, function(err, results){
inquirer.prompt([
    {
      name: "id",
      type: "input",
      message: "Input id that you would like to purchase"
    },{
      name: "quantity",
      type: "input",
      message: "How many do you want?"
    }
  ]).then(function(userReq){
    for(var i =0 ; i<results.length; i++){
        if(results[i].id == userReq.id){
            myuserReq = results[i];
                
            if(results[i].stock_quantity < userReq.quantity){
               console.log("not enough to sell");
                begin();
                showAll();
               }else if(results[i].stock_quantity >= userReq.quantity){
            price(userReq.quantity, myuserReq.price );
            quanUpdate(results[i].stock_quantity, userReq.quantity, userReq.id);
               }    
        }
    }connection.end();
})
})
};
function price(quan, p){
    var total = quan * p;
    console.log(p);
    console.log(quan);
        console.log("Your price is: " + total);
};

var newQuan=0;
function quanUpdate(a, b, c){
    newQuan = a - b;
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [{stock_quantity: newQuan},{id: c}],
        function (err){
            if(err)throw err;
        console.log("purchase complete");
        })
};