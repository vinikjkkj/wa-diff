__d(
  "AdsBusinessConstraintsAccountControlInfoDataProviderPlugin",
  [
    "AdsBusinessConstraintsAccountControlInfoDataLoader",
    "loadObjectMapProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r(
          "loadObjectMapProvider",
        ).withSingleKeyLoader_USE_SPARINGLY(function (e) {
          return o("AdsBusinessConstraintsAccountControlInfoDataLoader")
            .loadAccountControlInfoForAccount(e)
            .then(function (e) {
              var t,
                n,
                r,
                o,
                a,
                i,
                l,
                s,
                u,
                c,
                d,
                m,
                p =
                  (t =
                    (n = e.data) == null || (n = n[0]) == null
                      ? void 0
                      : n.audience_controls) != null
                    ? t
                    : {},
                _ =
                  (r =
                    (o = e.data) == null || (o = o[0]) == null
                      ? void 0
                      : o.placement_controls) != null
                    ? r
                    : {},
                f =
                  (a =
                    (i = e.data) == null || (i = i[0]) == null
                      ? void 0
                      : i.placement_controls_per_objective) != null
                    ? a
                    : {},
                g =
                  (l =
                    (s = e.data) == null || (s = s[0]) == null
                      ? void 0
                      : s.status) != null
                    ? l
                    : "",
                h =
                  (u =
                    (c = e.data) == null || (c = c[0]) == null
                      ? void 0
                      : c.campaigns_with_error) != null
                    ? u
                    : [],
                y =
                  (d =
                    (m = e.data) == null || (m = m[0]) == null
                      ? void 0
                      : m.is_age_restriction_enabled) != null
                    ? d
                    : !1;
              return {
                audience_controls: p,
                placement_controls: _,
                placement_controls_per_objective: f,
                status: g,
                campaigns_with_error: h,
                is_age_restriction_enabled: y,
              };
            });
        }),
      },
      s = e;
    l.default = s;
  },
  98,
);
