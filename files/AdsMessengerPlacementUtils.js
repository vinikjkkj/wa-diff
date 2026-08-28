__d(
  "AdsMessengerPlacementUtils",
  ["ix", "AdsPlacementAPISpecReaderUtilsShared", "LocationConstants", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["US", "FR", "AU", "CA"];
    function u(e) {
      return o(
        "AdsPlacementAPISpecReaderUtilsShared",
      ).isActiveMessengerPosition(e, "messenger_home");
    }
    function c() {
      return {
        description: "",
        imageAdsPreviewVideo: "10150061325837547",
        videoAdsPreviewVideo: "10150061325837547",
        imageAdsPreviewImage: s("868678"),
        videoAdsPreviewImage: s("868678"),
      };
    }
    function d(e) {
      if (!e.targetingGeoLocations) return !1;
      if (e.targetingGeoLocations.get) {
        var a = e.targetingGeoLocations,
          i = [];
        return (
          o("LocationConstants").locationTypes.map(function (e) {
            if (a.get(e)) {
              var t = a.get(e);
              if (e === o("LocationConstants").COUNTRY_GROUPS) {
                if (typeof t == "string") i.push(t);
                else if (t.size && t.size > 0) {
                  var n = Array.from(t);
                  i.push.apply(i, n);
                }
              } else if (e === o("LocationConstants").COUNTRIES) {
                var r = Array.from(t);
                i.push.apply(i, r);
              } else
                Array.from(t).map(function (e) {
                  var t = e.get("country"),
                    n = e.get("country_code");
                  ((t = t || n), t && i.push(t));
                });
            }
          }),
          p(i)
        );
      } else {
        if (r("gkx")("13586")) {
          var t = e.targetingGeoLocations,
            n = [];
          return (
            o("LocationConstants").locationTypes.map(function (e) {
              if (t != null && t[e]) {
                var r = t[e];
                if (e === o("LocationConstants").COUNTRY_GROUPS) {
                  if (typeof r == "string") n.push(r);
                  else if (r.size && r.size > 0) {
                    var a = Array.from(r);
                    n.push.apply(n, a);
                  }
                } else if (e === o("LocationConstants").COUNTRIES) {
                  var i = Array.from(r);
                  n.push.apply(n, i);
                } else
                  Array.from(r).map(function (e) {
                    var t = e.country,
                      r = e.country_code;
                    ((t = t || r), t && n.push(t));
                  });
              }
            }),
            p(n)
          );
        }
        return !1;
      }
    }
    function m(e) {
      if (e == null) return !1;
      var t = o("LocationConstants").locationTypes.reduce(function (t, n) {
        var r = e[n];
        return r
          ? t.concat(
              Array.isArray(r)
                ? r.reduce(function (e, n) {
                    if (typeof n == "string")
                      return t.includes(n) ? e : [n].concat(e);
                    var r = n.country;
                    return r != null &&
                      !e.includes(r) &&
                      (r == null || !t.includes(r))
                      ? [r].concat(e)
                      : e;
                  }, [])
                : [],
            )
          : t;
      }, e.countries || []);
      return p(t);
    }
    function p(t) {
      return t.every(function (t) {
        return e.includes(t);
      });
    }
    ((l.isMessengerInboxPositionActive = u),
      (l.getPlacementSpecificPreviewInfo = c),
      (l.isOnlyTargetingRolledBackCountries = d),
      (l.isOnlyTargetingRolledBackCountriesFromTypedGeoLocations = m));
  },
  98,
);
