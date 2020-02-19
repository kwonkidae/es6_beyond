// (() => {
//   var a = 2;

//   {
//     let a = 3;
//     console.log(a);
//   }

//   console.log(a);
// })();

// (() => {
//   console.log(1 / -0 === 1 / -0);
//   let a = 2;
//   if (a > 1) {
//     let b = a * 3;
//     console.log(b);

//     for (let i = a; i <= b; i++) {
//       let j = i + 10;
//       console.log(j);
//     }

//     let c = a + b;
//     console.log(c);
//   }
// })();

// (() => {
//   console.log(a);
//   // console.log(b); ReferenceError!

//   var a;
//   let b;
// })();

(() => {
  var funcs = [];

  for (var i = 0; i < 5; i++) {
    funcs.push(function () {
      console.log(i);
    });
  }
  funcs[3]();
})();