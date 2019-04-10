var mysql = require("mysql");


// link mysql

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "root",
    database: "burgers_db"
});

// making connection

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
        console.log("Connected As Id" + connection.threadId);
});

// Export connection to ORM

module.exports = connection;

