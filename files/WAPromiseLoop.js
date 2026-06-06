__d(
  "WAPromiseLoop",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return l.apply(this, arguments);
    }
    function l() {
      return (
        (l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          for (
            var n = !1,
              r,
              o = function (t) {
                ((n = !0), (r = t));
              },
              a = 0,
              i = t;
            !n;
          )
            ((i = yield e(o, i, a)), a++);
          return r;
        })),
        l.apply(this, arguments)
      );
    }
    i.promiseLoop = e;
  },
  66,
);
