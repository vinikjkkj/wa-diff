__d(
  "WAWebActionMenuItem.react",
  ["WAWebCellMenuItem.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return u.jsx(
        o("WAWebCellMenuItem.react").CellV2MenuItem,
        babelHelpers.extends({ ref: n }, r, { type: "action" }),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.ActionMenuItem = c));
  },
  98,
);
