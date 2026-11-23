__d(
  "AdsReelsTrendingAdsPlacementUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ADS_RF_FB_REELS_PLACEMENT", "CAN_USE_FB_REELS_POSITION"];
    function s(e, t) {
      var n = e != null ? [].concat(e) : [];
      return (n.includes(t) || n.push(t), n);
    }
    function u(t) {
      var n = t != null ? [].concat(t) : [];
      return (
        e.forEach(function (e) {
          n.includes(e) || n.push(e);
        }),
        n
      );
    }
    function c(e) {
      var t = e != null ? e : {},
        n = babelHelpers.extends({}, t, {
          facebook_positions: ["facebook_reels"],
          publisher_platforms: s(t.publisher_platforms, "facebook"),
        });
      return n;
    }
    function d(e, t) {
      return (
        e.isReelsTrendingAds === !0 &&
        ((t === "instagram/reels" && !r("gkx")("24670")) ||
          (t === "facebook/fb_reels" && !r("gkx")("9479")))
      );
    }
    ((l.getCapabilitiesWithRTAFBReelsDefault = u),
      (l.getPlacementWithRTAFBReelsDefault = c),
      (l.isRTAReelsPositionLocked = d));
  },
  98,
);
