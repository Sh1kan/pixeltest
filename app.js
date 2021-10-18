const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/thankyou', (req, res) => {
	res.sendFile(path.join(__dirname, '/thankyou.html'));
});

app.get('/thankyou2.html', (req, res) => {
	res.sendFile(path.join(__dirname, '/thankyou2.html'));
});

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
