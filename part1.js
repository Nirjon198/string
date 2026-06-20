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
