class Person {
//스태틱 (공통속성-정적속성) 정의
  static commonAttribute = '공통속성';

  static commonMethod (){
    console.log('공통 기능');
  }



  //속성 추가
  constructor(name , age){
    // this.{};  첫줄에 무조건 이거 있다고 생각하고 작성

    this.name = name;
    this.age  = age;
    // return this; 
  }

//getter / setter 추가
get name() {
  return this._name;   /** 언더바 주의(언더바아니여도 그냥 get부분의 속성이름과 차이점만 주면됨.)
                          이름이 같을 경우 get부분의 속성값과 리턴값의 속성이 무한루프 돌게됨*/
}

get age() {
  return this._age; 
}

set name (name) {
  //데이터 유효성 검증
  if(name === undefined) {
    throw new Error('이름은 입력하여야 합니다.');
  }
  this._name = name;
}

set age (age) {
  //데이터 조건 
  if(age<10 || age>100){
    throw new Error ('나이제한 걸림')
  }
  this._age = age;
}



//기능 추가 (메소드라 생각하면 편함)

  showInfo () {
    console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
  }
}

let person =  new Person ('이한솔', 27);
person.showInfo();
console.log(person.name);
console.log(person.age);

try{
person.name = undefined;
person.age = 900;
}catch(e){
  alert(e.message)
}
person.showInfo();

console.log(Person.commonAttribute);  // 스태틱은 반드시 클래스명으로 접근
Person.commonMethod();













