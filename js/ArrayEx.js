//Array 객체
// let array = new Array();   //비워진 array 객체 생성
  let array = []; //빈배열 만드는 위랑 같은 코드임  []안에 객체를 넣어서 미리 값을 넣어 줄 수 도있음 (대상이 객체이니 함수,값 다됨)
  array.push(10);            // push 는 add라고 보면됨 (맨뒤에 원소추가) , unshift는 맨앞에 원소추가
  array.push('문자열');
  array.push(new Student(10, '김무개', 50,40,30));
  array.push(new Student(11, '박무개', 60,70,80));
  array.unshift(new Student(12, '최무개', 80,90,95));

  //전체 목록 출력
  for (const value of array) {
    console.log(value);
  }

  console.log(array[0]);
  console.dir(array);  //배열 구조
  console.log(array.length);  //배결의 길이
  
  //삭제 
  delete array[0]; // pop() 맨뒤원소값 하나 삭제 , shift() 맨앞 원소값 하나 삭제
  console.dir(array);  
