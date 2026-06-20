//lets see the quotes.in js we will use 3 types of quotes.single quotes,double quotes and backticks quotes.
//uses of backticks:
//1.embed expression or variable
function sum(a, b){
    return a+b;
}

console.log(`1+3=${sum(1,3)}`);
//2.allow a string to span multiline
let guestList=`Guest:
1.john
2.wick
3.micheal
4.john cina`;
console.log(guestList); 

//what if we use single or double quote for multiple line
// let credit="mohsin mama,
// mami,shawon,fiaz";
//here we get compile time error.the solution is \n
// console.log(credit);

//now we will see how to add backslash or apostrophe in string line

let paragraph='It\'s a beautiful rainy day.in this beautiful weather i would like to drink malai cha\\black coffee.black coffee should be \"without sugar\"';
console.log(paragraph);
