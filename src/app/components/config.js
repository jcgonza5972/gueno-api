const emailUrl = (email) => `https://api-gueno.dev.gueno.com/api/client/clientConsumptions/${email}`;
const loginUrl = () => `https://api-gueno.dev.gueno.com/api/auth/login`;
const createClientUrl = () => `https://api-gueno.dev.gueno.com/api/client/createClientService`;

module.exports = { emailUrl, loginUrl, createClientUrl };
