module.exports = function check(str, bracketsConfig) {
  
  let pairs = {};
  const openBrackets = bracketsConfig.map(item => item[0]);
  
  bracketsConfig.forEach((item) => {
    pairs[item[1]] = item[0]; 
  });

  let stack = [];
  
  for(let x = 0; x < str.length; x++) {
    let currentSymbol = str[x];

    if(openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if(stack.length == 0) {
        return false;
      }
      let topElem = stack[stack.length - 1];
      if(pairs[currentSymbol] == topElem) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return (stack == 0);
}

