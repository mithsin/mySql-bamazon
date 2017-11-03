var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "bamazon"
});

manage();
function manage() {
    inquirer.prompt([{
            name: "manage",
            type: "rawlist",
            message: "Wat do you want!",
            choices: ["Product for sale", "Low Inventory", "Add to Inventory", "Add New Product"]
        }]).then(function(ans) {
            switch (ans.manage) {
                case "Product for sale":
                    forSale();
                    break;
                case "Low Inventory":
                    lowInv();
                    break;
                case "Add to Inventory":
                    addInv();
                    break;
                case "Add New Product":
                    addNewProduct();
                    break;
            }
/*        if(ans.manage === "Product for sale"){
            forSale();
        }else if (ans.manage === "Low Inventory"){
            lowInv();
        }else if (ans.manage === "Add to Inventory"){
            addInv();
        }else if (ans.manage === "Add New Product"){
            addNewProduct();
        }*/
  })
};

function forSale() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

        console.log('-------------------------------------------------');
        for (var i = 0; i < res.length; i++) {
            console.log("Id: " + res[i].id + " -- " +
                res[i].product_name + " -- " +
                res[i].department_name + " -- " +
                res[i].price + " -- " +
                res[i].stock_quantity);
        }
    })
    connection.end();
};

function lowInv() {
    var lowInvList = [];
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity <= 5) {
                lowInvList.push(res[i]);
                console.log(lowInvList);
            }
        }
    })
    connection.end();
};


function addInv() {
    var newAmount;
    connection.query("SELECT * FROM products", function(err, res){
        if(err)throw err;
        inquirer.prompt([{
            name: "productIdN",
            type: "input",
            message: "What is the ID number?"
        }, {
            name: "amountAdd",
            type: "input",
            message: "How many do you want to add?"
        }]).then(function(ans){
            for (var i = 0; i < res.length; i++) {
                if (res[i].id == ans.productIdN) {
                    newAmount = res[i];
                    console.log(newAmount.stock_quantity);
                    console.log("+");
                    console.log(ans.amountAdd);
                    console.log("==============");
                }
            }
            connection.query("UPDATE products SET ? WHERE ?", [
                {stock_quantity: ans.amountAdd},{id: ans.productIdN}], //why can't i just use varPick.id ans.productIdN?
                function(err, res) {
                if(err)throw err;
                console.log("added");
            })
connection.end();
        })
    }) 
};


function addNewProduct(){
    connection.query("SELECT * FROM products", function(err, res){
        if(err)throw err;
       inquirer.prompt([{
            name: "pname",
            type: "input",
            message: "What is the product name?"
        }, {
            name: "dname",
            type: "input",
            message: "What is the department for this product?"
        }, {
            name: "price",
            type: "input",
            message: "What is the price for this product?"
        }, {
            name: "stock",
            type: "input",
            message: "What is the stock amount"
        }]).then(function(ans) {
            connection.query("INSERT INTO products SET ?", {
                product_name: ans.pname,
                department_name: ans.dname,
                price: ans.price,
                stock_quantity: ans.stock
            }, function(err) {
                if (err) throw err;
                console.log("Product added");
                    connection.end();
            })
        })
    })
};