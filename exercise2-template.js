/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak minimal 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */ 

function threeStepsAB(text) {
    // your code here
    let i = 0;
    let check = false;
    while (i < text.length - 3 && check === false) {
        if (text[i] === 'a'){
            check = text[i+4] === 'b';
        } else if (text[i] === 'b'){
            check = text[i+4] === 'a';
        }
        i++;
    }
    return check;
}


// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false


