const numbers = [1,2,3,4,5];
const users = [
    {name: 'Aaron', age: 30, active:true },
    {name:'Manny', age: 20, active:false },
    {name: 'Tamanda', age: 23, active:true }
];


// The forEach
numbers.forEach((num,index) => {
    sum+= num;
    console.log(`[${index}] =${num}`);
});
console.log(`The sum of the nums is: ${sum}`);


// The map method
const numsDouble = numbers.map((num) => {
    return num * 2;
});
console.log(`Original:`, numbers);
console.log(`Changed:`, numsDouble);


// The filter method
const evenNums = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log(evenNums);


// The filter method
const activeUsers = users.filter((user) => {
    return user.active;
});
console.log(`Active: `,activeUsers);


// the reduce method
const sum = numbers.reduce((total, num) =>{
    return total + num; 
});
console.log(sum);

// average age
const age = users.reduce((total, user) => {
    return total +user.age;
} , 0) /users.length;

console.log()


ul
let html = '';
words.forEach((word) => {
    html += `<li>${word}<\li>`
})