() => {
  var w = 1,
    z = 2;

  function foo(x = w + 1, y = x + 1, z = z + 1) {
    console.log(x, y, z);
  }
  // ReferenceError: z is not defined
  foo();
};

(() => {
  function foo(
    x = (function(v) {
      return v + 11;
    })(31),
  ) {
    console.log(x);
  }

  foo();
})();

(() => {
  var a = ['a', 'b', 'c', 'd', 'e'];

  for (var val, ret, it = a[Symbol.iterator](); (ret = it.next()) && !ret.done; ) {
    val = ret.value;
    console.log(val);
  }
})();
