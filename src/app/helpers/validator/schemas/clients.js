const Joi = require('joi');
const JoiDate = require('joi').extend(require('@joi/date'));

const dateStart = JoiDate.date().format('MM-DD-YYYY').required();
const dateEnd = JoiDate.date().format('MM-DD-YYYY').required();

const email = Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required();
const password = Joi.string().min(3).max(10).required();

const schemaCreateClient = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    service: Joi.string().min(1).max(50).required(),
    subservices: Joi.array().items(Joi.string()),
    autoRenewal: Joi.boolean().required(),
    exceedLimit: Joi.boolean().required(),
    limit: Joi.number().min(1).max(50).required(),
});

module.exports = {
    dateStart,
    dateEnd,
    email,
    password,
    schemaCreateClient,
};
