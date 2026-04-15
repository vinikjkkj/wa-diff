__d(
  "WAWebBizAdCreationTargetingModalSelectableRow.react",
  [
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcEdit.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(1),
        n;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = s.jsx(r("WDSIconIcEdit.react"), {
              colorName: "contentDeemphasized",
              height: 20,
              width: 20,
            })),
            (t[0] = n))
          : (n = t[0]),
        n
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.ariaLabel,
        a = e.onEditClick,
        i = e.subtitle,
        l = e.title,
        c = e.xstyle,
        d;
      t[0] !== l
        ? ((d = s.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            children: l,
          })),
          (t[0] = l),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== i
        ? ((m = s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: i,
          })),
          (t[2] = i),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== d || t[5] !== m
        ? ((p = s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [d, m] })),
          (t[4] = d),
          (t[5] = m),
          (t[6] = p))
        : (p = t[6]);
      var _ = n ? String(n) : void 0,
        f;
      t[7] !== a || t[8] !== _
        ? ((f = s.jsx(r("WDSButton.react"), {
            Icon: u,
            variant: "borderless",
            size: "medium",
            "aria-label": _,
            onPress: a,
          })),
          (t[7] = a),
          (t[8] = _),
          (t[9] = f))
        : (f = t[9]);
      var g;
      return (
        t[10] !== p || t[11] !== f || t[12] !== c
          ? ((g = s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: c,
              align: "center",
              justify: "all",
              children: [p, f],
            })),
            (t[10] = p),
            (t[11] = f),
            (t[12] = c),
            (t[13] = g))
          : (g = t[13]),
        g
      );
    }
    l.default = c;
  },
  98,
);
