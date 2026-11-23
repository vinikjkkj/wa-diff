__d(
  "AdsPreviewsWatchFeedMobilePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/watch_feed_mobile",
        apiFormat: "WATCH_FEED_MOBILE",
        customizationGroup: "SUGGESTED_VIDEO",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("22175"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
