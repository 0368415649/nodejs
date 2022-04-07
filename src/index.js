//Or: cat <input> | node-sass > output
const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const  methodOverride = require('method-override');
app.use(methodOverride('_method'))

// const morgan = require('morgan');
// app.use(morgan('combined'));
db.connect();
const path = require('path');
const { engine } = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
            // sum: (a,b) => a+b,
        },
    }),
);
app.use(express.urlencoded());
app.use(express.json())

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
