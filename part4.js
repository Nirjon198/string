//string cannot be change.it is immutable.it is impossible to change a character
let s='assalamualaikum';
s[0]='A'; //didn't work!
console.log(s);

//The usual workaround is to create a whole new string and assign it to str instead of the old one.
s='A'+s[9];
console.log(s);
//what if i want to change whole word's first letter
s='A'+s.slice(1);
console.log(s);
