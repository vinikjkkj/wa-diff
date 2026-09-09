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
            var n = { resolved: !1 },
              r = function (t) {
                n = { resolved: !0, value: t };
              },
              o = 0,
              a = t;
            !n.resolved;
          )
            ((a = yield e(r, a, o)), o++);
          return n.value;
        })),
        l.apply(this, arguments)
      );
    }
    i.promiseLoop = e;
  },
  66,
);
