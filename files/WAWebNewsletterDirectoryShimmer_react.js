__d(
  "WAWebNewsletterDirectoryShimmer.react",
  [
    "CometHeroHoldTrigger.react",
    "WAWebBaseShimmerComponents.react",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        cellHeight: { minHeight: "xuwdbiy", $$css: !0 },
        container: {
          backgroundColor: "x1280gxy",
          height: "x5yr21d",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function c() {
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: u.cellHeight,
        children: [
          s.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, {
            diameter: 49,
            xstyle: o("WAWebUISpacing").uiMargin.end15,
          }),
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 12,
                width: 139,
                xstyle: o("WAWebUISpacing").uiMargin.bottom12,
              }),
              s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 10,
                width: 75,
              }),
            ],
          }),
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.count,
        n = e.description,
        a = n === void 0 ? "WAWebNewsletterDirectoryShimmer" : n;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("CometHeroHoldTrigger.react"), { description: a, hold: !0 }),
          s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.container,
            children: Array.from({ length: t }, function (e, t) {
              return s.jsx(
                o("WAWebFlex.react").FlexColumn,
                {
                  align: "start",
                  xstyle: [
                    o("WAWebUISpacing").uiMargin.horiz13,
                    o("WAWebUISpacing").uiMargin.vert12,
                  ],
                  children: s.jsx(c, {}),
                },
                t,
              );
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
