__d(
  "LWIOmniText.react",
  ["cr:2410", "cr:7434", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4);
      if (n("cr:7434") != null) {
        var r;
        return (
          t[0] !== e
            ? ((r = s.jsx(n("cr:7434"), babelHelpers.extends({}, e))),
              (t[0] = e),
              (t[1] = r))
            : (r = t[1]),
          r
        );
      }
      var a;
      return (
        t[2] !== e
          ? ((a = s.jsx(n("cr:2410"), babelHelpers.extends({}, e))),
            (t[2] = e),
            (t[3] = a))
          : (a = t[3]),
        a
      );
    }
    l.default = u;
  },
  98,
);
