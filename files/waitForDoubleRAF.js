__d(
  "waitForDoubleRAF",
  ["Promise", "asyncToGeneratorRuntime", "requestAnimationFrame"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return new (e || (e = n("Promise")))(function (e, t) {
            r("requestAnimationFrame")(function () {
              r("requestAnimationFrame")(function () {
                e();
              });
            });
          });
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
