function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패
      reject("주어진 값이 숫자가 아닙니다.");
    }
  }, 2000);
}

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    // 실행자
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공
        // console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패
        reject("주어진 값이 숫자가 아닙니다.");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP([]);
res
  .then((res) => {
    // console.log(`작업 성공: ${res}`);
  })
  .catch((err) => {
    // console.log(`작업 성공: ${err}`);
  });

// isPositive(
//   "20",
//   (res) => {
//     console.log("성공!");
//   },
//   (err) => {
//     console.log("ERROR!");
//   }
// );

// ---------------------------------------

function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

taskA(6, 1)
  .then((a_res) => {
    console.log(`A TASK RESULT: ${a_res}`);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log(`B TASK RESULT: ${b_res}`);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log(`C TASK RESULT: ${c_res}`);
  });

// taskA(10, 10, (a_res) => {
//   console.log(`A TASK RESULT: ${a_res}`);
//   taskB(a_res, (b_res) => {
//     console.log(`B TASK RESULT: ${b_res}`);
//     taskC(b_res, (c_res) => {
//       console.log(`C TASK RESULT: ${c_res}`);
//     });
//   });
// });

//
