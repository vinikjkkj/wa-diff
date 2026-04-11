__d(
  "CometScrollableAreaImpl.react",
  ["BaseScrollableArea.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["horizontal", "ref", "vertical"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(10),
        a,
        i,
        l,
        s;
      n[0] !== t
        ? ((l = t.horizontal),
          (i = t.ref),
          (s = t.vertical),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]));
      var c = l === void 0 ? !0 : l,
        d = s === void 0 ? !0 : s,
        m;
      return (
        n[5] !== c || n[6] !== a || n[7] !== i || n[8] !== d
          ? ((m = u.jsx(
              r("BaseScrollableArea.react"),
              babelHelpers.extends({}, a, {
                horizontal: c,
                ref: i,
                vertical: d,
              }),
            )),
            (n[5] = c),
            (n[6] = a),
            (n[7] = i),
            (n[8] = d),
            (n[9] = m))
          : (m = n[9]),
        m
      );
    }
    l.default = c;
  },
  98,
);
