__d(
  "WAWebMediaHubListHeader.react",
  ["WAWebFlex.react", "WAWebMediaHubContextProvider", "WDSText.react", "react"],
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
      var t = e.firstColumnLabel,
        n = e.secondColumnLabel,
        a = e.thirdColumnLabel,
        i = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        l = i.isSelectMode;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 40,
        xstyle: u.headerRow,
        children: [
          s.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 8,
            grow: 3,
            basis: 0,
            children: [
              l &&
                s.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: u.selectMode,
                  marginEnd: 8,
                }),
              s.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDefault",
                children: t,
              }),
            ],
          }),
          s.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 2,
            basis: 0,
            children: s.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDefault",
              children: n,
            }),
          }),
          s.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 2,
            basis: 0,
            children: s.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDefault",
              children: a,
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
