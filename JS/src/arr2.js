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
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
  { num: 4, color: "yellow" },
  { num: 5, color: "blue" }
];

// findIndex는 객체배열에서 원하는 요소의 인덱스를 구할 때
// 주의할 점은 중복된 값이 있다면 첫번째 것을 가져온다.
// const idx = arr2.findIndex((el) => el.color === "blue");
// console.log(idx);

// // 베열 내장함수6

// // find는 객체배열에서 원하는 요소를 구할 때
// const element = arr2.find((el) => el.color === "blue");
// console.log(element);

// // 베열 내장함수7

// // 필요한 요소를 필터할 때
// const filter = arr2.filter((el) => el.color === "blue");
// console.log(filter);

// 베열 내장함수8

// 배열 자르기
// console.log(arr2.slice(1, 3));
// slice(비긴 - 시작할 인덱스, 엔드 - 엔드에서 하나를 뺀 값까지만 표시)

// // 베열 내장함수9
// const arr3 = [
//   { num: 1, color: "red" },
//   { num: 2, color: "black" },
//   { num: 3, color: "blue" }
// ];
// const arr4 = [
//   { num: 4, color: "yellow" },
//   { num: 5, color: "blue" }
// ];
// // 배열 붙이기
// console.log(arr3.concat(arr4));

// 베열 내장함수10
// 문자정렬
// let chars = ["나", "다", "가"];

// chars.sort(); // 원본 배열을 정렬한다.
// console.log(chars);

// 숫자정렬
// let num = [0, 6, 20, 50, 3];

// 방법 1
// num.sort((a, b) => a - b); // b - a 를 리턴하면 역순

// 방법2

// const compare = (a, b) => {
//   if(a > b) {
//     return 1;
//   } else if(a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// num.sort(compare)

// console.log(num);

// 베열 내장함수10
// const arr5 = ["김훈", "님", "안녕하세요", "반갑습니다"];

// // join() 문자열 합치기
// console.log(arr5.join());
// // 김훈,님,안녕하세요,반갑습니다  => 쉼표로 구분
// // join('이곳에 구분할 기호나 공백을 넣으면 구분이 넣은 값으로 바뀜')
// console.log(arr5.join(" "));
// // 김훈 님 안녕하세요 반갑습니다
// console.log(arr5.join("+"));
// // 김훈+님+안녕하세요+반갑습니다
