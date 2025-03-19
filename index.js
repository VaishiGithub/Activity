var globalvar="Im global"; 
console.log(globalvar)
function localVar(){
    var localVar='I am local';
    console.log(localVar)
    console.log(globalvar)

}
localVar();
//console.log(localVar)
function redec(){
    var x=15;
    console.log(x)
}
redec()
function q(){
var y=15;
y=45;
console.log(y)
}
q();
function a(){
    console.log('before declaration',t)
    var t=80
    console.log(t)

}
a()
function g(){
    let locallet ="i am local with let"
    console.log(locallet)
}
g()
function 
h(){
    let a=89;
    a=70;
    console.log(a);
}
h()
function a(){
   // console.log(k)
    let t=4;
    console.log(t)

}
a()
function a(){
    const b=40;
    console.log(b)
    
}
a()
function redec1(){
    const a=100;
    
    console.log(a)
}
redec1()
function a(){
    const b=40;
    //b=23;
    console.log(b)
    
}
a()
let number=45;
let name='test'
let isActive=true
let user=null
let age;
let person={
    name:'test',
    age:54
    
}