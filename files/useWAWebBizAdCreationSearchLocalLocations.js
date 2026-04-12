__d(
  "useWAWebBizAdCreationSearchLocalLocations",
  [
    "CometRelay",
    "react",
    "useWAWebBizAdCreationSearchLocalLocationsQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(t, r) {
      var a = p([]),
        i = a[0],
        l = a[1],
        s = p(!1),
        u = s[0],
        _ = s[1],
        f = m(null);
      d(function () {
        return function () {
          f.current != null && f.current.unsubscribe();
        };
      }, []);
      var g = c(
          function (a) {
            if (
              (f.current != null &&
                (f.current.unsubscribe(), (f.current = null)),
              a.trim().length === 0)
            ) {
              (l([]), _(!1));
              return;
            }
            (_(!0),
              (f.current = o("CometRelay")
                .fetchQuery(
                  t,
                  e !== void 0
                    ? e
                    : (e = n(
                        "useWAWebBizAdCreationSearchLocalLocationsQuery.graphql",
                      )),
                  { query: a, first: 5 },
                )
                .subscribe({
                  next: function (t) {
                    var e,
                      n = ((e = t.geo_locations_search) != null ? e : [])
                        .map(function (e) {
                          var t, n;
                          return {
                            key: e.key,
                            name: e.name,
                            type: e.type,
                            countryCode: e.country_code,
                            countryName: e.country_name,
                            region: e.region,
                            regionId: null,
                            latitude:
                              (t = e.coordinates) == null ? void 0 : t.latitude,
                            longitude:
                              (n = e.coordinates) == null
                                ? void 0
                                : n.longitude,
                            primaryCityId: e.primary_city_id,
                            isWorldwide: !1,
                          };
                        })
                        .filter(function (e) {
                          return e.latitude != null && e.longitude != null;
                        });
                    (l(n), _(!1));
                  },
                  error: function (t) {
                    (l([]), _(!1), r != null && r());
                  },
                })));
          },
          [t, r],
        ),
        h = c(function () {
          (l([]),
            _(!1),
            f.current != null && (f.current.unsubscribe(), (f.current = null)));
        }, []);
      return {
        locations: i,
        fetchLocations: g,
        clearLocations: h,
        isLoading: u,
      };
    }
    l.default = _;
  },
  98,
);
