module.exports.getAllTools = (req, res, next) =>{
    res.send('Tools Found');
}

module.exports.AddATools = (req, res, next) => {
    res.send('tools added');
}

module.exports.DeleteATools = (req, res, next)=>{
    res.send(' deleted data from  tools')
}
module.exports.PutATools = (req, res, next)=>{
    res.send('put option added')
}