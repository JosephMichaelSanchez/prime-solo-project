const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:pod', rejectUnauthenticated, (req, res) => {
    console.log('this is req.params.pod:', Number(req.params));

    const query = `SELECT * FROM hosting WHERE "pod_id" = $1`;
    const values = [req.params.pod]
    pool.query(query, values)
        .then(result => {
            res.send(result.rows);
            console.log(result);

        })
        .catch(err => {
            console.log('ERROR GETTING POD DATES', err);
            res.sendStatus(500)
        })

});

module.exports = router;