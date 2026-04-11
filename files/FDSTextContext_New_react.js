__d(
  "FDSTextContext_New.react",
  ["FDSTextContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        r = e.color,
        a = e.type,
        i = r != null ? r : "primary",
        l;
      t[0] !== i || t[1] !== a
        ? ((l = { color: i, type: a }), (t[0] = i), (t[1] = a), (t[2] = l))
        : (l = t[2]);
      var u = l,
        c;
      t[3] !== n || t[4] !== u
        ? ((c = typeof n == "function" ? n(u) : n),
          (t[3] = n),
          (t[4] = u),
          (t[5] = c))
        : (c = t[5]);
      var d;
      return (
        t[6] !== u || t[7] !== c
          ? ((d = s.jsx(o("FDSTextContext").FDSTextContext.Provider, {
              value: u,
              children: c,
            })),
            (t[6] = u),
            (t[7] = c),
            (t[8] = d))
          : (d = t[8]),
        d
      );
    }
    l.default = c;
  },
  98,
);
