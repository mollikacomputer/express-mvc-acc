let count = 0;
const viewCount = (req, res, next) =>{
    count++;
    console.log(count);
    // for working test
    // res.send("Counter Action Found");
    next();
}

module.exports = viewCount;