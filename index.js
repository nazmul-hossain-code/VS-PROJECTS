//import express library
import express from "express"
//set up express and configure to use JSON when dealing with requests
const app = express()
app.use(express.json());

/*--- This is the new code ---*/
// Import Body parser, which will help us read any data sent via POST
import bodyParser from "body-parser"
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json())
// Import routes after bodyParser has been initialised.
// Here is where we link to our api-routes.js file.
import apiRoutes from "./routes/api-routes.js"
// Tell the app to use the routes we define in the api-routes.js file.
app.use('/api', apiRoutes);
/*--- This is the end of the new code ---*/



//set up the port number. Defaults to 3000 when we are not using a cloud platform
const PORT = process.env.PORT || 3000
//start listening for connections
app.listen(PORT, () => {
 console.log("Server Listening on PORT:", PORT);
});
//configure how to deal with someone visiting /status
app.get("/status", (request, response) => {
 const status = {
 "Status": "Running"
 };
 
 response.send(status);
});
