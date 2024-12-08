/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const letters ={
I : 1,
V : 5,
X : 10,
L : 50,
C : 100,
D : 500,
M : 1000,
}
let prv=''
let sum=0
for(letter of s){
if(prv=='I' && (letter=='V'||letter=='X')){
    sum -=2
}
if(prv=='X' && (letter=='L'||letter=='C')){
    sum -=20
}if(prv=='C' && (letter=='D'||letter=='M')){
    sum -=200
}
        sum +=letters[letter]
        prv=letter
}
        return sum      
};