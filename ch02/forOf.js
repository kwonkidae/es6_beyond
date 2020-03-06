(() => {
  var a = ['a', 'b', 'c', 'd', 'e'];

  for (var idx in a) {
    process.stdout.write(`${idx} `);
  }
  console.log();
  for (let val of a) {
    process.stdout.write(`${val} `);
  }
  console.log();

  for (var val, ret, it = a[Symbol.iterator](); (ret = it.next()) && !ret.done; ) {
    val = ret.value;
    console.log(val);
  }

  var o = {};

  for (o.a of [1, 2, 3]) {
    console.log(o.a);
  }

  console.log(o);
})();
