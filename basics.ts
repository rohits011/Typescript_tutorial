// import { parseJsonSourceFileConfigFileContent } from "typescript";

let user={name:"rohit",age:20};
console.log(user.name);
console.log("hello world");

//primitive datatypes
let age:number=23;
let id=23;// automatice detect number 
let greet:string="hello world";
let teenager:boolean=false;
console.log(typeof(age));//number no int float
console.log(typeof(greet));//string
console.log(typeof(teenager));//boolean

let name="rohit";

function greetUser(name:string){   
    console.log("hello "+name);
}

greetUser("rohit");


let login=(username:string="rohit",password:string="pass")=>{
    if(username==="rohit" && password==="pass"){
        return true;
    }};
console.log(login());

let multiply=(a:number,b:number):number=>{
    let multiplyed=a*b;
    return multiplyed
};
console.log(multiply(2,3));


const heros=["thor","iron man","captain america"];
const love=heros.map(hero =>{
    if(hero=="iron man"){
        return `i love ${hero}`;
}
});
console.log(love);


//objects


function createUser({name:string}){
console.log(name);
// console.log(User.age);
}
// let User = {name:"rohit",age:20,email:"something.me@gmail.com",isFinited:true};
// createUser(User);



// type alias
type User={
    name:string
    age:number
    email:string
    isActive:boolean
    }
  

//arrays
let superHeroes:string[]=["thor","iron man","captain america"];
superHeroes.push("black panther");
superHeroes.push("spiderman");
console.log(superHeroes);

let superPower:Array<number>=[1,2,3,4,5,6,7,8,9];

let users:Array<User>=[];
users.push({name:"rohit",age:20,email:"something.me@gmail.com",isActive:true});
console.log(users);


//union types

let score:number|string=33;
score=23;
console.log(score);
score=23+"23";
console.log(score);


export {}
