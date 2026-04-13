__d(
  "WAWebMediaEditorToolbarFilter",
  [
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarFilterOption.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(14),
        a = t.filters,
        i = t.imageUrl,
        l = t.onFilterChange,
        s = t.onHover,
        c = t.selectedFilter,
        d;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (e || (e = r("stylex")))(
            o("WAWebUISpacing").uiMargin.vert0,
            o("WAWebUISpacing").uiMargin.horiz8,
          )),
          (n[0] = d))
        : (d = n[0]);
      var m;
      if (n[1] !== a || n[2] !== i || n[3] !== l || n[4] !== s || n[5] !== c) {
        var p;
        (n[7] !== i || n[8] !== l || n[9] !== s || n[10] !== c
          ? ((p = function (t, n) {
              return u.jsx(
                r("WAWebMediaEditorToolbarFilterOption.react"),
                {
                  filter: t,
                  imageUrl: i,
                  onFilterChange: l,
                  selected: t === c,
                  onHover: s,
                },
                n,
              );
            }),
            (n[7] = i),
            (n[8] = l),
            (n[9] = s),
            (n[10] = c),
            (n[11] = p))
          : (p = n[11]),
          (m = a.map(p)),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c),
          (n[6] = m));
      } else m = n[6];
      var _;
      return (
        n[12] !== m
          ? ((_ = u.jsx(o("WAWebFlex.react").FlexRow, {
              className: d,
              children: m,
            })),
            (n[12] = m),
            (n[13] = _))
          : (_ = n[13]),
        _
      );
    }
    l.default = c;
  },
  98,
);
