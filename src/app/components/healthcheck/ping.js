const logger = require('../../helpers/logger/logger');

logger.info('Into ');
const ping = (req, res) => res.status(200).send('Successful ping');

module.exports = ping;
