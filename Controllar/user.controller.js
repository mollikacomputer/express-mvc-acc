module.exports.getAllUser = (req, res, next) =>{
    res.send('Found All User');
}

module.exports.AddAUser = (req, res, next) => {
    res.send('User added');
}

module.exports.DeleteAUser = (req, res, next)=>{
    res.send(' deleted data from  User')
}
module.exports.PutAUser = (req, res, next)=>{
    res.send('put option added')
}