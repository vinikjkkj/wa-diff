__d(
  "useWAWebMeasureTimeOnScreen",
  ["react", "react-compiler-runtime", "useWAWebOnScreen"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e, t) {
      var n = o("react-compiler-runtime").c(6),
        a = d(null),
        i;
      n[0] !== t
        ? ((i = function () {
            var e = a.current;
            e != null && (t(Date.now() - e), (a.current = null));
          }),
          (n[0] = t),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        s = r("useWAWebOnScreen")(e, l),
        u,
        m;
      (n[2] !== t || n[3] !== s
        ? ((u = function () {
            var e = a.current;
            (s && e == null && (a.current = Date.now()),
              !s && e != null && (t(Date.now() - e), (a.current = null)));
          }),
          (m = [t, s]),
          (n[2] = t),
          (n[3] = s),
          (n[4] = u),
          (n[5] = m))
        : ((u = n[4]), (m = n[5])),
        c(u, m));
    }
    l.default = m;
  },
  98,
);
