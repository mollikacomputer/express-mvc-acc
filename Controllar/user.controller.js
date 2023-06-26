const tools = [
    {_id:1, name: "Ram"},
    {_id:2, name: "Rahim"},
    {_id:3, name: "Tiku"},
    {_id:4, name: "Piku"},
    {_id:5, name: "Sejuti"},
];

module.exports.getAllUser = (req, res, next) =>{
    // write a query with url ?limit=10&page=3
    const {limit, page} = req.query;
    console.log(limit, page);
    res.send(tools);
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