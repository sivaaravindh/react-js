//spread operator

const strsOne = ["siva","hii","hello"];
const strsTwo = ["mam","good","morning"];
const strsCombined = [...strsOne, ...strsTwo];

 // es6 rest operator
    function fun(...input){
        let sum = 0;
        for(let i of input){
            sum+=i;
        }
        return sum;
    }
    console.log(fun(1,2)); 
    console.log(fun(1,2,3)); 
    console.log(fun(1,2,3,4,5)); 