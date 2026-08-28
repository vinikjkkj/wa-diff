__d(
  "AdsAPIAdgroupRecordGetWebsiteURL",
  [
    "AdsAPIAdgroupRecord",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsMultiMediaUtils",
    "AdsUEditorAdgroupUrlMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return typeof e == "object" && !(e instanceof r("AdsAPIAdgroupRecord"));
    }
    function s(t, n) {
      var a = "";
      if (
        t instanceof r("AdsAPIAdgroupRecord") &&
        o("AdsMultiMediaUtils").isPrimaryMediaDestinationCustomizationEnabled(
          "silent",
        )
      ) {
        var i,
          l =
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.media_sourcing_spec.destinations.get(t)) == null ||
            (i = i.get(0)) == null
              ? void 0
              : i.get("url");
        if (typeof l == "string" && l.length > 0) return l;
      }
      var s = null;
      if (e(t)) {
        var u;
        s = (u = t.semantic_fields) == null ? void 0 : u.link_url;
      } else n != null && (s = r("AdsAdgroupSemanticFields").linkURL.get(n, t));
      t instanceof r("AdsAPIAdgroupRecord") &&
        o("AdsAPIAdgroupRecordUtils").isWebAndAppExistingPostAd(t) &&
        (s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.call_to_action.value.link.get(t));
      var c = o("AdsAssetFeedUtils").isAutomaticFlow(t);
      return (o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(t) &&
        !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(t) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(t) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(t)) ||
        c
        ? (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t)
            ? o("AdsUEditorAdgroupUrlMutators").getDefaultWebsiteUrl(t)
            : o("AdsAssetFeedFieldUtils").getAssetAtIndex(
                s,
                "website_url",
                o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
                  t,
                  "link_urls",
                ),
              )) || a
        : o("AdsAssetFeedFieldUtils").getNonAssetFeedValue(s) || a;
    }
    l.default = s;
  },
  98,
);
