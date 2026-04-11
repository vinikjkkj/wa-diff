__d(
  "useWebBloksAnalytics",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r = c(null),
        a = e.analytics,
        i,
        l;
      return (
        n[0] !== a || n[1] !== t
          ? ((i = function () {
              var e = a == null ? void 0 : a.subscribe(t),
                n = a == null ? void 0 : a.subscribeFrameRate();
              return function () {
                (n == null || n(), e == null || e());
              };
            }),
            (l = [a, t, r]),
            (n[0] = a),
            (n[1] = t),
            (n[2] = i),
            (n[3] = l))
          : ((i = n[2]), (l = n[3])),
        u(i, l),
        r
      );
    }
    l.default = d;
  },
  98,
);
