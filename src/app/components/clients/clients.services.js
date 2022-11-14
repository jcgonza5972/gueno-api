const axios = require('axios');
const moment = require('moment');
const logger = require('../../helpers/logger/logger');
const config = require('../config');

class ClientsServices {
    static checkDateIsBetweenRange(date, dateStart, dateEnd) {
        return moment(`${date}`).isBetween(dateStart, dateEnd);
    }

    static async getAllByEmail(req) {
        try {
            logger.info('Into getAllByEmail Services');
            const dateStart = moment(req.query.dateStart, ['MM-DD-YYYY', 'YYYY-MM-DD']);
            const dateEnd = moment(req.query.dateEnd, ['MM-DD-YYYY', 'YYYY-MM-DD']);

            const response = await axios.get(config.emailUrl(req.params.email));

            const clientConsumptions = Array.isArray(response.data.data) ? response.data.data : [];
            const responseFiltered = clientConsumptions.filter((clientCosumption) => this.checkDateIsBetweenRange(clientCosumption.date, dateStart, dateEnd));

            const responseData = {
                success: response.data.success,
                message: response.data.message,
                data: responseFiltered,
            };

            return responseData;
        } catch (error) {
            logger.error('Error: getAllByEmail Services');
            const isSuccess = error.response.data.statusCode > 199 && error.response.data.statusCode < 300;
            if (!isSuccess) throw new HttpError(error.response.data.message, error.response.data.statusCode);
        }
    }

    static async createClient(req) {
        try {
            logger.trace('Into createClient');
            const response = await axios.post(config.createClientUrl(), req.body);

            const responseData = {
                success: response.success,
                message: response.message,
                data: response.data,
            };

            return response;
        } catch (error) {
            logger.error('Error: createClient');
            const isSuccess = error.response.data.statusCode > 199 && error.response.data.statusCode < 300;
            if (!isSuccess) throw new HttpError(error.response.data.message, error.response.data.statusCode);
        }
    }
}

module.exports = {
    ClientsServices,
};
