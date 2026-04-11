__d(
  "WAPromiseReduce",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
        function* (e, t, n) {
          for (var r = n, o = e.length, a = 0; a < o; a++)
            r = yield t(r, e[a], a);
          return r;
        },
      );
      return function (n, r, o) {
        return e.apply(this, arguments);
      };
    })();
    i.promiseReduce = e;
  },
  66,
);
