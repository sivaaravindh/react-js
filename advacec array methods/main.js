//arra methods

//find

let n=[1,2,4,70,80,90,60,90];

let arr=n.find(function (n) {
    return n>3;
})
console.log(arr);

//map
let arr2=n.map(function (n) {
  return n*2;
})
console.log(arr2);

//filter
let arr3=n.filter(function (n) {
  return n>19;
})
console.log(arr3);

//some
let arr4=n.every(function (n) {
  return n>18;
})
console.log(arr4);