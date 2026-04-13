__d(
  "WAWebNewsletterTabDrawerLoadingShimmer.react",
  [
    "WAWebDrawerSection.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterInboxShimmer.react",
    "WAWebNewsletterRecommendationsShimmer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 128;
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.newsletterCount,
        a = r("useWAWebWindowSize")(),
        i = a.height,
        l = Math.floor(i / u),
        c = n > l ? l : n,
        d;
      t[0] !== c
        ? ((d = s.jsx(r("WAWebNewsletterInboxShimmer.react"), { count: c })),
          (t[0] = c),
          (t[1] = d))
        : (d = t[1]);
      var m = d;
      if (n === 0) {
        var p;
        (t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = o("WAWebNewsletterGatingUtils").getRecommendedUnitRowCount()),
            (t[2] = p))
          : (p = t[2]),
          (c = p));
        var _;
        (t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = s.jsx(r("WAWebNewsletterRecommendationsShimmer.react"), {
              count: c,
            })),
            (t[3] = _))
          : (_ = t[3]),
          (m = _));
      }
      var f;
      return (
        t[4] !== m
          ? ((f = s.jsx(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              children: m,
            })),
            (t[4] = m),
            (t[5] = f))
          : (f = t[5]),
        f
      );
    }
    l.default = c;
  },
  98,
);
