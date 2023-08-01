// 여러 학생 목록 관리 객체
class StudentRepository{
constructor () {
  // this = {};
    this.students=[];
  //return this;
}
  //기능추가
  addStudent (student) {          //학생 추가
    this.students.push(student);
  }

  getStudents (){                  //학생 전체 목록 출력
    return this.students;
  }

  //학번으로 학생 검색
  findBySsn (ssn) {
    return this.students.find(student => student.ssn === ssn ? true : false );
  //  return this.studentsfind(student => student.ssn === ssn ||'');   위와 같음
  }


  //이름으로 학생 검색
  findByName (name) {
    return this.students.filter(student => student.name === name ? true : false);
  }

  //학번으로 학생 삭제
  removeBySsn (ssn){
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
  findByRange (startAvg, endAvg){
    let list = [];
    return this.students.forEach(student => {
      if(student.getAverage()>=startAvg && student.getAverage<=endAvg){
        list.push(student);
      }
    });
    return list;
  }

//정렬하여 전체 검색
  findAllBySort (callback) {
    return this.students.sort(callback);
  }
}



export{ StudentRepository };