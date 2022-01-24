// 삼항연산자

// let a = 3;
// let b = [];

// // 기존 조건문
// if(a >= 0) {
//   console.log('양수')
// } else {
//   console.log('음수')
// }

// 삼항연산자
// 조건 ? 참 : 거짓
// a >= 0 ? console.log("양수") : console.log("음수");

// const arrResult = b.length === 0 ? "빈배열입니다." : "배열입니다.";
// console.log(arrResult);

// 삼항 연산자 중첩
// 학점 계산기
// 90점 이상 A+
// 50점 이상 B+
// 둘다 아니면 F

let score = 100;

const result = score >= 90 ? "A+" : score >= 50 ? "B+" : "F";
console.log(result);
