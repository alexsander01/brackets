module.exports = function check(str, bracketsConfig) {
  // your solution
  let array = str.split('');
  let w = 0, v = 1;
  while(v > w) {
    w = 0;
    v = 0;
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < bracketsConfig.length; j++) {
        if(array[i] == bracketsConfig[j][0] && array[i+1] == bracketsConfig[j][1]) {
          array.splice(i, 1);
          array.splice(i, 1);
          i -= 2;
          v++;
        }
      }
    }
  }
  return (array.join('') == 0);
}
