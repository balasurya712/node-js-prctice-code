
const fs=require('fs');
const p1=()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(`${__dirname}/sample.txt`,(err, data)=>{
            if(err){
                reject("unable to read");
                return;
            }
            resolve(data.toString());
        })
})}

p1().then((message)=>{
    fs.writeFile(`${__dirname}/sample1.txt`,message,(err)=>{
        if(err){
            reject("unable to read");
            return;
        }
    })
}).catch((message)=>{
    console.log(message);
})


fs.rename