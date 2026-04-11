__d(
  "WAWebBaseVideoNewsletterContextProvider",
  ["WAWebNewsletterVideoPlayLoggingContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        a = d(1),
        i = a[0],
        l = a[1],
        u;
      t[0] !== i
        ? ((u = { finishCount: i, setFinishCount: l }), (t[0] = i), (t[1] = u))
        : (u = t[1]);
      var c = u,
        m;
      return (
        t[2] !== n || t[3] !== c
          ? ((m = s.jsx(r("WAWebNewsletterVideoPlayLoggingContext").Provider, {
              value: c,
              children: n,
            })),
            (t[2] = n),
            (t[3] = c),
            (t[4] = m))
          : (m = t[4]),
        m
      );
    }
    l.default = m;
  },
  98,
);
