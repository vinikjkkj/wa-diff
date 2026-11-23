__d(
  "WAWebNewsletterAdminInsightsShimmerUtils",
  [
    "WAWebBaseShimmerComponents.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WDSPaddings.stylex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        paddingInline30: {
          paddingInlineStart: "x162tt16",
          paddingInlineEnd: "x5zjp28",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      c = { shimmerSection: { width: "xh8yej3", $$css: !0 } };
    function d(e) {
      var t = e.children;
      return s.jsx(r("WAWebDrawerSection.react"), {
        xstyle: [
          u.paddingInline30,
          o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
          o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
        ],
        animation: !1,
        children: t,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return s.jsxs(d, {
        children: [
          s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 20,
            width: 120,
          }),
          s.jsx(o("WAWebFlex.react").FlexColumn, {
            marginTop: 20,
            align: "center",
            justify: "center",
            gap: 24,
            xstyle: c.shimmerSection,
            children: o("WAWebBaseShimmerComponents.react").times(p, 5),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: c.shimmerSection,
        gap: 8,
        children: [
          s.jsx(f, {}),
          s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 8,
            width: "100%",
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s.jsx(d, { children: s.jsx(f, {}) });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.width,
        n = t === void 0 ? 56 : t;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        justify: "all",
        xstyle: c.shimmerSection,
        children: [
          s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 20,
            width: n,
          }),
          s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 20,
            width: n,
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.shimmerStyles = c),
      (l.ShimmerSection = d),
      (l.CountryBreakdownShimmer = m),
      (l.DateRangeShimmer = _),
      (l.LegendItemShimmer = f));
  },
  98,
);
