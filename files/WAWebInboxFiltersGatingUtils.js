__d(
  "WAWebInboxFiltersGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("inbox_filters_smb_enabled")
        : !0;
    }
    function s() {
      return (
        e() &&
        o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "primary_favorites_sync_support",
        )
      );
    }
    function u() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "android_inbox_mentions_replies_filter",
        )
      );
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("inbox_filters_smb_enabled")
      );
    }
    ((l.inboxFiltersEnabled = e),
      (l.inboxFavoritesEnabled = s),
      (l.inboxToYouFilterEnabled = u),
      (l.inboxCustomFiltersEnabled = c));
  },
  98,
);
