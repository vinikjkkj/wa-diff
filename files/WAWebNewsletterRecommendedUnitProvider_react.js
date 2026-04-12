__d(
  "WAWebNewsletterRecommendedUnitProvider.react",
  [
    "WAWebNewsletterRecommendedV3.react",
    "WAWebUpdatesTabPrivacyFooter.react",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.isLoading,
        n = e.layout,
        a = e.onCreateNewsletter,
        i = e.onSeeAllClick,
        l = e.recommendedNewsletters;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WAWebNewsletterRecommendedV3.react"), {
            onDiscoverMoreClick: function () {
              return i(
                o("WAWebWamEnumChannelDirectoryEntryPoint")
                  .CHANNEL_DIRECTORY_ENTRY_POINT.SUGGESTED_CHANNELS,
              );
            },
            onCreateNewsletter: a,
            loading: t,
            layout: n,
            recommendedNewsletters: l,
          }),
          s.jsx(r("WAWebUpdatesTabPrivacyFooter.react"), {}),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
