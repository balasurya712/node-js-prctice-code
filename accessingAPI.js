const fs=require('fs');
const superagent = require('superagent');
fs.readFile(`${__dirname}/sample.txt`,(err, data)=>{
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res) => {
        console.log(res.body);
    }
    )
})