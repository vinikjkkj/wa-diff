__d(
  "WAPromiseEach",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
        for (var n = [], r = 0; r < e.length; r++) n.push(yield t(e[r], r));
        return n;
      });
      return function (n, r) {
        return e.apply(this, arguments);
      };
    })();
    i.promiseEach = e;
  },
  66,
);
