__d(
  "WAWebUseRollerCounter",
  ["react", "react-compiler-runtime", "useWAWebDebouncedCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useRef,
      c = s.useState,
      d = 50;
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = c(e),
        a = n[0],
        i = n[1],
        l = c(null),
        s = l[0],
        m = l[1],
        p = u(null);
      p.current == null && (p.current = a);
      var _;
      t[0] !== e
        ? ((_ = function () {
            (p.current != null && p.current !== e && (i(e), m(p.current)),
              (p.current = null));
          }),
          (t[0] = e),
          (t[1] = _))
        : (_ = t[1]);
      var f = r("useWAWebDebouncedCallback")(_, d);
      e != null && f();
      var g;
      return (
        t[2] !== a || t[3] !== s
          ? ((g = { currentValueProp: a, previousValueProp: s }),
            (t[2] = a),
            (t[3] = s),
            (t[4] = g))
          : (g = t[4]),
        g
      );
    }
    l.useRollerCounter = m;
  },
  98,
);
