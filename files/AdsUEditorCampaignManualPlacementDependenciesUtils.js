__d(
  "AdsUEditorCampaignManualPlacementDependenciesUtils",
  [
    "AdsPlacementDependentPlatformGatingUtils",
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
      if (r("gkx")("5514") || r("gkx")("15112")) {
        var n = t.get("instagram/stream");
        n &&
          ((n = n.filter(function (e) {
            return e !== "threads/stream";
          })),
          t.set("instagram/stream", n));
      }
      if (
        o("WAMOStatusAdsManagerUtils").isAdAccountAllowedWhatsAppStatusOnly()
      ) {
        var a = t.get("instagram/story");
        a &&
          ((a = a.filter(function (e) {
            return e !== "whatsapp/status";
          })),
          a.length === 0
            ? t.delete("instagram/story")
            : t.set("instagram/story", a));
      }
      var i = new Map();
      return (
        t.forEach(function (t, n) {
          var r = t.filter(function (t) {
            return !o(
              "AdsPlacementDependentPlatformGatingUtils",
            ).shouldSkipPlacementParentDependency(t, n, e);
          });
          r.length > 0 && i.set(n, r);
        }),
        r("immutable").Map(i)
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
      ((r("gkx")("5514") || r("gkx")("15112")) && t.delete("threads/stream"),
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
