// 콜백함수
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

function cry() {
  // console.log("ACTION:: CRY");
}

function sing() {
  // console.log("ACTION:: SING");
}

function dance() {
  // console.log("ACTION:: DANCE");
}

// callback 함수
// 함수의 파라미터로 함수를 넘기는 것

checkMood("sad", dance, cry);

// 값이 "sad" 이면 badCallback을 수행하게 되는데
// cry라는 함수가 값으로써 badCallback이라는 매개변수에 담아준다.
// badCallback() 가 실행되는데 이것은 cry() 와 같다.
