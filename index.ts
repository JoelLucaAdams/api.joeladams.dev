import express from 'express';
import expressPinoLogger from 'express-pino-logger';
import dotenev from 'dotenv';
import favicon from 'serve-favicon';
import swaggerUI from 'swagger-ui-express';

import router from './routes';
import log from './log';
import path from 'path';
import swaggerTemplate from './swagger';
const app = express();
dotenev.config();

const PORT = process.env.PORT;
const LOCALURL = 'http://localhost:';
const URL = process.env.URL;

app.use(express.json({ limit: 3145728 }));
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, '/favicon.png')));
app.use(expressPinoLogger({ logger: log }));
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerTemplate));
app.use(router);

if (!process.env.PORT || !process.env.URL) {
	log.error('Cannot startup webserver. Missing a PORT or URL');
}

if (!process.env.TOKEN_SECRET || !process.env.DB_DATABASE || !process.env.USER || !process.env.DB_PASSWORD) {
	log.error('missing a TOKEN_SECRET, USER, DB_DATABASE or DB_PASSWORD variable. Please set these in the .env file');
}

app.listen(PORT, () => {
	log.info(`Local URL: ${LOCALURL}${PORT}`);
	log.info(`WEB URL: ${URL}`);
});

export default app;
