function myFunction(a, b) {

    let object = {};
    a.forEach((i, j) => {
        object[i] = b[j]  
    });

    return object;
  }

console.log(myFunction(['a','b','c'],[1,2,3]));
console.log(myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}]));
console.log(myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false]));