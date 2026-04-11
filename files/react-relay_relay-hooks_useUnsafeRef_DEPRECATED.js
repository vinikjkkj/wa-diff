__d(
  "react-relay/relay-hooks/useUnsafeRef_DEPRECATED",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-compiler-runtime").c,
      s = e || (e = n("react")),
      u = s.useMemo;
    function c(e) {
      var t = l(3),
        n;
      t[0] !== e
        ? ((n = function () {
            return { current: e };
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = []), (t[2] = r))
          : (r = t[2]),
        u(n, r)
      );
    }
    a.exports = c;
  },
  null,
);
