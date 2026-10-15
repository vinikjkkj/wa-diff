__d(
  "WAWebMediaEditorToolbarFilter",
  [
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarFilterOption.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.filters,
        a = e.imageUrl,
        i = e.onFilterChange,
        l = e.onHover,
        u = e.selectedFilter,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            o("WDSMargins.stylex").wdsMargins.marginHor8,
          ]),
          (t[0] = c))
        : (c = t[0]);
      var d;
      if (t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== l || t[5] !== u) {
        var m;
        (t[7] !== a || t[8] !== i || t[9] !== l || t[10] !== u
          ? ((m = function (t, n) {
              return s.jsx(
                r("WAWebMediaEditorToolbarFilterOption.react"),
                {
                  filter: t,
                  imageUrl: a,
                  onFilterChange: i,
                  selected: t === u,
                  onHover: l,
                },
                n,
              );
            }),
            (t[7] = a),
            (t[8] = i),
            (t[9] = l),
            (t[10] = u),
            (t[11] = m))
          : (m = t[11]),
          (d = n.map(m)),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = u),
          (t[6] = d));
      } else d = t[6];
      var p;
      return (
        t[12] !== d
          ? ((p = s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: c,
              children: d,
            })),
            (t[12] = d),
            (t[13] = p))
          : (p = t[13]),
        p
      );
    }
    l.default = u;
  },
  98,
);
