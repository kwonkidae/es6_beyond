(() => {
  console.clear();
  return;
  function* gen() {
    console.log('1');
    let a = yield;
    console.log('returnvalue', a);
    console.log('2');
  }
  let g = gen();
  console.log(g.next(1));

  function* foo() {
    let arr = [yield 1, yield 2, yield 3];
    console.log(arr, yield 4);
  }

  let f = foo();
  console.log(f.next());
  console.log(f.next());
  console.log(f.next());
  console.log(f.next());
  console.log(f.next());

  function* yield_test() {
    a = 2 + (yield 3);
    console.log(a);
  }
  let a = yield_test();
  a.next();
  // a.next(4);
})();

(() => {
  function* foo() {
    yield* [1, 2, 3];
  }
  let f = foo();
})();

(() => {
  return;
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
  }

  function* bar() {
    var x = yield* foo();
    console.log(x);
  }

  let b = bar();
  console.log(b.next());
  console.log(b.next());
  console.log(b.next());
  console.log(b.next());
})();

(() => {
  return;
  function* foo(x) {
    if (x < 3) {
      x = yield* foo(x + 1);
    }
    return x * 2;
  }

  console.log(foo(1).next());
})();

(() => {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
  }

  for (let v of foo()) {
    console.log(v);
  }
})();

(() => {
  function* foo() {
    var x = yield 1;
    var y = yield 2;
    var z = yield 3;
    console.log(x, y, z);
  }

  let it = foo();
  it.next();
  it.next('foo');
  it.next('bar');
  it.next('baz');
})();
