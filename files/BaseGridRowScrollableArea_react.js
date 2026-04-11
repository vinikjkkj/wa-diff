__d(
  "BaseGridRowScrollableArea.react",
  ["BaseScrollableArea.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["addonEnd", "addonStart", "children", "ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(12),
        a,
        i,
        l,
        s,
        c;
      n[0] !== t
        ? ((a = t.addonEnd),
          (i = t.addonStart),
          (l = t.children),
          (s = t.ref),
          (c = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]), (c = n[5]));
      var d;
      return (
        n[6] !== a || n[7] !== i || n[8] !== l || n[9] !== s || n[10] !== c
          ? ((d = u.jsxs(
              r("BaseScrollableArea.react"),
              babelHelpers.extends({}, c, { ref: s, children: [i, l, a] }),
            )),
            (n[6] = a),
            (n[7] = i),
            (n[8] = l),
            (n[9] = s),
            (n[10] = c),
            (n[11] = d))
          : (d = n[11]),
        d
      );
    }
    l.default = c;
  },
  98,
);
