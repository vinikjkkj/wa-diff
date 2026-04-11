__d(
  "WAWebErrorBoundaryInstrumented.react",
  ["WAWebErrorBoundary.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["children"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(8),
        r;
      if (n[0] !== t) {
        var a = t.ref,
          i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((r = i), (n[0] = t), (n[1] = r));
      } else r = n[1];
      var l, u;
      if (n[2] !== r) {
        var d = r;
        ((l = d.children),
          (u = babelHelpers.objectWithoutPropertiesLoose(d, s)),
          (n[2] = r),
          (n[3] = l),
          (n[4] = u));
      } else ((l = n[3]), (u = n[4]));
      var m;
      return (
        n[5] !== l || n[6] !== u
          ? ((m = c.jsx(
              o("WAWebErrorBoundary.react").ErrorBoundary,
              babelHelpers.extends({}, u, { children: l }),
            )),
            (n[5] = l),
            (n[6] = u),
            (n[7] = m))
          : (m = n[7]),
        m
      );
    }
    l.default = d;
  },
  98,
);
