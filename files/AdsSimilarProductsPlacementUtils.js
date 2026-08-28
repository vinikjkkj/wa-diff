__d(
  "AdsSimilarProductsPlacementUtils",
  ["LocationConstants", "SV_FB_SHOPPABLE_VIDEOS", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r(
        "SV_FB_SHOPPABLE_VIDEOS",
      ).similar_products_preview_supported_countries;
      return e != null && e.length > 0 ? e : [];
    }
    function s(t) {
      if (!t.targetingGeoLocations) return !1;
      var n = t.targetingGeoLocations;
      typeof n.get != "function" && (n = r("immutable").fromJS(n));
      var a = e(),
        i = [];
      return (
        o("LocationConstants").locationTypes.map(function (e) {
          if (n.get(e)) {
            var t = n.get(e);
            if (e === o("LocationConstants").COUNTRIES) {
              var r = Array.from(t);
              i.push.apply(i, r);
            } else
              e !== o("LocationConstants").COUNTRY_GROUPS &&
                Array.from(t).map(function (e) {
                  var t = e.get("country") || e.get("country_code");
                  t && i.push(t);
                });
          }
        }),
        i.length === 0
          ? !1
          : i.every(function (e) {
              return a.includes(e);
            })
      );
    }
    l.isSimilarProductsTargetingSupported = s;
  },
  98,
);
