__d(
  "useAnchorVisibilityObserver",
  ["react", "react-compiler-runtime", "useVisibilityObserver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useImperativeHandle,
      c = s.useRef,
      d = s.useState;
    function m() {
      var e = o("react-compiler-runtime").c(4),
        t = d(!0),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            onIntersection: function (t) {
              var e = t.entry;
              e.intersectionRatio < 0.5 ? a(!1) : a(!0);
            },
            options: { thresholdOverride: "MODERATE" },
          }),
          (e[0] = i))
        : (i = e[0]);
      var l = r("useVisibilityObserver")(i),
        s = c(null),
        m;
      (e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function () {
            return s.current;
          }),
          (e[1] = m))
        : (m = e[1]),
        u(l, m));
      var p;
      return (
        e[2] !== n ? ((p = [s, n]), (e[2] = n), (e[3] = p)) : (p = e[3]),
        p
      );
    }
    l.default = m;
  },
  98,
);
