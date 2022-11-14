const pino = require('pino');

const logger = pino({
    name: 'gueno-api',
    level: 'info',
});

module.exports = logger;
