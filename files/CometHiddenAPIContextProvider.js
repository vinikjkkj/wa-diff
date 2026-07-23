__d(
  "CometHiddenAPIContextProvider",
  ["CometHiddenAPIContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a = e.hiddenAPIOverride,
        i = u(r("CometHiddenAPIContext")),
        l = a != null ? a : i,
        c;
      return (
        t[0] !== n || t[1] !== l
          ? ((c = s.jsx(r("CometHiddenAPIContext").Provider, {
              value: l,
              children: n,
            })),
            (t[0] = n),
            (t[1] = l),
            (t[2] = c))
          : (c = t[2]),
        c
      );
    }
    l.default = c;
  },
  98,
);
