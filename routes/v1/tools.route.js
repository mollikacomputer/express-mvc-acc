const express = require('express');
const router = express.Router();

router
.route('/')
.get((req, res) =>{
    res.send('Test tools route get option');
})
.post()
.delete();

module.exports = router;