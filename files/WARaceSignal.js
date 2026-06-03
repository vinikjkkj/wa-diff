__d(
  "WARaceSignal",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return l.apply(this, arguments);
    }
    function l() {
      return (
        (l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = new AbortController();
          if (
            e.some(function (e) {
              return e.aborted;
            })
          )
            r.abort();
          else {
            n = function () {
              for (var t of e) t.removeEventListener("abort", o);
              n = null;
            };
            var o = function () {
              (n == null || n(), r.abort());
            };
            for (var a of e) a.addEventListener("abort", o);
          }
          try {
            return yield t(r.signal);
          } finally {
            n == null || n();
          }
        })),
        l.apply(this, arguments)
      );
    }
    i.default = e;
  },
  66,
);
