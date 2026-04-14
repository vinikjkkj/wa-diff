__d(
  "useWAWebBizAdCreationSearchRegionalLocations",
  [
    "CometRelay",
    "react",
    "useWAWebBizAdCreationSearchRegionalLocationsQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useRef,
      m = u.useState;
    function p(t, r) {
      var a = m([]),
        i = a[0],
        l = a[1],
        s = m(!1),
        u = s[0],
        p = s[1],
        _ = d(null),
        f = c(
          function (a) {
            if (a.trim().length === 0) {
              (l([]), p(!1));
              return;
            }
            (p(!0),
              _.current != null && _.current.unsubscribe(),
              (_.current = o("CometRelay")
                .fetchQuery(
                  t,
                  e !== void 0
                    ? e
                    : (e = n(
                        "useWAWebBizAdCreationSearchRegionalLocationsQuery.graphql",
                      )),
                  {
                    query: a,
                    first: 10,
                    locationTypes: [
                      "COUNTRY_GROUP",
                      "COUNTRY",
                      "REGION",
                      "CITY",
                      "SUBCITY",
                      "ZIP",
                      "NEIGHBORHOOD",
                    ],
                  },
                )
                .subscribe({
                  next: function (t) {
                    var e,
                      n = ((e = t.geo_locations_search) != null ? e : []).map(
                        function (e) {
                          var t;
                          return {
                            key: e.key,
                            name: e.name,
                            type: e.type,
                            countryCode: e.country_code,
                            countryName: e.country_name,
                            region: e.region,
                            regionId: e.region_id,
                            isWorldwide: (t = e.is_worldwide) != null ? t : !1,
                          };
                        },
                      );
                    (l(n), p(!1));
                  },
                  error: function (t) {
                    (l([]), p(!1), r != null && r());
                  },
                })));
          },
          [t, r],
        );
      return { locations: i, fetchLocations: f, isLoading: u };
    }
    l.default = p;
  },
  98,
);
