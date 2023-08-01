
let x = 88.434343.toFixed(2);

console.log(x);
console.log(Number.MAX_VALUE);


// x = new Number(x);
// console.log(x.toFixed(2));  // --> 88.43


let y = '33343';

 //new 없이 직접 호출 시 
 let result = Number(y);  // 숫자로 형변환 대신 이땐 숫자형만 있어야함 , parseInt(y);는 문자도 가능
  console.log(result);

  