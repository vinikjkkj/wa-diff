__d(
  "useWAWebBizAdCreationSearchRegionalLocations",
  [
    "CometRelay",
    "react",
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(8),
        i;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (a[0] = i))
        : (i = a[0]);
      var l = m(i),
        s = l[0],
        u = l[1],
        c = m(!1),
        p = c[0],
        f = c[1],
        g = d(null),
        h;
      a[1] !== t || a[2] !== r
        ? ((h = function (i) {
            if (i.trim().length === 0) {
              (u([]), f(!1));
              return;
            }
            (f(!0),
              g.current != null && g.current.unsubscribe(),
              (g.current = o("CometRelay")
                .fetchQuery(
                  t,
                  e !== void 0
                    ? e
                    : (e = n(
                        "useWAWebBizAdCreationSearchRegionalLocationsQuery.graphql",
                      )),
                  {
                    query: i,
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
                        _,
                      );
                    (u(n), f(!1));
                  },
                  error: function (t) {
                    (u([]), f(!1), r != null && r());
                  },
                })));
          }),
          (a[1] = t),
          (a[2] = r),
          (a[3] = h))
        : (h = a[3]);
      var y = h,
        C;
      return (
        a[4] !== y || a[5] !== p || a[6] !== s
          ? ((C = { locations: s, fetchLocations: y, isLoading: p }),
            (a[4] = y),
            (a[5] = p),
            (a[6] = s),
            (a[7] = C))
          : (C = a[7]),
        C
      );
    }
    function _(e) {
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
    }
    l.default = p;
  },
  98,
);
