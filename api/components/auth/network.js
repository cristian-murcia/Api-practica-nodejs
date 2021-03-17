const express = require('express');

const response = require('../../../network/response');
const router = express.Router();
const controller = require('./index');

router.post('/login', login);

function login(req, res){
    controller.login(
        req.body.username, req.body.password
    )
    .then((token) => {
        response.success(req, res, token, 200);
    }).catch((err) => {
        response.error(req, res, 'Información invalida', 500);
    });
}


module.exports = router;