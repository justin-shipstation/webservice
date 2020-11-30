const express = require('express');
const bodyParser = require('body-parser');
const {
    errorHandler
} = require('./middleware');
const logger = require('./logger');
const { PORT } = require('./settings');

const server = express();

server.use(bodyParser.json());
server.use('/diagnostics', require('./diagnostics'));
server.use('/tools', require('./todos'));
server.use(errorHandler);

server.listen(PORT, () => {
    logger.info(`Server listening on port ${PORT}`);
});
