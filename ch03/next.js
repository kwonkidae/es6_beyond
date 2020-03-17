const _l = console.log;
(() => {
  let arr = [1, 2, 3];

  var it = arr[Symbol.iterator]();

  console.dir(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());

  let greeting = 'hello world';

  var it = greeting[Symbol.iterator]();

  _l(it.next());
})();
