const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded());

// == ROUTING
app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/views/feedback.html')
});
app.post('/contact', function (req, res) {
  res.json({ 
    status: 'success',
    message: 'Submit Berhasil',
    data: req.body
  })
})

const PORT = 3341;
app.listen(PORT, function () {
  console.log(`Server berjalan di http://localhost:${PORT}`);
})