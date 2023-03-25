// Iteration 1: Names and Input
let hacker1 = "Khalil";
console.log("The driver name is", hacker1);

let hacker2 = "Yusif";
console.log("The navigator name is", hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The drivers '${hacker1}' has '${hacker1.length}' characters`);
}
else if (hacker1.length === hacker2.length){
     console.log(`It seems that the navigator has the longest '${hacker1}', it has '${hacker2.length}' characters`);
}
else {
    console.log(`Wow, you both have equally long '${hacker1}' and '${hacker2}' have eqaully '${hacker.length}'characters!`);
 }

// Iteration 3: Loops
function addSpace(hacker1){
    return hacker1.toUpperCase('').split('').join(' ');
}
console.log(addSpace(hacker1));

function reverseHacker2 (hacker2){
    return hacker2.split('').reverse().join('');
}
console.log(reverseHacker2(hacker2));

const lexOrder = hacker1.localeCompare(hacker2);
if (lexOrder < 0){
    console.log(`The driver s'${hacker1}'goes first.`);
}
else if (lexOrder> 0){
    console.log(`The navigator '${hacker2}'goes first, definitely.`);
}
else {
    console.log(`What?! You both '${hacker1} & ${hacker2}' have the same name?`);
}
