__d(
  "WAWebMediaEditorToolbarFilter",
  [
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarFilterOption.react",
    "WDSMargins.stylex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.filters,
        n = e.imageUrl,
        a = e.onFilterChange,
        i = e.onHover,
        l = e.selectedFilter;
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: [
          o("WDSMargins.stylex").wdsMargins.marginVer0,
          o("WDSMargins.stylex").wdsMargins.marginHor8,
        ],
        children: t.map(function (e, t) {
          return s.jsx(
            r("WAWebMediaEditorToolbarFilterOption.react"),
            {
              filter: e,
              imageUrl: n,
              onFilterChange: a,
              selected: e === l,
              onHover: i,
            },
            t,
          );
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
