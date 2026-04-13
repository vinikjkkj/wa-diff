__d(
  "WAWebUseRollerCounter",
  ["react", "react-compiler-runtime", "useWAWebDebouncedCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useRef,
      c = s.useState,
      d = 50;
    function m(e, t) {
      var n = o("react-compiler-runtime").c(5),
        a = c(t),
        i = a[0],
        l = a[1],
        s = c(null),
        m = s[0],
        p = s[1],
        _ = u(null);
      _.current == null && (_.current = e);
      var f;
      n[0] !== t
        ? ((f = function () {
            (_.current != null && _.current !== t && (l(t), p(_.current)),
              (_.current = null));
          }),
          (n[0] = t),
          (n[1] = f))
        : (f = n[1]);
      var g = r("useWAWebDebouncedCallback")(f, d);
      t != null && g();
      var h;
      return (
        n[2] !== i || n[3] !== m
          ? ((h = { currentValueProp: i, previousValueProp: m }),
            (n[2] = i),
            (n[3] = m),
            (n[4] = h))
          : (h = n[4]),
        h
      );
    }
    l.useRollerCounter = m;
  },
  98,
);
