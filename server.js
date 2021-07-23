// Add dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");

// Create read and write file
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Created server
const app = express();
// Set port 
const PORT = process.env.PORT || 8080;
// Set use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make the static files
app.use(express.static("./Develop/public"));

// Starting server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    console.log(`Server listening on: http://localhost:${PORT}`);
});