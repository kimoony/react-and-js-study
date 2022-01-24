// // falsy

// let falsy = null;
// falsy = undefined;
// falsy = 0;
// falsy = NaN;
// falsy = "";
// falsy = false;

// if (falsy) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// // truthy

// let truthy = "false";
// truthy = 123;
// truthy = [];
// truthy = {};
// truthy = true;
// truthy = Infinity;

// if (truthy) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

const getName = (person) => {
  if (!person) {
    // falsy 값 예외 처리하기
    return "객체가 아닙니다.";
  }
  return person.name;
};

let person = {
  name: "Hoon"
};
const name = getName(person);
// console.log(name);
