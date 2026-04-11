__d(
  "useWAWebGalaxyFlowIframeReadyTimeout",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = 12e4;
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = c(!1),
        r = c(null),
        a = e.timeoutMs,
        i = e.onTimeout,
        l = a === void 0 ? d : a,
        s,
        m;
      (t[0] !== i || t[1] !== l
        ? ((s = function () {
            return (
              (r.current = window.setTimeout(function () {
                n.current || i();
              }, l)),
              function () {
                r.current != null && window.clearTimeout(r.current);
              }
            );
          }),
          (m = [l, i]),
          (t[0] = i),
          (t[1] = l),
          (t[2] = s),
          (t[3] = m))
        : ((s = t[2]), (m = t[3])),
        u(s, m));
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function () {
            n.current ||
              ((n.current = !0),
              r.current != null &&
                (window.clearTimeout(r.current), (r.current = null)));
          }),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f;
      if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
        var g = function () {
          return n.current;
        };
        ((f = { markIframeReady: _, isReady: g }), (t[5] = f));
      } else f = t[5];
      return f;
    }
    l.default = m;
  },
  98,
);
