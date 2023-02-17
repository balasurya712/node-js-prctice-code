const isRaidAccepted=true;
const p1=()=>{
    return new Promise((resolve,reject)=>{
    if(isRaidAccepted){
        resolve('Enjoy Your Ride');
    }
    else{
        reject("Please look for other cab");
    }
})}

p1().then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})
/*
output:
Enjoy Your Ride

*/