const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route to render the home page
app.get('/', (req, res) => {
  res.render('index');
});

// Route to render the about page
app.get('/about', (req, res) => {
  res.render('about');
});

// Route with a parameter to render user profile
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;
  res.render('user', { name: userName });
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  console.log(req.body);
  res.send('Form submitted successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
