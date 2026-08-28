__d(
  "AdsUEditorCampaignManualPlacementDependenciesUtils",
  [
    "AdsPlacementDependentPlatformGatingUtils",
    "FacebookReelsOverlayStoreUtils",
    "WAMOStatusAdsManagerUtils",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Set([
        "facebook/feed",
        "instagram/stream",
        "instagram/story",
        "instagram/explore",
      ]),
      s = r("immutable").Set([
        "facebook/feed",
        "instagram/stream",
        "instagram/story",
      ]);
    function u(e) {
      var t = new Map([
        [
          "instagram/stream",
          [
            "instagram/shop_tab",
            "instagram/explore",
            "instagram/search",
            "threads/stream",
          ],
        ],
        ["instagram/story", ["whatsapp/status"]],
        ["instagram/explore", ["instagram/explore_home"]],
        [
          "facebook/feed",
          [
            "facebook/group_tab",
            "facebook/instream_video",
            "facebook/marketplace",
            "facebook/search",
            "facebook/biz_disco_feed",
            "facebook/reels_overlay",
            "audience_network/classic",
            "audience_network/instream_video",
            "audience_network/rewarded_video",
          ],
        ],
      ]);
      if (r("gkx")("5514")) {
        var n = t.get("instagram/stream");
        n &&
          ((n = n.filter(function (e) {
            return e !== "threads/stream";
          })),
          t.set("instagram/stream", n));
      }
      if (o("FacebookReelsOverlayStoreUtils").instreamSkipBundleCheckGK()) {
        var a = t.get("facebook/feed");
        a &&
          ((a = a.filter(function (e) {
            return e !== "facebook/instream_video";
          })),
          t.set("facebook/feed", a));
      }
      if (
        o("WAMOStatusAdsManagerUtils").isAdAccountAllowedWhatsAppStatusOnly()
      ) {
        var i = t.get("instagram/story");
        i &&
          ((i = i.filter(function (e) {
            return e !== "whatsapp/status";
          })),
          i.length === 0
            ? t.delete("instagram/story")
            : t.set("instagram/story", i));
      }
      var l = new Map();
      return (
        t.forEach(function (t, n) {
          var r = t.filter(function (t) {
            return !o(
              "AdsPlacementDependentPlatformGatingUtils",
            ).shouldSkipPlacementParentDependency(t, n, e);
          });
          r.length > 0 && l.set(n, r);
        }),
        r("immutable").Map(l)
      );
    }
    function c(e) {
      var t = new Map([
        ["instagram/shop_tab", ["instagram/stream"]],
        ["instagram/explore", ["instagram/stream"]],
        ["instagram/explore_home", ["instagram/stream", "instagram/explore"]],
        ["instagram/search", ["instagram/stream"]],
        ["threads/stream", ["instagram/stream"]],
        ["whatsapp/status", ["instagram/story"]],
        ["facebook/group_tab", ["facebook/feed"]],
        ["facebook/instream_video", ["facebook/feed"]],
        ["facebook/marketplace", ["facebook/feed"]],
        ["facebook/search", ["facebook/feed"]],
        ["facebook/biz_disco_feed", ["facebook/feed"]],
        ["facebook/reels_overlay", ["facebook/feed"]],
        ["audience_network/classic", ["facebook/feed"]],
        ["audience_network/instream_video", ["facebook/feed"]],
        ["audience_network/rewarded_video", ["facebook/feed"]],
      ]);
      (r("gkx")("5514") && t.delete("threads/stream"),
        o("FacebookReelsOverlayStoreUtils").instreamSkipBundleCheckGK() &&
          t.delete("facebook/instream_video"),
        o("WAMOStatusAdsManagerUtils").isAdAccountAllowedWhatsAppStatusOnly() &&
          t.delete("whatsapp/status"));
      var n = new Map();
      return (
        t.forEach(function (t, r) {
          var a = t.filter(function (t) {
            return !o(
              "AdsPlacementDependentPlatformGatingUtils",
            ).shouldSkipPlacementParentDependency(r, t, e);
          });
          a.length > 0 && n.set(r, a);
        }),
        r("immutable").Map(n)
      );
    }
    ((l.PARENT_PLUGIN_KEYS = e),
      (l.ANY_PARENT_POSITION_PLUGIN_KEYS = s),
      (l.getPlacementRequirements = u),
      (l.getPlacementRequirementsChildtoParent = c));
  },
  98,
);
