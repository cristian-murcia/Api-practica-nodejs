const express = require('express');

const response = require('../../../network/response');
const router = express.Router();
const controller = require('./index');

router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', list);

function list(req, res) {
    controller.list()
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function get(req, res) {
    controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        }).catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function upsert(req, res) {
    controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        }).catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

module.exports = router;