__d(
  "buildWABizAdCreationLWIAudienceMap",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "emptyObject",
    "jsonParseSafe",
    "waWebBizAdCreationTargetingModalApplyTargetingAutomation",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {};
    function u(t) {
      if (t == null) return r("emptyObject");
      var n = {},
        a = o("WAWebBizGatingUtils").nativeAdsAdvantagePlusAudienceEnabled()
          ? s._(/*BTDS*/ "Suggested audience").toString()
          : s._(/*BTDS*/ "Default").toString();
      return (
        t.forEach(function (t) {
          var i,
            l,
            s = t == null ? void 0 : t.audience_key,
            u = t == null ? void 0 : t.audience_option;
          if (!(s == null || u == null)) {
            var c = u === "NCPP",
              d = babelHelpers.extends(
                {},
                r("jsonParseSafe")(
                  String(
                    (i =
                      t == null
                        ? void 0
                        : t.target_spec_string_without_placements) != null
                      ? i
                      : "{}",
                  ),
                  e,
                ),
              );
            (c &&
              o(
                "WAWebBizGatingUtils",
              ).nativeAdsAdvantagePlusAudienceEnabled() &&
              ((l = d.targeting_automation) == null
                ? void 0
                : l.advantage_audience) !== 1 &&
              r("waWebBizAdCreationTargetingModalApplyTargetingAutomation")(
                d,
                !0,
              ),
              (n[u] = {
                audienceID: s,
                audienceOption: u,
                clientEditable: !!(t != null && t.client_editable),
                name: c ? a : String(t == null ? void 0 : t.name),
                subjectToDSA: !!(t != null && t.subject_to_dsa),
                targetSpec: d,
              }));
          }
        }),
        n
      );
    }
    l.default = u;
  },
  226,
);
