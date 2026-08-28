__d(
  "convertSoftOptOutPlacementsToPositionKeys",
  [
    "AdsInterfacesLogger",
    "AdsPlacementPlatformPlugins",
    "convertStringToAdsPlacementPositionPluginKey",
    "isDeprecatedAdsPlacementPositionKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n != null &&
        n.forEach(function (n) {
          var o = t + "/" + n,
            a = r("convertStringToAdsPlacementPositionPluginKey")(o);
          a != null
            ? e.add(a)
            : r("isDeprecatedAdsPlacementPositionKey")(o) ||
              r("AdsInterfacesLogger").log({
                eventName: "placement_soft_opt_out_key_conversion_error",
                eventCategory: "errors",
                data: { message: o },
              });
        });
    }
    function s(t) {
      var n = new Set();
      if (!t) return n;
      var o = r("AdsPlacementPlatformPlugins").getArray();
      return (
        o.forEach(function (r) {
          var o = r.key,
            a = r.apiPositionsTargetField();
          o != null && a != null && e(n, r.key, t[a]);
        }),
        n
      );
    }
    l.default = s;
  },
  98,
);
