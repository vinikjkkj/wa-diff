__d(
  "useWAWebMeasure",
  [
    "WAWebPREGatingUtils",
    "WAWebResizeObserver",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useLayoutEffect,
      c = s.useState,
      d = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      };
    function m() {
      var e = o("react-compiler-runtime").c(6),
        t = c(null),
        n = t[0],
        a = t[1],
        i = c(d),
        l = i[0],
        s = i[1],
        m = r("useWAWebDebouncedCallback")(s, 100),
        p,
        _;
      (e[0] !== n || e[1] !== m
        ? ((p = function () {
            if (n)
              return o("WAWebResizeObserver").observe(
                n,
                o("WAWebPREGatingUtils").isPREResizeEnabled() ? m : s,
              );
          }),
          (_ = [n, m]),
          (e[0] = n),
          (e[1] = m),
          (e[2] = p),
          (e[3] = _))
        : ((p = e[2]), (_ = e[3])),
        u(p, _));
      var f;
      return (
        e[4] !== l ? ((f = [a, l]), (e[4] = l), (e[5] = f)) : (f = e[5]),
        f
      );
    }
    l.default = m;
  },
  98,
);
