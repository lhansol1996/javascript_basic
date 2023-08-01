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
  static showSchoolName (){ console.log(Student.schoolName);
  }


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




  // let student = new Student(10, '아무개', 90, 80 ,85);
  // console.log(student.toString());
  // console.dir(student);


  


 // 프로토타입 상속 체인 검증. hasOwnProperty는 object 프로토타입의 메소드중 하나임.
 //object 프로토타입 메소드의 재사용.
  // console.log('valueof' in student1);
  // console.log(student1.hasOwnProperty('name'));
  // console.log(student1.hasOwnProperty('valueof'));
  // console.log(Student.hasOwnProperty('schoolName'));

  let xxx = 500; 
  function yyy () {console.log('함수내보내기 실험');}

export {Student, xxx, yyy};
// 변수 , 함수도 내보내기가 가능함.






