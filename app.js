const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve static files from the "images" directory
app.use('/images', express.static('images'));

// Middleware to limit repeated requests from the same IP address
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});
app.use(limiter);

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to parse JSON data
app.use(bodyParser.json());

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

// Route to render the download page
app.get('/download', (req, res) => {
  res.render('download');
});

// Route to handle the download request
app.get('/download-image', (req, res) => {
  const imagePath = __dirname + '/images/image.jpg';
  res.download(imagePath, 'image.jpg');
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  console.log(req.body);
  res.send('Form submitted successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
