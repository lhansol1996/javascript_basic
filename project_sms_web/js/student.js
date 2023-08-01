//학생객체 생성을 위한 틀(생성자 함수)
// export //내보내기
class Student{
  constructor(ssn, name, korea, english, math) {
    //  this = {};
    this.ssn = ssn;
    this.name = name;
    this.korea = korea;
    this.english = english;
    this.math = math;

  }

  //정적 속성
  static schoolName = "Ezen초등학교";


// 생성자 함수의 메소드를 Student의 프로토타입 객체에 할당

getSum(){
  return this.korea + this.english + this.math;
  }

getAvg(){
  return this.getSum()/3;
  }

toString(){
  return `${this.ssn} \t ${this.name} \t ${this.korea} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg()}`;
  }

//  return this;
}
export{ Student };