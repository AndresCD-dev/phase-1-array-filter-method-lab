const { stringContaining } = require("expect");

// Code your solution here
function findMatching(drivers,string){
    let answer =  drivers.filter(el => el.toLowerCase() === string.toLowerCase());

   return answer;

}

function fuzzyMatch(drivers,string){
    return drivers.filter(el => el.startsWith(string));
}

function matchName(drivers, string){
    return drivers.filter(el => el.name === string);
}