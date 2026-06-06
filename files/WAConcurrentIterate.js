__d(
  "WAConcurrentIterate",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t, r, o) {
      for (
        var a = [],
          i = [],
          l = 0,
          s = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              for (; l < t; ) {
                var e = l;
                (l++, (i[e] = yield r(e)));
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          u = Math.min(t, o),
          c = 0;
        c < u;
        c++
      )
        a.push(s());
      return (e || (e = n("Promise"))).all(a).then(function () {
        return i;
      });
    }
    i.concurrentIterate = l;
  },
  66,
);
