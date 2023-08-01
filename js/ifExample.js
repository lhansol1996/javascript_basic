let score = prompt('점수를 입력하세요' ,0); // 입력창 불러오는 코드 (뒤에 숫자를 디폴트값으로 넣을 수 있음)
console.log(typeof score);      // 해당 함수는  값을 문자열로 받음

// let score = 88;

if (score >= 60) {
  console.log('합격');
} else {
  console.log('불합격');
}

if (score >= 90) {
  console.log('수');
} else if (score >= 80) {
  console.log('우');
} else if (score >= 70) {
  console.log('미');
} else if (score >= 60) {
  console.log('양');
} else {
  console.log('가');
}