//promise all

p1 = Promise.resolve(50);
    p2 = 200
    p3 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'geek');
    });
 
    Promise.all([p1, p2, p3]).then(function(values) {
        document.write(values);
    });