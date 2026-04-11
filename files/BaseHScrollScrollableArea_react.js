__d(
  "BaseHScrollScrollableArea.react",
  ["BaseScrollableArea.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["addonEnd", "addonStart"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(8),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.addonEnd),
          (i = t.addonStart),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s;
      return (
        n[4] !== a || n[5] !== i || n[6] !== l
          ? ((s = u.jsxs(
              r("BaseScrollableArea.react"),
              babelHelpers.extends({}, l, { children: [i, l.children, a] }),
            )),
            (n[4] = a),
            (n[5] = i),
            (n[6] = l),
            (n[7] = s))
          : (s = n[7]),
        s
      );
    }
    l.default = c;
  },
  98,
);
