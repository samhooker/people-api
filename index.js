import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
import genOne from './generators/genOne.js';
import genMany from './generators/genMany.js';

const app = express();

app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/', (req, res) => {
	res.send(`You can visit the /one and /many?n={<= 100} endpoints to generate users.`);
});

app.get('/one', (req, res) => {
	res.send(genOne());
});

app.get('/many', (req, res) => {
	if (typeof req.query.n === 'undefined' || req.query.n < 1 || req.query.n > 100) {
		res.status(400).send('Check your query string and try again. 1 <= n <= 100');
	}

	res.send(genMany(req.query.n));
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(process.env.PORT, () => {
	console.log(`App listening on port ${process.env.PORT}`);
});