
//const is a keyword, str is a name of the variable, = assigned operator, "abs" is a string literal
/*const str1="Automation";
let charcount ={};
/*for (let j = 1; j <= str1.length; j++) {
  console.log(j);
}*/
/*for(let i=0; i<str1.length; i++){
let char = str1[i];
if(charcount[char]){
charcount[char]++;
}else{
    charcount[char]=1;
}
*/
/*let str1 = "sddddgfh";

var lengthOfString = function(s) {
  let left = 0;              // start index
  let set = new Set();       // track unique characters
  let maxLength = 0;         // longest substring length

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);   // remove duplicate from left
      left++;
    }
    set.add(s[right]);       // add current character
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// Call the function with str1
console.log(lengthOfString(str1));

*/


/*let str = "sddfgtr";

function lengthOfLongestSubstring(s) {
  let set = new Set();       // track unique characters
  let left = 0;              // start index of window
  let maxLength = 0;         // longest length
  let longestSubstring = ""; // store actual substring

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);   // remove duplicate from left
      left++;
    }
    set.add(s[right]);       // add current character

    // check if current window is longer
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      longestSubstring = s.substring(left, right + 1);
    }
  }

  return { maxLength, longestSubstring };
}

// 👉 Call the function with str
let result = lengthOfLongestSubstring(str);
console.log("Length = " + result.maxLength);
console.log("Longest substring without repeating characters = \"" + result.longestSubstring + "\"");
*/

//let-keyword, str-string of variable, string literal
//function is keyword, length- name of the function, s- s is a parameter 
/*let str = "Nagpurnagar";

function longestsubstring(s) {
  let left = 0;
  let set = new Set();
  let maxsubstring = 0;
  let lengthoflongeststring = "";

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);

    if (right - left + 1 > maxsubstring) {
      maxsubstring = right - left + 1;
      lengthoflongeststring = s.substring(left, right + 1);
    }
  }

  return { maxsubstring, lengthoflongeststring };
}

let result = longestsubstring(str);

console.log("Length = " + result.maxsubstring);
console.log("Longest substring without repeating characters = \"" + result.lengthoflongeststring + "\"");

let str = "sakshi";
function stringreverse(s){
let char = s.spilt("");
let reverserd =  char.reversed();
return reversed.jon("");
}
let result = stringreverse(str);
console.log("reverse string " +result);*/
/*
let test = [10,12,13,15];
function repeatingtest(s){
let ch = s.split();
let reversed =  ch.reverse();
return reversed.join();}

let result = repeatingtest(test);
console.log("reverse string = " +result);

let str = "Nagpurnagar";   // original string
function reverseString(s) {
  let chars = s.split("");  
  let reversed = chars.reverse();  
  return reversed.join("");  
}
let result = reverseString(str);
console.log("Reversed string = " + result);
*/
