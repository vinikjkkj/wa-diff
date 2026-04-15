__d(
  "WAWebMediaSearchPdfButton.react",
  [
    "fbt",
    "WAWebMediaPanelHeaderTestIds",
    "WDSIconIcSearch.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.isDisabled,
        a = e.onSearchClick,
        i = n === void 0 ? !1 : n,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = r("WAWebMediaPanelHeaderTestIds").SEARCH_PDF_BUTTON.valueOf()),
          (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Search")), (t[1] = c))
        : (c = t[1]);
      var d;
      return (
        t[2] !== i || t[3] !== a
          ? ((d = u.jsx(r("WDSMenuBarItem.react"), {
              testid: void 0,
              icon: r("WDSIconIcSearch.react"),
              title: c,
              disabled: i,
              onClick: a,
            })),
            (t[2] = i),
            (t[3] = a),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = c;
  },
  226,
);
