// express server listening on port 3000 use bodyparser and  helmet
// to protect against common web vulnerabilities
// and use express-session to store session data in a cookie
// and use express-validator to validate user input
// and use express-flash to display flash messages
// and use express-mongo-sanitize to sanitize user input
// and use express-rate-limit to limit repeated requests to public APIs

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const session = require('express-session');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(session({
  secret: 'iwohbfwofowfbwof',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(mongoSanitize());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));


// get / route return json message
app.get('/', (req, res) => {
  console.log(req.session)
  res.json({ message: 'Welcome to the beginning of nothingness.' });
});


app.listen(5000, () => {
  console.log('Server listening on port 3000');
});

