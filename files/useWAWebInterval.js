__d(
  "useWAWebInterval",
  ["react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e, t, n) {
      t === void 0 && (t = 0);
      var o = n != null ? n : {},
        a = o.immediate,
        i = a === void 0 ? !1 : a,
        l = r("useWAWebStableCallback")(e),
        s = d(),
        m = u(function () {
          s.current && self.clearInterval(s.current);
        }, []),
        p = u(
          function () {
            (m(), (s.current = self.setInterval(l, t)));
          },
          [m, t, l],
        );
      return (
        c(
          function () {
            return (i && p(), m);
          },
          [i, p, m],
        ),
        [p, m]
      );
    }
    l.default = m;
  },
  98,
);
