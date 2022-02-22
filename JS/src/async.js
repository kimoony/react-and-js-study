function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}
console.log("code end");

// taskA(3, 4, (res) => {
//   // callback
//   console.log(`A task result: ${res}`);
// });

// taskB(4, (res) => {
//   // callback
//   console.log(`B task result: ${res}`);
// });

// taskC(15, (res) => {
//   // callback
//   console.log(`C task result: ${res}`);
// });

taskA(5, 8, (a_res) => {
  console.log(`A TASK RESULT: ${a_res}`);
  taskB(a_res, (b_res) => {
    console.log(`B TASK RESULT: ${b_res}`);
    taskC(b_res, (c_res) => {
      console.log(`C TASK RESULT: ${c_res}`);
    });
  });
});

//
