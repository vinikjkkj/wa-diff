__d(
  "adsTargetingGetCountriesFromSpec",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
      "cities",
      "custom_locations",
      "geo_markets",
      "places",
      "regions",
      "zips",
    ];
    function l(t) {
      return t == null
        ? []
        : e.reduce(function (e, n) {
            var r = t[n];
            return r == null
              ? e
              : e.concat(
                  r.reduce(function (t, n) {
                    var r = n.country;
                    return r == null || t.includes(r) || e.includes(r)
                      ? t
                      : [r].concat(t);
                  }, []),
                );
          }, t.countries || []);
    }
    i.default = l;
  },
  66,
);
