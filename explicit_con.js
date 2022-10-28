let result;

// string to number
result = Number('324');
console.log(result); 


result = Number('324e-1')  
console.log(result); 

result = Number(true);
console.log(result); // 1


 var sum = Number('hello');
console.log(sum); // NaN


let a;
a = Number(null);
console.log(a);  // 0

let b = Number(' ')
console.log(b);  // 0