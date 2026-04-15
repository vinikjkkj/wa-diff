__d(
  "WAWebActionMenuItem.react",
  ["WAWebCellMenuItem.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(6),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i;
      return (
        n[3] !== r || n[4] !== a
          ? ((i = u.jsx(
              o("WAWebCellMenuItem.react").CellV2MenuItem,
              babelHelpers.extends({ ref: a }, r, { type: "action" }),
            )),
            (n[3] = r),
            (n[4] = a),
            (n[5] = i))
          : (i = n[5]),
        i
      );
    }
    l.ActionMenuItem = c;
  },
  98,
);
