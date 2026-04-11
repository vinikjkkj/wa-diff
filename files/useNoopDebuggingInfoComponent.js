__d(
  "useNoopDebuggingInfoComponent",
  ["react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {};
    function s() {
      var t = o("react-compiler-runtime").c(1),
        n;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = [null, e]), (t[0] = n))
          : (n = t[0]),
        n
      );
    }
    l.default = s;
  },
  98,
);
