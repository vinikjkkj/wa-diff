__d(
  "react-relay/relay-hooks/useIsMountedRef",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-compiler-runtime").c,
      s = e || (e = n("react")),
      u = s.useEffect,
      c = s.useRef;
    function d() {
      var e = l(3),
        t = c(!0),
        n;
      e[0] !== t
        ? ((n = function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1;
              }
            );
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var r;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = []), (e[2] = r))
          : (r = e[2]),
        u(n, r),
        t
      );
    }
    a.exports = d;
  },
  null,
);
