// 여러 학생 목록 관리 객체

function StudentReopsitory () {
  // this = {};
  
  this.students = new Array();   //this가 가지고 있는 students라는 키값을 가진 배열 생성
    //this.students=[];

  //return this;
}
  //기능추가
  StudentReopsitory.prototype.addStudent = function(student) {          //학생 추가
    this.students.push(student);
  }

  StudentReopsitory.prototype.getStudents = function(){                  //학생 전체 목록 출력
    return this.students;
  }

  //학번으로 학생 검색
  StudentReopsitory.prototype.findBySsn = function(ssn) {
    return this.students.find(student => student.ssn === ssn ? true : false );
  //  return this.studentsfind(student => student.ssn === ssn ||'');   위와 같음
  }


  //이름으로 학생 검색
  StudentReopsitory.prototype.findByName = function(name) {
    return this.students.filter(student => student.name === name ? true : false);
  }

  //학번으로 학생 삭제
  StudentReopsitory.prototype.removeBySsn = function(ssn){
    let deleted = false;
    this.students.forEach((student, index) => {
    if(student.ssn === ssn){
      this.students.splice(index, 1);
      deleted = true;
    }
  });
  return deleted;
} 

  //평균범위로 검색.
  StudentReopsitory.prototype.findByRange = function(startAvg, endAvg){
    let list = [];
    StudentReopsitory.prototype.students.forEach(student => {
      if(student.getAverage()>=startAvg && student.getAverage<=endAvg){
        list.push(student);
      }
    });
    return list;
  }

//정렬하여 전체 검색
  this.findAllBySort = function (callback) {
    return this.students.sort(callback);
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

let allList = studentRepository.getStudents();
for (const student of allList) {
  console.log(student.toString());
}

console.clear();

// 학번으로 검색 테스트
const findStudent = studentRepository.findBySsn(11);
if (findStudent !== undefined) {
  console.log(findStudent);
} else {
  console.log('학번에 해당하는 학생 없시유...');
}

console.log('-----------------------------------------------');

// console.clear();

// 이름으로 검색 테스트
const findStudents = studentRepository.findByName('최기정');
if (findStudents.length !== 0) {
  for (const student of findStudents) {
    console.log(student);
  }
} else {
  console.log('이름에 해당하는 학생 없시유...');
}

// console.clear();
console.log('-----------------------------------------------');

// 학번으로 삭제 테스트
console.log("삭제 테스트");
let removed = studentRepository.removeBySsn(12);
if (removed) {
  console.log('삭제 완료!');
} else {
  console.log('삭제하고자 하는 학생이 존재하지 않습니다.');
}
console.log('-----------------------------------------------');

console.log(studentRepository.getStudents());



// console.clear();

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

console.log("============= 정렬 테스트 ====================");
// 평균 내림차순으로 정렬하여 목록 보여주고 싶다...
let sortedList = studentRepository.findAllbySort((student1, student2) => student1.getAverage() - student2.getAverage());
sortedList.forEach(student => {
  console.log(student.toString());
});

