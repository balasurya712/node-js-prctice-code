const fs=require('fs');
// const program = require('./hello_program');

fs.readFile(`${__dirname}/sample.txt`,(err, data)=>{
    if(err){
        console.log("Error Happend");
        return;
    }
    console.log(data.toString());
})

// program.sum(10,20);

fs.writeFile(`${__dirname}/sample1.txt`,'boxer',(err)=>{
    if(err){
        console.log("Error Happend");
        return;
    }
    console.log('saved');
})