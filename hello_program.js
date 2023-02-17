console.log("hello World");
let a=10;//redeclaration is not allowed 
console.log(a);
a=11//reasign is posible
console.log(a);
const b=5;//redeclaration and reasign is not allowed 
console.log(b);
var c=10;
console.log(c,typeof c);//10 number
var c="abcd";//redeclaration and reasign is allowed 
console.log(c,typeof c);//abcd string
var d;
console.log(d,typeof d);//undefined undefined
let user={
    firstname:"balasurya",
    age:20,
}
console.log(user,typeof user);//{ firstname: 'balasurya', age: 20 } object
console.log(user.firstname);//balasurya


function getName(){
    console.log("inside function")
}

function getFirstName(name){
    console.log(name)
}
getFirstName(user.firstname)//balasurya
getName();//inside function

function getNameReturn(age){
    return "hi"+user.firstname+age
}

let f=getNameReturn(user.age)
console.log(f)//hibalasurya20
let arr=[1,4,'abc',user]//different data types can be assigned in array
console.log(arr,typeof arr)//[ 1, 4, 'abc', { firstname: 'balasurya', age: 20 } ] object

let dob=new Date(2018, 11, 24)//2018-12-23T18:30:00.000Z
console.log(dob)
let dob_current=new Date()//2023-02-16T05:00:34.359Z
console.log(dob_current)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}//1
// 4
// abc
// { firstname: 'balasurya', age: 20 }
num1=process.argv[1];
num2=process.argv[4];

let sum=(num1,num2) => {
    console.log(num1+num2);
}
sum(num1,num2)
exports.sum = sum;