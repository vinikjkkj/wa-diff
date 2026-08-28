__d(
  "adsMessengerValidationIsL1MessengerAd",
  [
    "AdsAdgroupSemanticFields",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t =
        e.campaign.destination_type === r("AdsPromotedObjectTypes").MESSENGER;
      if (t) return !1;
      var n = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e),
        a = r("AdsAdgroupSemanticFields").callToActionValue.get(n, e.adgroup),
        i = a && a.get("app_destination");
      return i === "MESSENGER";
    }
    l.default = e;
  },
  98,
);
