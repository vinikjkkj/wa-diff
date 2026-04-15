__d(
  "WAWebShape.react",
  [
    "WAWebCircleShape.react",
    "WAWebSquircleShape.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["shape"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(6),
        a,
        i;
      n[0] !== t
        ? ((i = t.shape),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = r("WAWebCircleShape.react");
      e: switch (i) {
        case "circle": {
          l = r("WAWebCircleShape.react");
          break e;
        }
        case "squircle":
          l = r("WAWebSquircleShape.react");
      }
      var s;
      return (
        n[3] !== l || n[4] !== a
          ? ((s = u.jsx(l, babelHelpers.extends({}, a))),
            (n[3] = l),
            (n[4] = a),
            (n[5] = s))
          : (s = n[5]),
        s
      );
    }
    l.default = c;
  },
  98,
);
