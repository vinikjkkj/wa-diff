__d(
  "AdsBwIPlacementUtils",
  ["AdsAPIDevicePlatform"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, o;
      t === void 0 && (t = !1);
      var a = (n = e.buyWithIntegrationPartner) != null ? n : "NONE",
        i = a !== "NONE",
        l =
          i &&
          (!t ||
            !!(
              (o = e.spec.device_platforms) != null &&
              o.every(function (e) {
                return e !== r("AdsAPIDevicePlatform").MOBILE;
              })
            ));
      return l ? { type: "BWI" } : null;
    }
    l.getIneligibilityReason = e;
  },
  98,
);
