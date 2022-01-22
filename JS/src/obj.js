// 객체

// 객체 리터럴 방식
let person = {
  // key: value - 프로퍼티(속성) (객체 프로퍼티)
  str: "value",
  num: 246,
  boolean: true,
  undefined: undefined,
  arr: [1, "abc"],
  func: function () {},
  null: null
};

// console.log(person);
// console.log(person.num);

const user = {
  name: "Hoony", // 객체 맴버
  age: 34, // 객체 맴버
  say: function () {
    // console.log(`안녕? 나는 ${this.name}이야`); // this(=user)는 객체 자신
  } // 객체 메서드 (방법)
};

// console.log(user.name);
// console.log(user["age"]);
// // 프로퍼티의 key를 [] 안에 반드시 문자열 형태로 넣어야 한다.

// 호이스팅
// console.log(getPropertyValue("name"));

function getPropertyValue(key) {
  return user[key];
}

// 객체에 추가, 삭제
// 추가
user.location = "화성시";

// 수정
user.name = "김훈";
user["age"] = 99;

// console.log(user);

// 삭제
// delete를 사용하면 메모리는 그대로 사용되기 때문에
user.name = null; // 을 사용해 값을 비워준다.

// 갹채 언애 험수
// user.say();
// user["say"]();

// 객체 안에 property 확인하는 방법 - in
// console.log(`name: ${"name" in user}`); // true
// console.log(`age: ${"age" in user}`); // true
// console.log(`gender: ${"gender" in user}`); // false
// user라는 객체 안에 name이라는 프로퍼티가 있는지 확인
