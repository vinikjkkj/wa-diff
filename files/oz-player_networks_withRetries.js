__d(
  "oz-player/networks/withRetries",
  [
    "Promise",
    "asyncToGeneratorRuntime",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, o, a) {
      return new (e || (e = n("Promise")))(function (e, i) {
        function l(e) {
          return s.apply(this, arguments);
        }
        function s() {
          return (
            (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (s) {
              try {
                e(yield t());
              } catch (e) {
                if (s > 0) {
                  var u = typeof a == "function" ? a(o - s) : a;
                  r("oz-player/shims/ozSetTimeoutAcrossTransitions")(
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      yield l(s - 1);
                    }),
                    u,
                  );
                } else i(e);
              }
            })),
            s.apply(this, arguments)
          );
        }
        l(o);
      });
    }
    l.default = s;
  },
  98,
);
