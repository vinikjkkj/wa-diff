__d(
  "AdsGeoLocationMetaInfoDataSource",
  [
    "AdsGraphAPI",
    "CurrentLocale",
    "GraphAPISearchConstants",
    "Promise",
    "adsTargetingLocationGetLocationKeys",
    "adsTargetingLocationGetLocationsCount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a) {
      var l = r("adsTargetingLocationGetLocationKeys")(t, a),
        s =
          r("adsTargetingLocationGetLocationsCount")(t) +
          r("adsTargetingLocationGetLocationsCount")(a);
      return s === 0
        ? (e || (e = n("Promise"))).resolve({})
        : o("AdsGraphAPI")
            .get(i.id)
            .search(o("GraphAPISearchConstants").ADGEOLOCATIONMETA)
            .get(
              babelHelpers.extends({}, l, { locale: r("CurrentLocale").get() }),
            )
            .then(function (e) {
              return e.data;
            })
            .catch(function (e) {
              var t = new Error(
                e.error || "unknown error fetching location metadata",
              );
              throw (t.stack, t);
            });
    }
    function u(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .search(o("GraphAPISearchConstants").ADGEOLOCATIONMETA)
        .get({ country_groups: e, locale: r("CurrentLocale").get() })
        .then(function (e) {
          return e.data;
        });
    }
    ((l.getMetaInfo = s), (l.getMetaInfoForCountryGroups = u));
  },
  98,
);
