// Create express application 
const express = require('express'); 
const app = express(); 
port = 3000; 

// Route HTTP requests 
app.get('/', function(req,res){
    // Populate the data that's going to be returned to the user. 
    res.send('Get request to homepage');
});

// bind a connection with the HTTP port 
app.listen(port, function(){
    console.log("Example app listening using localhost:3000"); 
});



