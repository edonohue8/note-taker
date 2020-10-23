// Dependencies

const express = require("express");

// Setting up Express App

const app = express();
const PORT = process.env.PORT || 3001;

// Setting up Express app to handle data parsing

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Starting server to begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});