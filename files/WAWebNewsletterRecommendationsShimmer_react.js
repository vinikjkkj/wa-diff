__d(
  "WAWebNewsletterRecommendationsShimmer.react",
  [
    "CometHeroHoldTrigger.react",
    "WAWebFlex.react",
    "WAWebNewsletterDirectoryShimmer.react",
    "WAWebNewsletterRecommendedBlockHeading.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { marginTop24: { marginTop: "x9u28bd", $$css: !0 } };
    function c(e) {
      var t = e.count,
        n = e.description,
        a = n === void 0 ? "NewsletterRecommendationsBlockShimmer" : n;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("CometHeroHoldTrigger.react"), { description: a, hold: !0 }),
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.marginTop24,
            align: "center",
            children: [
              s.jsx(r("WAWebNewsletterRecommendedBlockHeading.react"), {}),
              s.jsx(r("WAWebNewsletterDirectoryShimmer.react"), { count: t }),
            ],
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
