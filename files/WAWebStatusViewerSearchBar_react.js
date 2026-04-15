__d(
  "WAWebStatusViewerSearchBar.react",
  ["fbt", "WDSSearchBar.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e = ["searchQuery", "setSearchQuery"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(11),
        a,
        i,
        l;
      n[0] !== t
        ? ((i = t.searchQuery),
          (l = t.setSearchQuery),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var u;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "Search")), (n[4] = u))
        : (u = n[4]);
      var d;
      n[5] !== i || n[6] !== l
        ? ((d = c.jsx(r("WDSSearchBar.react"), {
            hintText: u,
            value: i,
            onValueChange: l,
            testid: void 0,
          })),
          (n[5] = i),
          (n[6] = l),
          (n[7] = d))
        : (d = n[7]);
      var m;
      return (
        n[8] !== a || n[9] !== d
          ? ((m = c.jsx("div", babelHelpers.extends({}, a, { children: d }))),
            (n[8] = a),
            (n[9] = d),
            (n[10] = m))
          : (m = n[10]),
        m
      );
    }
    l.default = d;
  },
  226,
);
