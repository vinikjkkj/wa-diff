__d(
  "CometTypographyProvider.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.createContext,
      c = { fontSize: 15, lineGap: 9 },
      d = u(c);
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.typography,
        a = r != null ? r : c,
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = s.jsx(d, { value: a, children: n })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    ((l.CometTypographyContext = d), (l.CometTypographyProvider = m));
  },
  98,
);
