const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use('/attached_assets', express.static(path.join(__dirname, 'attached_assets')));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'faq.html'));
});

app.get('/tos', (req, res) => {
  res.sendFile(path.join(__dirname, 'tos.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});