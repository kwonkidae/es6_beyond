(() => {
  return;
  const Fib = {
    [Symbol.iterator]() {
      var n1 = 1,
        n2 = 1;
      console.log('first Iterator');
      return {
        [Symbol.iterator]() {
          console.log('second iterator');
          return this;
        },

        next() {
          var current = n2;
          n2 = n1;
          n1 = n1 + current;
          return { value: current, done: false };
        },
        return(v) {
          console.log('Fibonacci sequence abandoned.');
          return { value: v, done: true };
        },
      };
    },
  };

  for (var v of Fib[Symbol.iterator]()) {
    console.log(v);
    if (v > 10) break;
  }
})();

(() => {
  let tasks = {
    [Symbol.iterator]() {
      var steps = this.actions.slice();

      return {
        [Symbol.iterator]() {
          return this;
        },

        next(...args) {
          if (steps.length > 0) {
            let res = steps.shift()(...args);
            return { value: res, done: false };
          } else {
            return { done: true };
          }
        },

        return(v) {
          steps.length = 0;
          return { value: v, done: true };
        },
      };
    },
    actions: [],
  };

  tasks.actions.push(
    function step1(x) {
      console.log('step 1: ', x);
      return x * 2;
    },
    function step2(x, y) {
      console.log('step 2: ', x, y);
      return x + y * 2;
    },
    function step3(x, y, z) {
      console.log('step 3: ', x, y, z);
      return x * y + z;
    },
  );

  var it = tasks[Symbol.iterator]();

  it.next(10);
  it.next(20, 50);
  it.next(20, 50, 120);

  it.next();
})();

(() => {
  if (!Number.prototype[Symbol.iterator]) {
    Object.defineProperty(Number.prototype, Symbol.iterator, {
      writable: true,
      configurable: true,
      enumerable: false,
      value: function iterator() {
        var i,
          inc,
          done = false,
          top = +this;
        inc = 1 * (top < 0 ? -1 : 1);
        return {
          [Symbol.iterator]() {
            return this;
          },
          next() {
            if (!done) {
              if (i == null) {
                i = 0;
              } else if (top >= 0) {
                i = Math.min(top, i + inc);
              } else {
                i = Math.max(top, i + inc);
              }
              if (i == top) done = true;
              return { value: i, done: false };
            } else {
              return { done: true };
            }
          },
        };
      },
    });
  }

  for (var i of -3) {
    console.log(i);
  }
})();

(() => {
  console.clear();
  var a = [1, 2, 3, 4, 5];
  function foo(x, y, z, w, p) {
    console.log(x + y + z + w + p);
  }

  foo(...a);

  var b = [0, ...a, 6];

  foo(...b);

  var it = a[Symbol.iterator]();

  var [x, y] = it;
  var [z, ...w] = it;

  console.log(it.next());
  console.log(x, y, z, ...w);
})();
