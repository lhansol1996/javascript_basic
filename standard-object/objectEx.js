// let user = new Object();
let user = {
  name : 이한솔
};

let str = 'xxx'.charAt(0);

console.log(user.toString());
Object.prototype.isPrototypeof(str);

//동적 개체 변환
//Objectdml static 메소드 활용
 //깊은복사 user3을 복사하여 user2에 넣음 중복된 키값은 덮어씌움.
let user2 = {};
let user3 = {};
  Object.assign(user2 , user3);
  console.log(user);

let prototypee  = Object.getPrototype(user);
console.dir(prototypee)





