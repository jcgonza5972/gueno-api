const express = require('express');
const dotenv = require('dotenv');
const v1Router = require('./src/app/components/routes');
const logger = require('./src/app/helpers/logger/logger');

function main() {
    const app = express();

    dotenv.config();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/api/v1', v1Router);

    app.listen(process.env.PORT, () => logger.info(`Server is now listening on port: ${process.env.PORT}`));
}

main();
