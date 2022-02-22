let count = 1;
// 함수 밖에서 내부로 접근이 가능한 전역변수

// 함수 선언식, 함수 선언 방식의 함수 생성
function getArea(width, height) {
  // () 매개변수를 전달하고 받기 위한 것
  let area = width * height; // 함수 내부에서만 쓸 수 있는 지역변수
  // console.log(count);
  return area;
}

// getArea(10, 100); // () 안에 첫번째 값은 width, 두번째 값은 height가 된다.
// 함수를 변수에 담음
let area1 = getArea(10, 100);
// console.log(`area1: ${area1}`);
// console.log("함수 실행 완료");

// ----------------------------------------
// 함수 표현식, 함수 선언식

// console.log(helloB());
// 호이스팅
// 함수 선언식으로 만들어진 함수들은 프로그램 실행 전에 최상단으로 끌어올려진다.
// console.log(helloA());
// 표현식에서는 호이스팅이 불가능하다.

// 함수 표현식
let helloA = function () {
  return "Hello, world!";
};
// 더 짧게 코드 작성하기 - 화살표 함수
let helloA_1 = () => {
  return "Hello, world_1!";
};
// 값이 하나일땐 리턴과 중괄호가 없어도 된다.
let helloA_2 = () => "Hello, world_2!";

// 함수 선언식
function helloB() {
  return "Hi, Wolrd";
}
