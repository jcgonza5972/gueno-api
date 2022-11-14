const Joi = require('joi');

const email = Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required();
const password = Joi.string().min(3).max(10).required();

module.exports = {
    email,
    password,
};
