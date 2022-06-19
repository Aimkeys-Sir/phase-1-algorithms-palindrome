function isPalindrome(word) {
  // Write your algorithm here
  const splitted=word.split("")
  let unshifted=[];
  splitted.forEach(char=>{
    unshifted.unshift(char)
  })
  return unshifted.join("")===word?true:false

}
//console.log(isPalindrome("madam"))
/* 
  Add your pseudocode 
  split then unshift
  then join the unshifted
*/

/*
  Add written explanation of your solution here
*/

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
//Your code here
class dog
{
    name;breed;
    constructor(name,breed)
    {
        this.name=name
        this.breed=breed
    }

}
//OOP ---inheritance
const aDog=new dog("German Shepherd","Poodle")
console.log(`A_Dog${aDog}`)

//JSON{key:value}
console.log(JSON.stringify(aDog))
