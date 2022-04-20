const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:pod', rejectUnauthenticated, (req, res) => {
    console.log(req.params.key_code);

    const query = `SELECT * FROM pods WHERE "id" = $1`;
    const values = [req.params.pod]
    pool.query(query, values)
        .then(result => {
            res.send(result.rows);
            console.log(result);

        })
        .catch(err => {
            console.log('ERROR getting pod', err);
            res.sendStatus(500)
        })

});

module.exports = router;