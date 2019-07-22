/*
Write a function that computes the dominant writing direction 
in a string of text. Remember that each script object has a 
direction property that can be "ltr" (left to right), "rtl" 
(right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the 
characters that have a script associated with them. The 
characterScript and countBy functions defined earlier in the 
chapter are probably useful here.
*/

const SCRIPTS = require('./scripts');

function countBy(items, groupName) {
  const counts = [];
  for (const item of items) {
    const name = groupName(item);
    const known = counts.findIndex(c => c.name === name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count += 1;
    }
  }
  return counts;
}

function characterScript(code) {
  for (const script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  // Your code here.
  const allFullChars = [];
  for (const char of text) {
    allFullChars.push(char);
  }

  const counts = countBy(allFullChars, char => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : '???';
  }).filter(({ name }) => name !== '???');

  return counts.reduce((maxObj, currDir) =>
    maxObj.count < currDir.count ? currDir : maxObj,
  ).name;
}

console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
