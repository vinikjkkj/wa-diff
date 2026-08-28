__d(
  "AdsALSurfaceConditional",
  ["cr:8469", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4);
      if (n("cr:8469") != null) {
        var r;
        return (
          t[0] !== e
            ? ((r = s.jsx(
                n("cr:8469"),
                babelHelpers.extends({}, e, { children: e.children }),
              )),
              (t[0] = e),
              (t[1] = r))
            : (r = t[1]),
          r
        );
      }
      var a;
      return (
        t[2] !== e.children
          ? ((a = s.jsx(s.Fragment, { children: e.children })),
            (t[2] = e.children),
            (t[3] = a))
          : (a = t[3]),
        a
      );
    }
    l.default = u;
  },
  98,
);
