const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const authroutes = require('./routes/authroutes');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

app.listen(PORT);
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'hello',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.json({
        message: 'hello',
        endpoints: 'these are the endpoints'
    });
});

app.use('/authroutes', authroutes);
app.use('/user', userRoutes);

app.get('*', (req, res) => {
    res.status(404).send({message: 'Oops! Not found boiiiii.'});
  });

console.log(`passport react native example on ${PORT}`);

