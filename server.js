// Add this near the top with other requires
const bodyParser = require('body-parser');

// Add this before routes
app.use(bodyParser.urlencoded({ extended: true }));

// Add this after other routes
app.post('/submit-form', (req, res) => {
    // In a real app, you would save this to a database
    console.log('Form submission:', req.body);
    res.redirect('/contact?success=true');
});