__d(
  "WAWebNewsletterRecommendationsShimmer.react",
  [
    "CometHeroHoldTrigger.react",
    "WAWebFlex.react",
    "WAWebNewsletterDirectoryShimmer.react",
    "WAWebNewsletterRecommendedBlockHeading.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { marginTop24: { marginTop: "x9u28bd", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.count,
        a = e.description,
        i = a === void 0 ? "NewsletterRecommendationsBlockShimmer" : a,
        l;
      t[0] !== i
        ? ((l = s.jsx(r("CometHeroHoldTrigger.react"), {
            description: i,
            hold: !0,
          })),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s.jsx(r("WAWebNewsletterRecommendedBlockHeading.react"), {})),
          (t[2] = c))
        : (c = t[2]);
      var d;
      t[3] !== n
        ? ((d = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.marginTop24,
            align: "center",
            children: [
              c,
              s.jsx(r("WAWebNewsletterDirectoryShimmer.react"), { count: n }),
            ],
          })),
          (t[3] = n),
          (t[4] = d))
        : (d = t[4]);
      var m;
      return (
        t[5] !== l || t[6] !== d
          ? ((m = s.jsxs(s.Fragment, { children: [l, d] })),
            (t[5] = l),
            (t[6] = d),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    l.default = c;
  },
  98,
);
