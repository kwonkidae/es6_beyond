// (() => {
//   function foo(x, y, z) {
//     console.log(x, y, z);
//   }

//   foo(...[1, 2, 3]);
//   foo.apply(null, [1, 2, 3]);

//   var a = [2, 3, 4];
//   var b = [1, ...a, 5];
//   console.log(b);
// })();

(() => {
  function foo(x, y, ...z) {
    console.log(x, y, z);
  }
})();

(() => {
  function foo(...args) {
    args.shift();
    console.log(...args);
  }

  function bar() {
    var args = Array.prototype.slice.call(arguments);

    args.push(4, 5);

    args = args.filter(function (v) {
      return v % 2 == 0;
    });

    foo.apply(null, args);
  }

  bar(0, 1, 2, 3);
})();

(() => {
  function foo(x, y) {
    x = x || 11;
    y = y || 31;

    console.log(x + y);
  }

  foo();
  foo(5, 6);
  foo(5);
  foo(null, 6);
  foo(0, 42);
})();

(() => {
  function foo(x, y) {
    x = x !== undefined ? x : 11;
    y = y !== undefined ? y : 31;

    console.log(x + y);
  }

  foo(0, 42);
  foo(undefined, 6);
})();

(() => {
  function foo(x, y) {
    x = 0 in arguments ? x : 11;
    y = 1 in arguments ? y : 31;

    console.log(x + y);
  }
  foo(5);
  foo(5, undefined);
  console.log(null == 0);
})();

(() => {
  function foo(x = 11, y = 31) {
    console.log(x + y);
  }
  foo();
  foo(5, null);
  foo(null, null);
})();

(() => {
  function bar(val) {
    console.log('bar called!');
    return y + val;
  }

  function foo(x = y + 3, z = bar(x)) {
    console.log(x, z);
  }
  var y = 5;
  foo();
  foo(10);
  y = 6;
  foo(undefined, 10);
})();