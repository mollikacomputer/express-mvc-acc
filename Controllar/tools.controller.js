module.exports.getAllTools = (req, res) =>{
    res.send('Tools Found');
}

module.exports.AddATools = (req, res) => {
    res.send('tools added');
}

module.exports.DeleteATools = (req, res)=>{
    res.send(' deleted data from  tools')
}
module.exports.PutATools = (req, res)=>{
    res.send('put option added')
}