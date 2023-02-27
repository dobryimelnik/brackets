module.exports = function check(str, bracketsConfig) {
  let map = new Map(bracketsConfig);
  // console.log(map);
  let values = [];
  let keys = [];
  let twins = [];

  for(let value of map.values()) {
    keys.push(value);
  }
  for(let key of map.keys()) {
    values.push(key);
  }
  console.log(keys)
  let pairs = {};

  for(let i = 0; i < values.length; i++) {
    if(values[i] == keys[i]) {
      twins.push(values[i])
    }
    pairs[keys[i]] = values[i];
  }

  twins.forEach(item => {
    while(str.includes(`${item}${item}`)) {    
      str = str.replace(`${item}${item}`, '')
    }
  })
  console.log(str)
  let stack = [];
  
  for(let x = 0; x < str.length; x++) {
    let currentSymbol = str[x];

    if(values.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else  {
      if(stack.length != 0) {        
        let topElem = stack[stack.length - 1];
        if(pairs[currentSymbol] == topElem) {
          stack.pop();
        } else {
        return false;
        }
      } else {
        return false;
      }
    }
  }
  return (stack == 0);
}

