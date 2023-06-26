const tools = [
    {_id:1, name: "Hammer"},
    {_id:2, name: "Trolly"},
    {_id:3, name: "Scrue Driver"},
    {_id:4, name: "Cutter"},
    {_id:5, name: "Tester"},
];

module.exports.getAllTools = (req, res, next) =>{
    const {limit, page} = req.query;
    console.log(limit, page);
    res.send(tools);
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