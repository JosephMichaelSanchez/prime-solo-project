const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:key_code', (req, res) => {
    console.log(req.params.key_code);
    
    const query = `SELECT * FROM pods WHERE "key_code" = $1`;
    const values = [req.params.key_code]
    pool.query(query, values)
      .then( result => {
        res.send(result.rows);
        console.log(result);
        
      })
      .catch(err => {
        console.log('ERROR getting pod', err);
        res.sendStatus(500)
      })
  
  });

  module.exports = router;