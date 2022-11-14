const logger = require('../../helpers/logger/logger');
const schemaClients = require('../../helpers/validator/schemas/clients');
const { ClientsServices } = require('./clients.services');

class ClientsControllers {
    static async getAllByEmail(req, res) {
        try {
            logger.info('Into getAllByEmail Controllers');
            const { error: errorDateStartValidation, value: dateStartValue } = schemaClients.dateStart.validate(req.query.dateStart);
            const { error: errorDateEndValidation, value: dateEndValue } = schemaClients.dateEnd.validate(req.query.dateEnd);

            if (errorDateStartValidation)
                return res.status(400).json({
                    success: false,
                    message: 'Param Error: dateStart must be in MM-DD-YYYY format',
                    data: `dateStart: ${dateStartValue}`,
                });
            if (errorDateEndValidation)
                return res.status(400).json({
                    success: false,
                    message: 'Param Error: dateEnd must be in MM-DD-YYYY format',
                    data: `dateEnd: ${dateEndValue}`,
                });

            const response = await ClientsServices.getAllByEmail(req);
            return res.status(200).send(response);
        } catch (error) {
            logger.error('Error: getAllByEmail Controllers');
            return res.status(error?.statusCode).send({
                success: false,
                message: error.message,
                data: null,
            });
        }
    }

    static async createClient(req, res) {
        try {
            const response = await ClientsServices.createClient(req);
            if (response.success)
                return res.status(400).json({
                    success: false,
                    message: `${response.message}`,
                    data: `${response.data}`,
                });

            return res.status(200).send(response);
        } catch (error) {
            logger.error();
            return res.status(error?.statusCode).send({
                success: false,
                message: error.message,
                data: null,
            });
        }
    }
}
module.exports = { ClientsControllers };
