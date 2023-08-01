//학생객체 생성을 위한 틀(생성자 함수)

function Student (ssn, name, korea, english, math) {
//  this = {};
this.ssn = ssn;
this.name = name;
this.korea = korea;
this.english = english;
this.math = math;

//메모리 낭비를 막기위해 Student 객체에 메소드를 만드는게아닌
//Student 객체를 생성할 때 자동으로 만들어지는 prototype에 메소드를 넣어주어야함.

// this.getSum = function() {
//   return this.korea + this.math + this.english;
// }


// this.getAvg = function() {
//   return this.getSum()/3;
// }

// this.toString = function() {
//   return `${this.ssn} \t ${this.name} \t ${this.korea} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg()}`;
// }

//생성자 함수(객체)의 메소드를 Student 프로토타입 객체에 할당

Student.prototype.getSum = function() {
  return this.korea + this.math + this.english;
}


Student.prototype.getAvg = function() {
  return this.getSum()/3;
}
// 오브젝트 프로토타입객체의 toString() 오버라이딩.
Student.prototype.toString = function() {
  return `${this.ssn} \t ${this.name} \t ${this.korea} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg()}`;
}

//  return this;

}

 let student1 = new Student(10, '아무개', 90, 80 ,85);
 let student2 = new Student(10, '아무개', 90, 80 ,85);
 let student3 = new Student(10, '아무개', 90, 80 ,85);
 console.log(student1.toString());
 console.log(student2.toString());
 console.log(student3.toString()); //프로토 타입 객체의 toString()메소드를 호출 하는 것임

 // 프로토타입 상속 체인 검증. hasOwnProperty는 object 프로토타입의 메소드중 하나임.
 //object 프로토타입 메소드의 재사용.
  console.log(student1.hasOwnProperty('name'));


//instance of / constructor

function doTasks(object){
  //object.constructor가 기본적으로 포함되어있음
  if  (object.constructor === Student){
    console.log('학생일때만 시행되는 메소드');
  }
}

doTasks(student2);







