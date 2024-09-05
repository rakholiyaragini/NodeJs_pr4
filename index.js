const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv');
env.config();
const PATH = path.join(__dirname, '/views');
const router = require('./routers/routes.js');
const port = 3006;
const bodyParser = require('body-parser');
const db = require('./db/db.js');

app.set('view engine', 'ejs');
app.set('views', PATH);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(PATH));
app.use('/', router);

app.listen(port, (err) => {
    if (!err) {
        console.log(`Server listening on port http://localhost:${port}`);
    }
})