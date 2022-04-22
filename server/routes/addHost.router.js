const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.put('/:date', rejectUnauthenticated, (req, res) => {
    const host = req.user.last_name;
    
    const query = `UPDATE "hosting" SET "host" = $1
                    WHERE "id" = $2
                    RETURNING "pod_id";`;
    const values = [host, req.params.date]
    pool.query(query, values)
        .then(result => {
            res.send(result.rows[0])           
        })
        .catch(err => {
            console.log('ERROR DELETING DATE IN ROUTER', err);
            res.sendStatus(500)
        })

});

module.exports = router;