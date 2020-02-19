(() => {
  function f6({
    x = 10
  } = {}, {
    y
  } = {
    y: 10
  }) {
    console.log(x, y);
  }
  f6();
  f6(undefined, undefined);
  f6({}, undefined);

  f6({}, {});
  f6(undefined, {});

  f6({
    x: 2
  }, {
    y: 3
  });
})();

(() => {
  var defaults = {
    options: {
      remove: true,
      enable: false,
      instance: {}
    },
    log: {
      warn: true,
      error: true
    }
  };

  var config = {
    options: {
      remove: false,
      instance: null
    }
  };

  {
    let {
      options: {
        remove = defaults.options.remove,
        enable = defaults.options.enable,
        instance = defaults.options.instance
      } = {},
      log: {
        warn = defaults.log.warn,
        error = defaults.log.error
      } = {}
    } = config;
    config = {
      options: {
        remove,
        enable,
        instance
      },
      log: {
        warn,
        error
      }
    };
  }



  console.log(config);
})();