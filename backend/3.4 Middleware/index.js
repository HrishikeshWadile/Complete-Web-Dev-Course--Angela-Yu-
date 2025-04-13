import express from "express";
import bodyParser from "body-parser";

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send(`
        <h1>Band Name Generator</h1>
        <form action="/generate" method="post">
            <p>Street Name</p>
            <input type="text" name="street_name" />
            <p>Pet Name</p>
            <input type="text" name="pet_name" />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/generate', function (req, res) {
    const streetName = req.body.street_name;
    const petName = req.body.pet_name;
    const bandName = streetName + " " + petName;

    console.log("Generated Band Name:", bandName);
    res.send(`<h1>Your Band Name: ${bandName}</h1>`);
});

app.listen(port, function () {
    console.log('Server is running on http://localhost:' + port);
});
