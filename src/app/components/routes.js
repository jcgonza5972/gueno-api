const express = require('Express');
const { ClientsControllers } = require('./clients/clients.controllers');
const { LoginControllers } = require('./login/login.controllers');

const router = express.Router();

router.get('/clients/emails/:email', ClientsControllers.getAllByEmail);
router.post('/clients/create', ClientsControllers.createClient);
router.post('/login', LoginControllers.getAccessToken);

module.exports = router;
