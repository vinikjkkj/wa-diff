__d(
  "FDSMenuItemAuxItemIcon",
  [
    "FDSIcon.react",
    "MWXIconStrict.react",
    "MWXSvgIcon",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.color,
        a = e.icon;
      if (a instanceof o("MWXSvgIcon").MWXSvgIcon) {
        var i;
        return (
          t[0] !== n || t[1] !== a
            ? ((i = s.jsx(r("MWXIconStrict.react"), {
                color: n,
                icon: a,
                size: 20,
              })),
              (t[0] = n),
              (t[1] = a),
              (t[2] = i))
            : (i = t[2]),
          i
        );
      }
      var l;
      return (
        t[3] !== n || t[4] !== a
          ? ((l = s.jsx(r("FDSIcon.react"), { color: n, icon: a, size: 20 })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    l.default = u;
  },
  98,
);
