__d(
  "BaseGrid.react",
  [
    "BaseGridFocusTable.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e["aria-describedby"],
        r = e["aria-multiselectable"],
        a = e.children,
        i = e.wrapNavigation,
        l = e.xstyle,
        u = e["aria-label"],
        d = e["aria-labelledby"],
        m = i === void 0 ? "none" : i,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = ["row", "both"]), (t[0] = p))
        : (p = t[0]);
      var _ = p.includes(m),
        f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["column", "both"]), (t[1] = f))
        : (f = t[1]);
      var g = f.includes(m),
        h;
      t[2] !== n ||
      t[3] !== u ||
      t[4] !== d ||
      t[5] !== r ||
      t[6] !== a ||
      t[7] !== l
        ? ((h = s.jsx(o("react-strict-dom").html.div, {
            "aria-describedby": n,
            "aria-label": u,
            "aria-labelledby": d,
            "aria-multiselectable": r,
            role: "grid",
            style: l,
            children: a,
          })),
          (t[2] = n),
          (t[3] = u),
          (t[4] = d),
          (t[5] = r),
          (t[6] = a),
          (t[7] = l),
          (t[8] = h))
        : (h = t[8]);
      var y;
      return (
        t[9] !== _ || t[10] !== g || t[11] !== h
          ? ((y = s.jsx(o("BaseGridFocusTable.react").BaseGridFocusTable, {
              tabScopeQuery: o("focusScopeQueries").tabbableScopeQuery,
              withinCellTabScopeQuery: c,
              wrapXToNextLine: _,
              wrapYToNextColumn: g,
              children: h,
            })),
            (t[9] = _),
            (t[10] = g),
            (t[11] = h),
            (t[12] = y))
          : (y = t[12]),
        y
      );
    }
    var c = function (t, n) {
      return n.role === "gridcell" || n.role === "row"
        ? !1
        : o("focusScopeQueries").tabbableScopeQuery(t, n);
    };
    l.default = u;
  },
  98,
);
