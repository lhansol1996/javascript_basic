// 여러 학생 목록 관리 객체

function StudentReopsitory () {
  // this = {};
  //this.students=[];
  this.students = new Array();   //this가 가지고 있는 students라는 키값을 가진 배열 생성


  //기능추가
  this.addStudent = function(student) {          //학생 추가
    this.students.push(student);
  }

  this.getStudents = function(){                  //학생 전체 목록 출력
    return this.students;
  }

  //학번으로 학생 검색
  this.findBySsn = function(ssn) {
    for (const student of this.students) {
    if(student.ssn === ssn){
      return student;
      }
    }
    return undefined;
  }


  //이름으로 학생 검색
  this.findByName = function(name) {
    let nameList = [];
    for (const student of this.students) {
      if(student.name === name) {
        nameList.push(student);
      }
    }
    return nameList;
  }

  //학번으로 학생 삭제
  this.removeBySsn = function(ssn){
    for (let i = 0; i < this.students.length; i++) {
    if (this.students[i].ssn == ssn) {
      this.students.splice(i,1);
      return true;
    } 
  }
  return false;
} 

  //평균범위로 검색.
  this.findByRange = function(startAvg, endAvg){
  let list = [];
    for (const student of this.students) {
      if(student.getAvg()>= startAvg && student.getAvg()<=endAvg) {
        list.push(student);
      }
    }return list;
  }


  //return this;

}


//임시 테스트
let studentReopsitory = new StudentReopsitory();
studentReopsitory.addStudent(new Student(10, '아무개', 90, 80 ,85));
studentReopsitory.addStudent(new Student(11, '김무개', 10, 20 ,30));
studentReopsitory.addStudent(new Student(12, '강무개', 50, 60 ,75));
studentReopsitory.addStudent(new Student(13, '박무개', 70, 80 ,85));
studentReopsitory.addStudent(new Student(14, '최무개', 30, 20 ,55));
studentReopsitory.addStudent(new Student(15, '이무개', 90, 95 ,100));
studentReopsitory.addStudent(new Student(16, '아무개', 90, 10 ,100));

let allList = studentReopsitory.getStudents();
for (const student of allList) {
  console.log(student.toString());
}
console.clear();

//이름으로 검색
const findStudents = studentReopsitory.findByName('아무개');
if(findStudents.length !== 0){
  for (const student of findStudents) {
    console.log(student);
  }
}else{
  console.log('학생이없음');
}
console.clear();

// 학번으로 삭제 테스트
let removed = studentRepository.removeBySsn(12);
if (removed) {
  console.log('삭제 완료!');
} else {
  console.log('삭제하고자 하는 학생이 존재하지 않습니다.');
}

console.log(studentRepository.getStudents());


// 평균 범위로 검색 테스트
let rangeList = studentRepository.findByRange(80, 90);
for (const student of rangeList) {
  console.log(student.toString());
}

console.log("======================================");

// 전체 목록
allList = studentRepository.getStudents();
for (const student of allList) {
  console.log(student.toString());
}
