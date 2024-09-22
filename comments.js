// Create web server
const express = require('express');
const app = express();
const path = require('path');
// Create a path to the comments.html file
app.get('/comments', function(req, res) {
    res.sendFile(path.join(__dirname, '/comments.html'));
});
// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});