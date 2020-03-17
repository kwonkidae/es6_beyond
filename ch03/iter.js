(() => {
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
