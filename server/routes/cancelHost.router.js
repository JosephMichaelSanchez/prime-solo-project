const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.put('/:date', rejectUnauthenticated, (req, res) => {
    
    const query = `UPDATE "hosting" SET "host" = 'NEEDS HOST'
                    WHERE "id" = $1
                    RETURNING "pod_id";`;
    const values = [req.params.date]
    pool.query(query, values)
        .then(result => {
            res.send(result.rows[0])           
        })
        .catch(err => {
            console.log('ERROR CANCELING HOSTING IN ROUTER', err);
            res.sendStatus(500)
        })

});

module.exports = router;