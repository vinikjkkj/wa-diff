__d(
  "useWebBloksDrawableNode",
  ["WebBloksComponentContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = o("WebBloksComponentContext").useWebBloksContext(),
        r = n.objectSet;
      if (e != null) {
        var a;
        t[0] !== e.styleId || t[1] !== r
          ? ((a = r.getNullableComponentForName(e.styleId)),
            (t[0] = e.styleId),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]);
        var i = a,
          l;
        return (
          t[3] !== i || t[4] !== e
            ? ((l = i != null ? s.jsx(i, { node: e }) : null),
              (t[3] = i),
              (t[4] = e),
              (t[5] = l))
            : (l = t[5]),
          l
        );
      }
      return null;
    }
    l.default = u;
  },
  98,
);
