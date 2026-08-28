__d(
  "AdsReelsTrendingAdsPlacementUtils",
  ["AdsAPIDevicePlatform"],
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
    function c(e, t) {
      var n = e != null ? e : {},
        o =
          (t == null ? void 0 : t.preserveFacebookPositions) === !0
            ? s(n.facebook_positions, "facebook_reels")
            : ["facebook_reels"],
        a = babelHelpers.extends({}, n, {
          facebook_positions: o,
          publisher_platforms: s(n.publisher_platforms, "facebook"),
        });
      return (t == null ? void 0 : t.includeMobileDevice) === !0
        ? babelHelpers.extends({}, a, {
            device_platforms: s(
              n.device_platforms,
              r("AdsAPIDevicePlatform").MOBILE,
            ),
          })
        : a;
    }
    ((l.getCapabilitiesWithRTAFBReelsDefault = u),
      (l.getPlacementWithRTAFBReelsDefault = c));
  },
  98,
);
