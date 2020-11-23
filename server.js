const express = require("express");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

const app = express();

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    // Maybe this should say "client/public" ???
    app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.listen(PORT, () => {
    console.log(`📡👂 App listening on port ${PORT}!`);
})