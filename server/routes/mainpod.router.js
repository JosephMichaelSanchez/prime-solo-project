const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.get('/:userPod', rejectUnauthenticated, (req, res) => {
    console.log(req.params.userPod);
    
    const query = `SELECT * FROM "user" WHERE "pod_id" = $1`;
    const values = [req.params.userPod]
    pool.query(query, values)
      .then( result => {
        res.send(result.rows);
        console.log(result.rows);
        
      })
      .catch(err => {
        console.log('ERROR getting main pod', err);
        res.sendStatus(500)
      })
  
  });

  module.exports = router;