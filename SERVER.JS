// importing the express module
const express = require("express");
// creating an expres application
const app = express();
// function to add two numbers
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
}
// function to minus two numbers
const subtract = (n1, n2) => {
    return n1 - n2;
}
// function to multiply two numbers
const multiplication = (n1, n2) => {
    return n1 * n2;
}
// function to divide two numbers
const division = (n1, n2) => {
    return n1 / n2;
}
// route to handle .get requests to "/addTwoNumber"
app.get("/addTwoNumber", (req, res) => {
    //using trycatch method for error handling
    try {
        // Parsing query parameters
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    // calculating the result
    const result = addTwoNumber(n1, n2);

    if(isNaN(n1,n2)){
        throw new Error("enter number only!")
    }

    // html content to be sent as response
    const htmlResponse = `<html><body><h1>Result: ${result}</h1></body><br></html>`;
    
    // setting content type as html
    res.set('Content-Type', 'text/html');
    
    // sends the html response
    res.send(htmlResponse);

    // sends json response with the result
    res.json({ statuscocde: 200, data: result });
    } catch (error) {
        console.error("error");
        res.status(500).json({statuscocde:500,result:error.toString()})
    }
    
});
app.get("/subtract", (req, res) => {
    //using trycatch method for error handling
    try {
        // Parsing query parameters
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    // calculating the result
    const result = subtract(n1, n2);

    if(isNaN(n1,n2)){
        throw new Error("enter number only!")
    }

    // html content to be sent as response
    const htmlResponse = `<html><body><h1>Result: ${result}</h1></body><br></html>`;
    
    // setting content type as html
    res.set('Content-Type', 'text/html');
    
    // sends the html response
    res.send(htmlResponse);

    // sends json response with the result
    res.json({ statuscocde: 200, data: result });
    } catch (error) {
        console.error("error");
        res.status(500).json({statuscocde:500,result:error.toString()})
    }
});
app.get("/multiplication", (req, res) => {
    //using trycatch method for error handling
    try {
        // Parsing query parameters
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    // calculating the result
    const result = multiplication(n1, n2);

    if(isNaN(n1,n2)){
        throw new Error("enter number only!")
    }

    // html content to be sent as response
    const htmlResponse = `<html><body><h1>Result: ${result}</h1></body><br></html>`;
    
    // setting content type as html
    res.set('Content-Type', 'text/html');
    
    // sends the html response
    res.send(htmlResponse);

    // sends json response with the result
    res.json({ statuscocde: 200, data: result });
    } catch (error) {
        console.error("error");
        res.status(500).json({statuscocde:500,result:error.toString()})
    }
});
app.get("/division", (req, res) => {
    //using trycatch method for error handling
    try {
        // Parsing query parameters
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    // calculating the result
    const result = division(n1, n2);

    if(isNaN(n1,n2)){
        throw new Error("enter number only!")
    }

    // html content to be sent as response
    const htmlResponse = `<html><body><h1>Result: ${result}</h1></body><br></html>`;
    
    // setting content type as html
    res.set('Content-Type', 'text/html');
    
    // sends the html response
    res.send(htmlResponse);

    // sends json response with the result
    res.json({ statuscocde: 200, data: result });
    } catch (error) {
        console.error("error");
        res.status(500).json({statuscocde:500,result:error.toString()})
    }
});

// defining the port for the serve
const port = 3000;

// starting the server and listening on the specified port
app.listen(port, () => {
    console.log("listening on port " + port);
});