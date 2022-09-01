const express = require('express');
const router = express.Router();

router
.route('/')
.get((req, res) =>{
    res.send('Test tools route get option');
})
.post((req, res) => {
    res.send('tools added');
})
.delete( (req, res)=>{
    res.send(' deleted data from  tools')
})
.put((req, res)=>{
    res.send('put option added')
});

module.exports = router;