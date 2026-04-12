__d(
  "WAWebMediaEditorToolbarFilter",
  [
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarFilterOption.react",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.filters,
        a = t.imageUrl,
        i = t.onFilterChange,
        l = t.onHover,
        s = t.selectedFilter;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        className: (e || (e = r("stylex")))(
          o("WAWebUISpacing").uiMargin.vert0,
          o("WAWebUISpacing").uiMargin.horiz8,
        ),
        children: n.map(function (e, t) {
          return u.jsx(
            r("WAWebMediaEditorToolbarFilterOption.react"),
            {
              filter: e,
              imageUrl: a,
              onFilterChange: i,
              selected: e === s,
              onHover: l,
            },
            t,
          );
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
