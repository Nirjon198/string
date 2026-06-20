let word=`hellow`;
console.log(word[1]);
console.log(word.at(0));
//var.at(pos) has benefit for allowing negative position.If pos is negative, then it’s counted from the end of the string.
console.log(word.at(-1));
// We can also iterate over characters using for..of
for(let c of "my name is khan"){
    console.log(c);
}