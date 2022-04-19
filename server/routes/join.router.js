const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.put('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body.userId, req.body.podId);

    const query = `UPDATE "user" SET "pod_id" = $1
                   WHERE "id" = $2;`;
    const values = [Number(req.body.podId), Number(req.body.userId)]
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201)
        })
        .catch(err => {
            console.log('ERROR joining pod', err);
            res.sendStatus(500)
        })

});

module.exports = router;