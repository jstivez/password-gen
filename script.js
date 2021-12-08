const numb = '1234567890'
const char = 'abcdefghijklmnopqrstuvwxyz' 
const cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const spec= '~!@#$%^&*()_+'

let numCheckVar = window.confirm ('numbers?');
let charVar =  window.confirm ('lowercase');
let capCharVar = window.confirm ('upper case');
let specCharVar=  window.confirm ('special characters')
let numberLength = prompt ('length of password')

let confirmLength = numberLength;

let pwChars = '';
let randResults= '';

/*while(confirmLength <= 7 || confirmLength>= 121) {
    alert("password must be between 8 - 120");
    var confirmLength =(prompt ('length of password'));
    }*/

if (numCheckVar) {
    pwChars = pwChars.concat(numb);
}
if (charVar) {
    pwChars = pwChars.concat(char);
}
if (specCharVar) {
    pwChars = pwChars.concat(spec);
}
if (capCharVar) {
    pwChars = pwChars.concat(cap);
}
console.log(pwChars);
function gen (){
for (let i = 1; i <= numberLength; i++ ){
    const rand = Math.floor(Math.random() * pwChars.length);
    let b = (pwChars.substring(rand, rand+1));   
    randResults += b;
}
}
gen();
function myFunc() { 
        document.getElementById('password').innerHTML = randResults;

}
