function foo(strings, ...values) {
  console.log(strings);
  console.log(values);
}

var desc = "awesome";

foo `Everything is ${desc}`;