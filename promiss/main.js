var p1=new Promise(function(resolve,reject){
  var num=Math.random();
  if(num<0.5){
    resolve(num);
  }else{
    reject(num);
  }
});

p1.then(function(result){
  console.log("success",result);
}).catch(function(result){
  console.log("error",result);
})