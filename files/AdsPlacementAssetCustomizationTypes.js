__d(
  "AdsPlacementAssetCustomizationTypes",
  ["$InternalEnum", "AdsAssetCustomizationGroups", "sortBy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { FACEBOOK: "FACEBOOK", INSTAGRAM: "INSTAGRAM" },
      s = [
        "INSTAGRAM_STREAM",
        "INSTAGRAM_STORY",
        "INSTAGRAM_EXPLORE",
        "INSTAGRAM_EXPLORE_HOME",
        "INSTAGRAM_PROFILE_FEED",
        "INSTAGRAM_PROFILE_REELS",
        "INSTAGRAM_SEARCH",
        "INSTAGRAM_REELS",
        "INSTAGRAM_SHOP",
        "INSTAGRAM_REELS_OVERLAY",
        "FACEBOOK_FEED",
        "FACEBOOK_STORY",
        "FACEBOOK_GROUPS",
        "FACEBOOK_GROUPS_FEED",
        "AUDIENCE_NETWORK_CLASSIC",
        "AUDIENCE_NETWORK_INSTREAM_VIDEO",
        "AUDIENCE_NETWORK_REWARDED_VIDEO",
        "FACEBOOK_INSTANT_ARTICLE",
        "FACEBOOK_INSTREAM",
        "FACEBOOK_MARKETPLACE",
        "FACEBOOK_SEARCH",
        "FACEBOOK_RHC",
        "MESSENGER_STORY",
        "MESSENGER_INBOX",
        "SUGGESTED_VIDEO",
        "WHATSAPP_CHANNEL",
        "WHATSAPP_STATUS",
        "VIDEO_FEEDS",
        "FACEBOOK_REELS",
        "FACEBOOK_REELS_OVERLAY",
        "THREADS_STREAM",
      ];
    function u(e) {
      return r("sortBy")(e, function (e) {
        var t = s.indexOf(e);
        return t >= 0 ? t : e;
      });
    }
    var c = n("$InternalEnum").Mirrored([
        "PLACEMENT",
        "PROMOTED_OBJECT",
        "DEVICE_TYPE",
      ]),
      d = "image",
      m = "video",
      p = "carousel",
      _ = "post";
    i.exports = {
      AdsAssetCustomizationGroups: r("AdsAssetCustomizationGroups"),
      AdsCampaignAssetCustomizationDialogTypes: c,
      AdsPlacementAssetGroups: e,
      sortAssetGroupsByPreferredOrder: u,
      AdsPlacementCustomizationMediaFormatImage: d,
      AdsPlacementCustomizationMediaFormatVideo: m,
      AdsPlacementCustomizationMediaFormatCarousel: p,
      AdsPlacementCustomizationMediaFormatPost: _,
    };
  },
  34,
);
