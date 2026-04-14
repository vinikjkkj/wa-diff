__d(
  "WAWebStatusViewerSearchBar.react",
  ["fbt", "WDSSearchBar.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e = ["searchQuery", "setSearchQuery"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.searchQuery,
        o = t.setSearchQuery,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return c.jsx(
        "div",
        babelHelpers.extends({}, a, {
          children: c.jsx(r("WDSSearchBar.react"), {
            hintText: s._(/*BTDS*/ "Search"),
            value: n,
            onValueChange: o,
            testid: void 0,
          }),
        }),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
