//for in 문
// 배열 리터럴 (선언, 생성, 초기화 동시에)


let array = [3, 4, 5, 6, 7];   //java는 {}지만 js는 [] 임


for (let i = 0; i < array.legth; index++) {
  const num = array[i];
  console.log(num);
}


for(const i in array) {
  console.log(i);
  console.log(array[i]);
} 
//자바의 향상 for 문과 동일
for (const num of array) {
  console.log(num);
}
