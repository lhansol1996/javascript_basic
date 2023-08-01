//객체 즉시 생성 

// 객체 리터럴 표현식
let dog = { 
  name : '이름',
  age : 8 ,
  kind : '종',
  eat : function (){
    console.log(this.name+'강아지 밥먹는 기능');  //this : 지역변수를 읽지못하니 내부의 변수를 읽기위해선 this를 씀 
  }
};
// 즉시생성 끝


//객체 속성 검색
console.log(dog.name);  
console.log(dog.['name']);
//속성명(키값)에 특수 기호가 들어가서 직접 불러오기를 못할때는 []를 사용하여 검색. 
//ex))  키값이 name-xxx일때 -때문에 검색이 불가하여 [name-xxx] 로 검색

console.log(dog.age);  
console.log(dog.kind); 
dog.eat();

// 속성 변경 
dog.name = '이름2';
console.log(dog.name);

//속성 제거
delete dog.age;
console.log(dog.age);

//기능 추가
dog.work = function() {
  console.log('work기능추가');
}
dog.work();

//in 연산자 : 객체의 속성 존재여부 반환
  if('age' in dog) {
    console.log(dog.age);
  }else{
    console.log('age속성 없음');
  }

//for in 반복문 : 배열이나 객체 속성 반복

for (const key in dog) {
    console.log(key, dog[key]);
  }

//for of 반복문 : 순차적인 배열일때 사용가능 (객체일떄 못씀)

