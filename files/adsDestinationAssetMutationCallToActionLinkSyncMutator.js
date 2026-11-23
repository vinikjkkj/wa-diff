__d(
  "adsDestinationAssetMutationCallToActionLinkSyncMutator",
  ["AdsAssetFeedUtils", "adsAssetFeedHasCallToActionValue", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.adgroup,
        a = e.promotedObjectType,
        i = e.websiteURL,
        l =
          (t = n.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.call_to_actions,
        s = l == null ? void 0 : l.getIn([0, "type"]);
      return (l == null ? void 0 : l.size) !== 1 ||
        (s != null && u(s)) ||
        !o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(n) ||
        o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(n) ||
        o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(n) ||
        o("AdsAssetFeedUtils").isAppOrMessagingDestination(a) ||
        !r("adsAssetFeedHasCallToActionValue")(n, 0, "link")
        ? n
        : n.setIn(
            [
              "creative",
              "asset_feed_spec",
              "call_to_actions",
              "0",
              "value",
              "link",
            ],
            i,
          );
    }
    var s = r("immutable").Set([
      "USE_MOBILE_APP",
      "MESSAGE_PAGE",
      "MESSAGE_USER",
      "WHATSAPP_MESSAGE",
      "INSTAGRAM_MESSAGE",
    ]);
    function u(e) {
      return typeof e == "string" && s.has(e);
    }
    l.syncSingleAssetFeedCallToActionLinkMutator = e;
  },
  98,
);
