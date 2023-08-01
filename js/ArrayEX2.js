//Array 객체의 주요 메소드

let array = [0, 2, 5, 4, 12, 6, 7, 8, 9, 10];

//slice  원본배열에서 slice (처음,끝)가 있으면 처음과 끝을 자른 배열을 보여줌 (원본배열은 그대로 있음)
let list = array.slice(2, 5);
console.dir(list);


// splice 
//   배열의 원소를 제거, 추가 시 범용으로 사용 가능
//  삭제 : 처음과 삭제 개수를 알리는 전달인자 1개를 받음
//  추가 : 처음을 알리는 1번째 전달인자, 삭제 개수를 알리는 2번째 전달인자, 3번째 전달인자부터는 새롭게 삽입할 원소들을 지정
//  호출 시 원본 배열 수정한 후 배열 반환

let deleteList = array.splice(7,1);
console.dir(deleteList);

array.splice(1,0);
console.dir(deleteList);


// Array.find() : 검색 메소드
// find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.

//검색 메소드 활용
  //판별 함수를 만들어서 메소드에 넣어주어야함 . 

  // 판별함수  숫자가 7이면 리턴.
  // function findCondition(num){
  //   if (num === 7) {
  //     return true;
  //   }
  //   return false;
  // }

  //만든 판별함수를 find 메소드에 직접 전달.

// let findNum = array.find(function(num) {
//    return num === 7 ? true : false;
// });

//람다식
let findNum = array.find(num => num === 7 ? true : false);

console.log(findNum);


// filter() 메소드
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

//필터 메소드를 통해 짝수 목록만 가져오는 예시
let findNums = array.filter(num => num % 2 === 0 ? true : false);
console.dir(findNums);


//for each ()
//forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다. ->순회할때 가장 많이 씀, 비동기로 실행됨.

// 배열 순회
array.forEach((num, index) => {
  console.log(num, index);
});


// sort() : 배열 정렬
//  배열 안의 원소들을 정렬하여 반환
//  전달인자를 생략하면 배열은 각 요소를 문자열로 변환한 후 문자의 유니코드 값에 따라 정렬
//  콜백함수를 인자로 전달하여 정렬 기준을 제시할 수 있다

//배열 정렬 : 1, 10 ,12 의 문제점 : 모든 배열을 문자열로 바꿔서 2,3,4 등이 10,12보다 뒤에 정렬되는 문제점이 생김
//-> 정렬하는 방법을 콜백함수로 직접 지정해주어야함.
array.sort();
console.log(array);

// 콜백함수 지정 sort의 변수 2개 a,b가 있을 때 (a,b)의 a-b면 오름차순 b-a면 내림차순
array.sort((num1, num2)=> {
  return num1 - num2;   //오름차순
  // return num2 - num1;   // 내림차순
});



