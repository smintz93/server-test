const express = require("express");
const app = express();

// Now attached to app we have a bunch of methods to start our server and send responses to the client

app.get("/", (request, response) => {
	response.send("Hi Im the server")
})

app.get("/anythingWeWant", (request, response) => {
	response.send("Whatever we want")
})



app.get("/newRoute", (request, response) => {
	response.send("This is working")
})


app.get("/tacos", (request, response) => {
	response.send("tacos")
})



app.listen(3000, () => {
	console.log("Server is listening on Port 3000");
})