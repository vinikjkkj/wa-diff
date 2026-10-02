__d(
  "WAPromiseMap",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var o = yield t;
          return (e || (e = n("Promise"))).all(
            o.map(function (t, o) {
              return (e || (e = n("Promise"))).resolve(r(t, o));
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    i.promiseMap = l;
  },
  66,
);
