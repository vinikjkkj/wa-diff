__d(
  "RTLKeys",
  ["Keys", "Locale"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
      return (e === null && (e = o("Locale").isRTL()), e);
    }
    var u = babelHelpers.objectWithoutPropertiesLoose(r("Keys"), [
        "LEFT",
        "RIGHT",
      ]),
      c = babelHelpers.extends({}, u, {
        REAL_RIGHT: r("Keys").RIGHT,
        REAL_LEFT: r("Keys").LEFT,
        getLeft: function () {
          return s() ? c.REAL_RIGHT : c.REAL_LEFT;
        },
        getRight: function () {
          return s() ? c.REAL_LEFT : c.REAL_RIGHT;
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
