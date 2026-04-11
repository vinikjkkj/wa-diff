__d(
  "useTimeoutStateSinceFirstMounting.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = d(e <= 0),
        r = n[0],
        a = n[1],
        i = c(e),
        l = c(!1),
        s,
        m;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = function () {
              var e = window.setTimeout(function () {
                l.current || ((l.current = !0), a(!0));
              }, i.current);
              return function () {
                window.clearTimeout(e);
              };
            }),
            (m = []),
            (t[0] = s),
            (t[1] = m))
          : ((s = t[0]), (m = t[1])),
        u(s, m),
        r
      );
    }
    l.default = m;
  },
  98,
);
