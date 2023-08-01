import { Student } from "./student.js";
import { StudentRepository } from "./student-repository.js";
import { EventHandler } from "./event-handler.js";

let studentRepository = new StudentRepository();
//테스트를 위한 더미데이터 
studentRepository.addStudent(new Student(10, '아무개', 90, 80 ,85));
studentRepository.addStudent(new Student(11, '김무개', 10, 20 ,30));
studentRepository.addStudent(new Student('12', '강무개', 50, 60 ,75));
studentRepository.addStudent(new Student(13, '박무개', 70, 80 ,85));
studentRepository.addStudent(new Student(14, '최무개', 30, 20 ,55));
studentRepository.addStudent(new Student(15, '이무개', 90, 95 ,100));
studentRepository.addStudent(new Student(16, '아무개', 90, 10 ,100));


let eventHandler = new EventHandler
eventHandler.eventRegist();


export { studentRepository }