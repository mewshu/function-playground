
add7 = (num) => {
    return num + 7;
} 

console.log (add7(7));


multiply = (one, two) => {
    return one * two;
}

console.log(multiply(2, 2));


let capitalize = function(string){
    return (string[0].toUpperCase() + string.slice(1).toLowerCase())
}

console.log(capitalize('superDuper'));


function getLastLetter(string) {
   
    string = string.split('').reverse();
    return string[0];
}
console.log(getLastLetter('howdy'));