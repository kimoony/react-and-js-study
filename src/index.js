function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

function cry() {
  console.log("ACTION:: CRY");
}

function sing() {
  console.log("ACTION:: SING");
}

function dance() {
  console.log("ACTION:: DANCE");
}

// callback 함수
// 함수의 파라미터로 함수를 넘기는 것

checkMood("cry", dance, cry);
// checkMood("cry");
