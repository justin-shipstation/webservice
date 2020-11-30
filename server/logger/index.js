const winston = require('winston');

const {
    LOG_LEVEL
} = require('../settings');

const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.json()
	),
	transports: [
		new winston.transports.File({
			filename: 'error.log',
			level: 'error'
		}),
		new winston.transports.Console()
	],
});

module.exports = logger;
