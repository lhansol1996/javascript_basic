import { Student } from "./student.js";
import { studentRepository } from "../app.js";
import { Validator } from "../util/validator.js";

// 이벤트 처리를 객체화 (2023-06-29)
class EventHandler {

  constructor() { }

  // 이벤트 소스에 이벤트핸들러 등록
  eventRegist() {
    window.addEventListener('load', e => {
      const students = studentRepository.getStudents();
      students.forEach((student) => {
        this.addRank(e);
        this.addRow(student);
      });
    });

    // 등록 버튼
    document.querySelector('#addBtn').addEventListener('click', e => {
      this.addStudent(e);
    });

    // 검색 버튼
    document.querySelector('#searchBtn').addEventListener('click', e => {
      const select = document.searchForm.searchSelect;
      const value = select.options[select.selectedIndex].value;

      if (value.length == 0) { // 모든 리스트
        const tbody = document.querySelector('.table-body');
        const students = studentRepository.getStudents();

        tbody.innerHTML = '';
        students.forEach(student => {
          this.addRow(student);
        });
      } else if (value == 'ssn') { // 학번 검색
        this.findBySsn(e);
      } else if (value == 'name') { // 이름 검색
        this.findByName(e);
      }
    });

    // 삭제 버튼
    document.querySelector('#deleteBtn').addEventListener('click', e => {
      const select = document.searchForm.searchSelect;
      const value = select.options[select.selectedIndex].value;
      if (value == 'ssn') {
        this.removeByssn(e);
      } else {
        alert('선택 메뉴 중 학번을 선택해주세요');
      }
    });

    // 정렬 기능
    document.querySelector('#sortSelect').addEventListener('change', e => {
      const select = e.target;
      const value = select.options[select.selectedIndex].value;
      const tbody = document.querySelector('.table-body');
      if (value == '') {
        const sortedList = studentRepository.findAllBySort((student1, student2) => student1.ssn - student2.ssn);
        tbody.innerHTML = '';
        sortedList.forEach(student => {
          this.addRow(student);
        });
      } else if (value == 'avgSort') {
        const sortedList = studentRepository.findAllBySort((student1, student2) => student2.getSum() - student1.getSum());
        tbody.innerHTML = '';
        sortedList.forEach(student => {
          this.addRow(student);
        });
      } else if (value == 'nameSort') {
        const sortedList = studentRepository.findAllBySort((student1, student2) => student1.name.localeCompare(student2.name));
        tbody.innerHTML = '';
        sortedList.forEach(student => {
          this.addRow(student);
        });
      }
    });
  }

  // 학생 등록
  addStudent() {
    const ssn = document.inputForm.ssn.value;
    const name = document.inputForm.name.value;
    const korean = document.inputForm.korean.value;
    const english = document.inputForm.english.value;
    const math = document.inputForm.math.value;

    if (!Validator.hasText(ssn)) {
      alert('학번을 입력하세요.');
      document.inputForm.ssn.focus();
    } else if (!Validator.hasText(name)) {
      alert('이름을 입력하세요.');
      document.inputForm.name.focus();
    } else if (!Validator.hasText(korean)) {
      alert('국어점수를 입력하세요.');
      document.inputForm.korean.focus();
    } else if (!Validator.hasText(english)) {
      alert('영어점수를 입력하세요.');
      document.inputForm.english.focus();
    } else if (!Validator.hasText(math)) {
      alert('수학점수를 입력하세요.');
      document.inputForm.math.focus();
    } else {
      const student = new Student(Number(ssn), name, Number(korean), Number(english), Number(math));
      studentRepository.addStudent(student);

      this.addRank();

      const tbody = document.querySelector('.table-body');
      tbody.innerHTML = '';

      const students = studentRepository.getStudents();
      students.forEach(student => {
        this.addRow(student);
      });

      document.inputForm.ssn.value = '';
      document.inputForm.name.value = '';
      document.inputForm.korean.value = '';
      document.inputForm.english.value = '';
      document.inputForm.math.value = '';
    };
  }

  // 랭크 추가
  addRank() {
    const students = studentRepository.getStudents();
    students.forEach(student => student.rank = 1); 
    // 각 student에 student.rank = 1 을 실행 ->랭크속성이 붙음(속성값이 존재 하지않으면 속성을 추가해줌)
      for(let i = 0; i < students.length; i++){
        for(let j = 0; j< students.length; j++){
          if(students[i].getAvg()<students[j].getAvg()){
            students[i].rank++;
          }
        }
      }

  }

  // 학번으로 학생 검색
  findBySsn() {
    const searchInput = Number(document.searchForm.search.value);
    const student = studentRepository.findBySsn(searchInput);
    const tbody = document.querySelector('.table-body');

    if (student == null) {
      alert('학번을 제대로 입력해주세요.');
    } else {
      tbody.innerHTML = '';
      this.addRow(student);

      document.searchForm.search.value = '';
    }
  };

  // 이름으로 학생 검색
  findByName() {
    const searchInput = document.searchForm.search.value;
    const students = studentRepository.findByName(searchInput);
    const tbody = document.querySelector('.table-body');

    if (students.length == 0) {
      alert('이름을 제대로 입력해주세요.');
    } else {
      tbody.innerHTML = '';

      students.forEach(student => {
        this.addRow(student);
      });
      document.searchForm.search.value = '';
    }
  };

  // 학번으로 학생 삭제
  removeByssn() {
    const searchInput = Number(document.searchForm.search.value);
    const students = studentRepository.getStudents();
    const tbody = document.querySelector('.table-body');
    const result = studentRepository.removeBySsn(searchInput);

    if (!result) {
      alert('학번을 제대로 입력해주세요.');
    } else {
      tbody.innerHTML = '';

      students.forEach(student => {
        this.addRow(student);
      });

      document.searchForm.search.value = '';
    }
  };

  // table row 추가
  addRow(student) {
    const tbody = document.querySelector('.table-body');
    const tr = document.createElement('tr');

    tbody.appendChild(tr);
    tr.innerHTML =
      `<td>${student.ssn}</td>
      <td>${student.name}</td>
      <td>${student.korean}</td>
      <td>${student.english}</td>
      <td>${student.math}</td>
      <td>${student.getSum()}</td>
      <td>${student.getAvg().toFixed(2)}</td>
      <td>${student.rank}등</td>`
  }
}

export { EventHandler };