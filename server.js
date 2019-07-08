const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(bodyParser.json({type: 'application/*+json'}))

app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))

    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });