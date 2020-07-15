var a=10;
let b=20;
const PI=3.14;

{
 let a=10;
 console.log(a);
} //block 1
{
  a++;
  console.log(a);
} //block 2

/* Since we are using "let a=10", scope of "a" is limited to block 1 and "a" is not recognized in block 2 */

function block1() {
var a=10;
 console.log(a);
} //function scope of block 1
function block2() {
  a++;
  console.log(a);
} //function scope of block 2
/* Since we have enclosed block1 and block2, within separate functions, the scope of "var a=10", is limited to block 1 and "a" is not recognized in block 2 */

{
 const PI=3.14;
 console.log(PI);
} //block 1
{
  console.log(PI);
} //block 2
/* Since we are using "const PI=3.14", scope of "PI" is limited to block 1 and "PI" is not recognized in block 2 */

{
 const a = [1,2,3];
 const b = {name: "hello"};
 a.push(4,5);     //mutating the value of constant "a"
 b.name="World";  //mutating the value of constant "b"
 
 console.log(a); //this will show [1,2,3,4,5]
 console.log(b); //this will show {name: "World"}
 
}
/* This code will run without any errors, and shows that we CAN mutate the values that are defined by "const" */

{
 const name = "Mike";
 const PI = 3.14; 
 const a = [1,2,3];
 const b = {name: "hello"};
 
 name="Joe"; 
//this will throw an error, since we are attempting to re-assign "name" to a different value.
 PI = PI + 1; 
//this will throw an error, since we are attempting to re-assign PI to a different value.
 a = [1,2,3,4,5];
//this will throw an error, since we are attempting to re-assign "a" to a different value.
 b = {name: "hello"};
//this will throw an error, since we are attempting to re-assign "b" to a different value.
}