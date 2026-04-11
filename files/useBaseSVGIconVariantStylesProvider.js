__d(
  "useBaseSVGIconVariantStylesProvider",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(2),
        a = t.xstyleConfig.color,
        i;
      return (
        n[0] !== a
          ? ((i = function (n) {
              return n((e || (e = r("stylex"))).props(a));
            }),
            (n[0] = a),
            (n[1] = i))
          : (i = n[1]),
        i
      );
    }
    l.default = c;
  },
  98,
);
