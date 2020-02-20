(() => {
  function runSomething(o) {
    var x = Math.random(),
      y = Math.random();

    return o.something(x, y);
  }

  const value = runSomething({
    something: function something(x, y) {
      if (x > y) {
        return something(y, x);
      }
      return y - x;
    }
  });
  console.log(value);

  var o = {
    __id: 10,
    get id() {
      return this.__id++;
    },
    set id(v) {
      this.__id = v;
    }
  };

  console.log(o.id);
  console.log(o.id);
  o.id = 20;
  console.log(o.id);

  var c = {
    [Symbol.toStringTag]: "really coll thing"
  };

  var o1 = {
    foo() {
      console.log("o1:foo");
    }
  };

  var o2 = {
    foo() {
      super.foo();
      console.log("o2:foo");
    }
  };

  Object.setPrototypeOf(o2, o1);

  o2.foo();

  console.log(c.toString());
})();