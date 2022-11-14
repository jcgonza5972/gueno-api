const logger = require('../../helpers/logger/logger');
const { email, password } = require('../../helpers/validator/schemas/clients');
const { LoginServices } = require('./login.services');

class LoginControllers {
    static async getAccessToken(req, res) {
        try {
            logger.info('Into getAccessToken Controllers');
            const { error: errorEmailValidation, value: emailValue } = email.validate(req.body.email);
            const { error: errorPasswordValidation, value: passwordValue } = password.validate(req.body.password);

            if (errorEmailValidation)
                return res.status(400).json({
                    success: false,
                    message: 'Email must be in something@domain.com o .net format',
                    data: `email: ${emailValue}`,
                });
            if (errorPasswordValidation)
                return res.status(400).json({
                    success: false,
                    message: 'Password error',
                    data: `password: ${passwordValue}`,
                });

            const response = await LoginServices.getAccessToken(req);

            return res.send(response);
        } catch (error) {
            logger.error('Error: getAccessToken Controllers');
            return res.status(error?.statusCode).send({
                success: false,
                message: error.message,
                data: null,
            });
        }
    }
}
module.exports = { LoginControllers };
