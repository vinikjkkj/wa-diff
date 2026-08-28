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
    var e = function (t) {
      return o("AdsBusinessConstraintsAccountControlInfoDataLoader")
        .loadAccountControlInfoForAccount(t)
        .then(function (e) {
          var t,
            n,
            r,
            o,
            a,
            i,
            l =
              (t =
                (n = e.data) == null || (n = n[0]) == null
                  ? void 0
                  : n.audience_controls) != null
                ? t
                : {},
            s =
              (r =
                (o = e.data) == null || (o = o[0]) == null
                  ? void 0
                  : o.placement_controls) != null
                ? r
                : {},
            u =
              (a =
                (i = e.data) == null || (i = i[0]) == null
                  ? void 0
                  : i.is_age_restriction_enabled) != null
                ? a
                : !1;
          return {
            audience_controls: l,
            placement_controls: s,
            is_age_restriction_enabled: u,
          };
        });
    };
    function s(e, t) {
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
    var u = {
        initialState: function (n) {
          return r("LoadObjectMap").create(function (t) {
            (n(function (e) {
              return e.setLoading(t);
            }),
              r("promiseDone")(
                r("promiseLoadObjectsFromKeys")(t, e),
                function (e) {
                  (n(function (t) {
                    return t.merge(e);
                  }),
                    s(t, e),
                    r("AdsTargetingAccountControlInfoLoadedAction").dispatch(
                      {},
                      {
                        line: "89",
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
      c = u;
    l.default = c;
  },
  98,
);
