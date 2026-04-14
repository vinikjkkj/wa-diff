__d(
  "WAWebNewsletterTabDrawerLoadingShimmer.react",
  [
    "WAWebDrawerSection.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterInboxShimmer.react",
    "WAWebNewsletterRecommendationsShimmer.react",
    "react",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 128;
    function c(e) {
      var t = e.newsletterCount,
        n = r("useWAWebWindowSize")(),
        a = n.height,
        i = Math.floor(a / u),
        l = t > i ? i : t,
        c = s.jsx(r("WAWebNewsletterInboxShimmer.react"), { count: l });
      return (
        t === 0 &&
          ((l = o("WAWebNewsletterGatingUtils").getRecommendedUnitRowCount()),
          (c = s.jsx(r("WAWebNewsletterRecommendationsShimmer.react"), {
            count: l,
          }))),
        s.jsx(r("WAWebDrawerSection.react"), {
          theme: "full-height",
          children: c,
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
