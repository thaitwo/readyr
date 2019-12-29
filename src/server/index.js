import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';

import App from '../shared/App';
import React from 'react';

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req, res) => {
	const markup = renderToString(<App />);

	res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <link rel="stylesheet" href="/main.css" />
        <script src="/app.bundle.js" defer></script>
      </head>
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
