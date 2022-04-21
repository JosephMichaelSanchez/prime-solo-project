const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body.date, req.body.podId);

    const query = `INSERT INTO hosting ("date", "host", "pod_id")
    VALUES ($1, 'NEEDS HOST', $2);`;
    const values = [req.body.date, Number(req.body.podId)]
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201)
        })
        .catch(err => {
            console.log('ERROR ADDING NEW DATE', err);
            res.sendStatus(500)
        })

});

module.exports = router;