const name = "saurabh";
const repoCount = 50;

// console.log( name + " has " + repoCount + " repositories"); this is old time period method of concatenation

// New way of concatenation using template literals
console.log(`${name} has ${repoCount} repositories`);

const gameName = new String('Saurabh');
console.log(gameName[4]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 3);
console.log(newString);
const anotherString = gameName.slice(-8, 3);
console.log(anotherString);

const newstringOne = "         saurabh            ";
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "http://saurabh.com/saurabh%20yadav"

console.log(url.replace('%20','_'));
console.log(url.includes('rohit'))