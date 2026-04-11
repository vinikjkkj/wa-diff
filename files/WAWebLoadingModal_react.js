__d(
  "WAWebLoadingModal.react",
  [
    "WAWebDrawerHeader.react",
    "WAWebLoadingDrawer.react",
    "WAWebModal.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["theme", "headerType"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(10),
        a,
        i,
        l;
      n[0] !== t
        ? ((l = t.theme),
          (i = t.headerType),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s =
          i === void 0
            ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP
            : i,
        c = l != null ? l : o("WAWebModal.react").ModalTheme.Tower,
        d;
      n[4] !== s || n[5] !== a
        ? ((d = u.jsx(
            r("WAWebLoadingDrawer.react"),
            babelHelpers.extends({ headerType: s }, a),
          )),
          (n[4] = s),
          (n[5] = a),
          (n[6] = d))
        : (d = n[6]);
      var m;
      return (
        n[7] !== c || n[8] !== d
          ? ((m = u.jsx(o("WAWebModal.react").Modal, { type: c, children: d })),
            (n[7] = c),
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
