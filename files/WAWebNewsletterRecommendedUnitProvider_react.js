__d(
  "WAWebNewsletterRecommendedUnitProvider.react",
  [
    "WAWebNewsletterRecommendedV3.react",
    "WAWebUpdatesTabPrivacyFooter.react",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.isLoading,
        a = e.layout,
        i = e.onCreateNewsletter,
        l = e.onSeeAllClick,
        u = e.recommendedNewsletters,
        c;
      t[0] !== l
        ? ((c = function () {
            return l(
              o("WAWebWamEnumChannelDirectoryEntryPoint")
                .CHANNEL_DIRECTORY_ENTRY_POINT.SUGGESTED_CHANNELS,
            );
          }),
          (t[0] = l),
          (t[1] = c))
        : (c = t[1]);
      var d;
      t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== u || t[6] !== c
        ? ((d = s.jsx(r("WAWebNewsletterRecommendedV3.react"), {
            onDiscoverMoreClick: c,
            onCreateNewsletter: i,
            loading: n,
            layout: a,
            recommendedNewsletters: u,
          })),
          (t[2] = n),
          (t[3] = a),
          (t[4] = i),
          (t[5] = u),
          (t[6] = c),
          (t[7] = d))
        : (d = t[7]);
      var m;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsx(r("WAWebUpdatesTabPrivacyFooter.react"), {})), (t[8] = m))
        : (m = t[8]);
      var p;
      return (
        t[9] !== d
          ? ((p = s.jsxs(s.Fragment, { children: [d, m] })),
            (t[9] = d),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    l.default = u;
  },
  98,
);
