//cal back hel function

function divide(x,y){
    return x/y
}

function multiply(x,y){
    return x*y
}

function add(x,y){
    return x+y
}

function compute(callBack, x, y){
    return callBack(x,y)
}

console.log(compute(divide, 10, 5))    // 2
console.log(compute(multiply, 10, 5))  // 50
console.log(compute(add,10,5))         // 15
