(() => {
  return;
  function* foo() {
    try {
      yield 1;
      yield 2;
      yield 3;
    } finally {
      console.log('cleanup!');
    }
  }

  for (var v of foo()) {
    console.log(v);
  }

  var it = foo();
  it.next();
  console.log(it.return(42));
})();

(() => {
  return;
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
  }

  var it = foo();

  console.log(it.next());

  try {
    it.throw('Opp');
  } catch (err) {
    console.log(err);
  }

  console.log(it.next());
})();

(() => {
  return;
  function* foo() {
    try {
      yield 1;
    } catch (err) {
      console.log(err);
    }
    yield 2;

    throw 'Hello!';
  }

  var it = foo();

  it.next();

  try {
    it.throw('Hi!');
    it.next();
    console.log('never gets here');
  } catch (err) {
    console.log(err);
  }
})();

(() => {
  function* foo() {
    try {
      yield 1;
      console.log('11111');
    } catch (err) {
      console.log(err);
    }
    yield 2;
    throw 'foo: e2';
  }

  function* bar() {
    try {
      yield* foo();
      console.log('never get here');
    } catch (err) {
      console.log(err);
    }
  }

  var it = bar();
  try {
    console.log(it.next());
    it.throw('e1');
    console.log(it.next());
  } catch (err) {
    console.log('never get here');
  }
})();
