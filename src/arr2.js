const arr = [1, 2, 3, 4];

// 반복문
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 베열 내장함수1
// const newArr = [];
// arr.forEach((i) => newArr.push(i * 2)); // callback함수
// console.log(arr);

// 베열 내장함수2
// const newArr = arr.map((i) => {
//   return i * 2;
// });
// console.log(newArr);

// 베열 내장함수3
// let number = 3;

// // includes는 인자로 받은 값이 배열에 존재하는지 확인
// console.log(arr.includes(number));

// 베열 내장함수4
// let number = "3";
// // indexOf는 인자로 받은 값이 배열에 값과 일치하는 인덱스가 있는지
// // 있으면 일치하는 값에 인텍스 번호를 보여주고 없으면 -1
// console.log(arr.indexOf(number));

// 베열 내장함수5
const arr2 = [
  { color: "red" },
  { color: "black" },
  { color: "blue" },
  { color: "yellow" },
  { color: "black" }
];

// findIndex는 객체배열에서 원하는 요소의 인덱스를 구할 때
// 주의할 점은 중복된 값이 있다면 첫번째 것을 가져온다.
// const idx = arr2.findIndex((el) => el.color === "blue");
// console.log(idx);

// 베열 내장함수6

// find는 객체배열에서 원하는 요소를 구할 때
const element = arr2.find((el) => el.color === "blue");
console.log(element);
