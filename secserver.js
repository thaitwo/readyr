const express = require('express');
const app = express();
const fetch = require('node-fetch');
const convert = require('xml2js');
const rateLimit = require('express-rate-limit');
const port = 3000;

// Goodreads API limit is 1 call per second
const limiter = rateLimit({
	windowMs: 1000,
	max: 1
});

app.use(limiter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/book/:bookId', async (req, res) => {
	try {
		// const searchString = `q=`
		console.log(req.query);
	} catch (err) {}
});

app.get('*', (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
