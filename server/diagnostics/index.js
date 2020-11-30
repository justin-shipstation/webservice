const { Router } = require('express');
const router = Router();
const {
    name,
    version,
    description
} = require('../../package.json');


router.get('/version', (request, response) => {
    response.send({
        name,
        version,
        description
    })
});

router.get('/readiness', (request, response) => {
    response.status(204).send();
});

router.get('/liveness', (request, response) => {
    response.status(204).send();
});

router.get('/exception', (request, response) => {
    throw new Error('This is a test');
});

module.exports = router;
