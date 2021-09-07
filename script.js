const char = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-' 
var prom = window.prompt('enter password length');
let result = ''; {
for (let i = 1; i <= prom; i++ ){
    const rand = Math.floor(Math.random() * 46 +1);
    let b = (char.substring(rand, rand+1));   
    result += b;
}
function myFunc() { 
document.getElementById('password').innerHTML = result;
}
}

 