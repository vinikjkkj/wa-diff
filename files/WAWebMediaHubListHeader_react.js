__d(
  "WAWebMediaHubListHeader.react",
  [
    "WAWebFlex.react",
    "WAWebMediaHubContextProvider",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        headerRow: {
          height: "xn3w4p2",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          borderBottomColor: "x120ee7l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "x1co6499",
          position: "x7wzq59",
          top: "x13vifvy",
          backgroundColor: "x16w0wmm",
          zIndex: "x12xzxwr",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        selectMode: { width: "xvy4d1p", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.firstColumnLabel,
        a = e.secondColumnLabel,
        i = e.thirdColumnLabel,
        l = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        c = l.isSelectMode,
        d;
      t[0] !== c
        ? ((d =
            c &&
            s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: u.selectMode,
              marginEnd: 8,
            })),
          (t[0] = c),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== n
        ? ((m = s.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentDefault",
            children: n,
          })),
          (t[2] = n),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== d || t[5] !== m
        ? ((p = s.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 8,
            grow: 3,
            basis: 0,
            children: [d, m],
          })),
          (t[4] = d),
          (t[5] = m),
          (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] !== a
        ? ((_ = s.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 2,
            basis: 0,
            children: s.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDefault",
              children: a,
            }),
          })),
          (t[7] = a),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      t[9] !== i
        ? ((f = s.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 2,
            basis: 0,
            children: s.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDefault",
              children: i,
            }),
          })),
          (t[9] = i),
          (t[10] = f))
        : (f = t[10]);
      var g;
      return (
        t[11] !== p || t[12] !== _ || t[13] !== f
          ? ((g = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 40,
              xstyle: u.headerRow,
              children: [p, _, f],
            })),
            (t[11] = p),
            (t[12] = _),
            (t[13] = f),
            (t[14] = g))
          : (g = t[14]),
        g
      );
    }
    l.default = c;
  },
  98,
);
