(() => {
  console.clear();
  function* gen() {
    console.log('1');
    let a = yield;
    console.log('returnvalue', a);
    console.log('2');
  }
  let g = gen();
  console.log(g.next(1));
  console.log(g.next(4));
  // console.log(g.next());
})();
