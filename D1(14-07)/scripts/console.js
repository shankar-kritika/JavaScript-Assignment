// console.clear() method 
console.clear(); 
// console.log() method 
console.log('Kritika');  
console.log(24); 
console.log(true); 
console.log(null); 
console.log(undefined);  
    // array inside log 
console.log([1, 2, 3, 4]);
    // object inside log 
console.log({a:1, b:2, c:3}); 
// console.error() method 
console.error('This contains an error'); 
// console.warn() method 
console.warn('This contains a warning.'); 
// console.time() and console.timeEnd() method 
console.time('Time Taken'); 
let fun = function(){ 
	console.log('fun is running'); 
} 
let fun2 = function(){ 
	console.log('fun2 is running..'); 
} 
fun(); // calling fun(); 
fun2(); // calling fun2(); 
console.timeEnd('Time Taken'); 
// console.table() method 
var a = {name:'Kritika', age:'20', city: 'Mohali'}
var b =  { name:'Jigyasu', age:'16', city: 'Mohali'} 
var c = {name:"Vibha", age:"46", city: "Mohali"}
var d = {name:"Rama", age:"50", city: "Mohali"}
console.table({a,b,c,d});

