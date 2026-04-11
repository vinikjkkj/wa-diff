__d(
  "useWAWebBizAdCreationSearchLocalLocations",
  [
    "CometRelay",
    "react",
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(11),
        i;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (a[0] = i))
        : (i = a[0]);
      var l = p(i),
        s = l[0],
        u = l[1],
        c = p(!1),
        _ = c[0],
        h = c[1],
        y = m(null),
        C,
        b;
      (a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            return function () {
              y.current != null && y.current.unsubscribe();
            };
          }),
          (b = []),
          (a[1] = C),
          (a[2] = b))
        : ((C = a[1]), (b = a[2])),
        d(C, b));
      var v;
      a[3] !== t || a[4] !== r
        ? ((v = function (i) {
            if (
              (y.current != null &&
                (y.current.unsubscribe(), (y.current = null)),
              i.trim().length === 0)
            ) {
              (u([]), h(!1));
              return;
            }
            (h(!0),
              (y.current = o("CometRelay")
                .fetchQuery(
                  t,
                  e !== void 0
                    ? e
                    : (e = n(
                        "useWAWebBizAdCreationSearchLocalLocationsQuery.graphql",
                      )),
                  { query: i, first: 5 },
                )
                .subscribe({
                  next: function (t) {
                    var e,
                      n = ((e = t.geo_locations_search) != null ? e : [])
                        .map(g)
                        .filter(f);
                    (u(n), h(!1));
                  },
                  error: function (t) {
                    (u([]), h(!1), r != null && r());
                  },
                })));
          }),
          (a[3] = t),
          (a[4] = r),
          (a[5] = v))
        : (v = a[5]);
      var S = v,
        R;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            (u([]),
              h(!1),
              y.current != null &&
                (y.current.unsubscribe(), (y.current = null)));
          }),
          (a[6] = R))
        : (R = a[6]);
      var L = R,
        E;
      return (
        a[7] !== S || a[8] !== _ || a[9] !== s
          ? ((E = {
              locations: s,
              fetchLocations: S,
              clearLocations: L,
              isLoading: _,
            }),
            (a[7] = S),
            (a[8] = _),
            (a[9] = s),
            (a[10] = E))
          : (E = a[10]),
        E
      );
    }
    function f(e) {
      return e.latitude != null && e.longitude != null;
    }
    function g(e) {
      var t, n;
      return {
        key: e.key,
        name: e.name,
        type: e.type,
        countryCode: e.country_code,
        countryName: e.country_name,
        region: e.region,
        regionId: null,
        latitude: (t = e.coordinates) == null ? void 0 : t.latitude,
        longitude: (n = e.coordinates) == null ? void 0 : n.longitude,
        primaryCityId: e.primary_city_id,
        isWorldwide: !1,
      };
    }
    l.default = _;
  },
  98,
);
