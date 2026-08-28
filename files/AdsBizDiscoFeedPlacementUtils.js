__d(
  "AdsBizDiscoFeedPlacementUtils",
  ["AdsAPIObjectives", "LocationConstants", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["US", "PH", "GB", "ZA", "CA", "AU", "MY", "NZ", "IE", "SG"];
    function s(t) {
      if (!t.targetingGeoLocations) return !1;
      var n = t.targetingGeoLocations;
      typeof n.get != "function" && (n = o("immutable").fromJS(n));
      var r = [];
      return (
        o("LocationConstants").locationTypes.map(function (e) {
          if (n.get(e)) {
            var t = n.get(e);
            if (e === o("LocationConstants").COUNTRY_GROUPS) {
              if (typeof t == "string") r.push(t);
              else if (t.size && t.size > 0) {
                var a = Array.from(t);
                r.push.apply(r, a);
              }
            } else if (e === o("LocationConstants").COUNTRIES) {
              var i = Array.from(t);
              r.push.apply(r, i);
            } else
              Array.from(t).map(function (e) {
                var t = e.get("country"),
                  n = e.get("country_code");
                ((t = t || n), t && r.push(t));
              });
          }
        }),
        r.some(function (t) {
          return e.includes(t);
        })
      );
    }
    function u() {
      var e;
      return [
        (e = r("AdsAPIObjectives")).LINK_CLICKS,
        e.APP_INSTALLS,
        e.CONVERSIONS,
        e.REACH,
        e.BRAND_AWARENESS,
        e.VIDEO_VIEWS,
        e.LEAD_GENERATION,
      ];
    }
    var c = { isEnglishSpeakingCountryIncluded: s, getEligibleObjectives: u },
      d = c;
    l.default = d;
  },
  98,
);
