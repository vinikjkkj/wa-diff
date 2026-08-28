__d(
  "ASAPlacementControlsStoreUtils",
  ["isNullish"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "AUDIENCE_NETWORK_CLASSIC":
          return "audience_network_classic";
        case "AUDIENCE_NETWORK_INSTREAM_VIDEO":
          return "audience_network_instream_video";
        case "AUDIENCE_NETWORK_REWARDED_VIDEO":
          return "audience_network_rewarded_video";
        case "FACEBOOK_MARKETPLACE":
          return "facebook_marketplace";
        case "FACEBOOK_RHC":
          return "facebook_right_hand_column";
        default:
          return null;
      }
    }
    function s(e, t) {
      var n = e.accountPlacementExclusions;
      if (r("isNullish")(n)) return !1;
      var o = n.includes(t);
      return o;
    }
    ((l.castAdsAssetCustomizationGroupsTypeToPlacementExclusionType = e),
      (l.hasAccountPlacementExclusions = s));
  },
  98,
);
