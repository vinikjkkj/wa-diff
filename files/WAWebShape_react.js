__d(
  "WAWebShape.react",
  ["WAWebCircleShape.react", "WAWebSquircleShape.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["shape"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.shape,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r("WAWebCircleShape.react");
      switch (n) {
        case "circle":
          a = r("WAWebCircleShape.react");
          break;
        case "squircle":
          a = r("WAWebSquircleShape.react");
          break;
      }
      return u.jsx(a, babelHelpers.extends({}, o));
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
