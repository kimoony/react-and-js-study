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
// console.log(result);

function isKoreanFood(food) {
  // if (food === "불고기" || food === "떡볶이" || food === "비빔밥") {
  if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
    // 파라미터 food 배열 안에 있으면
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("탕수육");
// console.log(food1);
// console.log(food2);

const meal = {
  한식: "불고기",
  양식: "파스타",
  중식: "유산슬",
  일식: "라멘",
  인도식: "카레"
};

const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

// console.log(getMeal("한식"));
// console.log(getMeal("중식"));
// console.log(getMeal());
