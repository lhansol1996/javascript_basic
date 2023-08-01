
let today = new Date();

console.log(today.toString());
console.log(today.toLocaleString()); // 아래 2개 합한거 
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

console.log(today.getTime()); // 1970.01.01 00:00:00 기준으로 현재까지 지나온 시간 밀리초 반환
console.log(today = Date.now());  //위와 동일
