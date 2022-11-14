const axios = require('axios').default;
const logger = require('../../helpers/logger/logger');
const config = require('../config');

class LoginServices {
    static async getAccessToken(req) {
        try {
            logger.info('Into getAccessToken Services');
            const response = await axios.post(config.loginUrl(), req.body);

            const responseData = {
                success: true,
                message: `access_token_ok`,
                data: response.data,
            };

            return responseData;
        } catch (error) {
            logger.error('Error: getAccessToken Services');
            const isSuccess = error.response.data.statusCode > 199 && error.response.data.statusCode < 300;
            if (!isSuccess) throw new HttpError(error.response.data.message, error.response.data.statusCode);
        }
    }
}
module.exports = {
    LoginServices,
};
