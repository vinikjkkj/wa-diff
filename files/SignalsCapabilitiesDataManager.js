__d(
  "SignalsCapabilitiesDataManager",
  ["AsyncRequest", "XAdsPixelCapabilityCheckControllerRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("XAdsPixelCapabilityCheckControllerRouteBuilder").buildUri({
        pixel_id: e,
      });
      return new (r("AsyncRequest"))()
        .setURI(t)
        .exec()
        .then(function (e) {
          return e.getPayload();
        });
    }
    l.genGetAll = e;
  },
  98,
);
