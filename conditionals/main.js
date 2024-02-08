// let age = Number(prompt("Enter your age:"))
// if (age >= 18){
//     alert("You are old enough to drive")
// } else {
//     alert(`You are left with ${18 - age} years to drive`)
// }

// const number = Number(prompt("What number do you wish to know if its even or odd?"))
// if (number % 2 === 0){
//     alert(`${number} is an even number`)
// } else {
//     alert(`${number} is an odd number`)
// }

const myFirstArray = Array(10).fill("students");
console.log(myFirstArray);
const studentArray = ["Aisha", "Salamat", "Tope"];
console.log(studentArray);
const numberArray = [2, 2, 5, 7, 8];
console.log(numberArray);
const mixedArray = [3, 4, 5, "Me", "You", "We"]
console.log(mixedArray);
const javascript = "Javascript is bae"
console.log(javascript);
console.log(javascript.split(""));
console.log(studentArray.length);
console.log(studentArray.lastIndexOf("a"));
studentArray.push("Bashirah");
console.log(studentArray);
console.log(studentArray.unshift("Barakah"));
console.log(studentArray);
studentArray.pop()
console.log(studentArray);
studentArray.shift()
console.log(studentArray);
studentArray[0] = "Mariam"
console.log(studentArray);
console.log(studentArray.reverse());
console.log(studentArray.indexOf("Mariam"));
console.log(studentArray.concat(numberArray));
console.log(Array.isArray(studentArray));
console.log(studentArray.join());
console.log(studentArray.join(" "));
studentArray.splice(1,1)
console.log(studentArray);
console.log(studentArray.sort()); 