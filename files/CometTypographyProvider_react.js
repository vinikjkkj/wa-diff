__d(
  "CometTypographyProvider.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = r("react")),
      c = (e || (e = o("react"))).createContext,
      d = { fontSize: 15, lineGap: 9 },
      m = c(d);
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.typography,
        a = r != null ? r : d,
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = u.jsx(m, { value: a, children: n })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    ((l.CometTypographyContext = m), (l.CometTypographyProvider = p));
  },
  98,
);
