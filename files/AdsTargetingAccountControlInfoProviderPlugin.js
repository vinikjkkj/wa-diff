__d(
  "AdsTargetingAccountControlInfoProviderPlugin",
  [
    "AdAccountBusinessConstraintsFalcoEvent",
    "AdsBusinessConstraintsAccountControlInfoDataLoader",
    "AdsTargetingAccountControlInfoLoadedAction",
    "ErrorNormalizeUtils",
    "LoadObjectMap",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "audience_controls",
        "is_age_restriction_enabled",
        "is_gender_exclusion_enabled",
        "placement_controls",
      ],
      s = function (n) {
        return o("AdsBusinessConstraintsAccountControlInfoDataLoader")
          .loadAccountControlInfoForAccount(n, e)
          .then(function (e) {
            var t,
              n,
              r,
              o,
              a,
              i,
              l,
              s,
              u =
                (t =
                  (n = e.data) == null || (n = n[0]) == null
                    ? void 0
                    : n.audience_controls) != null
                  ? t
                  : {},
              c =
                (r =
                  (o = e.data) == null || (o = o[0]) == null
                    ? void 0
                    : o.placement_controls) != null
                  ? r
                  : {},
              d =
                (a =
                  (i = e.data) == null || (i = i[0]) == null
                    ? void 0
                    : i.is_age_restriction_enabled) != null
                  ? a
                  : !1,
              m =
                (l =
                  (s = e.data) == null || (s = s[0]) == null
                    ? void 0
                    : s.is_gender_exclusion_enabled) != null
                  ? l
                  : !1;
            return {
              audience_controls: u,
              placement_controls: c,
              is_age_restriction_enabled: d,
              is_gender_exclusion_enabled: m,
            };
          });
      };
    function u(e, t) {
      Array.from(e).forEach(function (e) {
        var n = t.get(e);
        if (!(!n || !n.hasError())) {
          var o = r("ErrorNormalizeUtils").normalizeError(
            n.getErrorEnforcing(),
          );
          r("AdAccountBusinessConstraintsFalcoEvent").log(function () {
            return {
              ad_account_id: e,
              event: "load_account_control_info_fail",
              extra_info: JSON.stringify({ message: o.messageFormat }),
            };
          });
        }
      });
    }
    var c = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return t.setLoading(e);
            }),
              r("promiseDone")(
                r("promiseLoadObjectsFromKeys")(e, s),
                function (n) {
                  (t(function (e) {
                    return e.merge(n);
                  }),
                    u(e, n),
                    r("AdsTargetingAccountControlInfoLoadedAction").dispatch(
                      {},
                      {
                        line: "104",
                        module:
                          "AdsTargetingAccountControlInfoProviderPlugin.js",
                        moduleID: i.id,
                      },
                    ));
                },
              ));
          });
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
