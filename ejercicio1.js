function myFunction(a, b) {

  let keys = Object.keys(a) 
  return keys.some(key => key == b);
  }

console.log(myFunction({a:1,b:2,c:3},'b'))
console.log(myFunction({x:'a',y:'b',z:'c'},'a'))
console.log(myFunction({x:'a',y:'b',z:undefined}, "z"))
