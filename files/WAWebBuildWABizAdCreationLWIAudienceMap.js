__d(
  "WAWebBuildWABizAdCreationLWIAudienceMap",
  [
    "fbt",
    "WAWebBizAdCreationTargetingModalApplyTargetingAutomation",
    "emptyObject",
    "jsonParseSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {};
    function u(t) {
      if (t == null) return r("emptyObject");
      var n = {},
        o = s._(/*BTDS*/ "Suggested audience").toString();
      return (
        t.forEach(function (t) {
          var a,
            i,
            l = t == null ? void 0 : t.audience_key,
            s = t == null ? void 0 : t.audience_option;
          if (!(l == null || s == null)) {
            var u = s === "NCPP",
              c = babelHelpers.extends(
                {},
                r("jsonParseSafe")(
                  String(
                    (a =
                      t == null
                        ? void 0
                        : t.target_spec_string_without_placements) != null
                      ? a
                      : "{}",
                  ),
                  e,
                ),
              );
            (u &&
              ((i = c.targeting_automation) == null
                ? void 0
                : i.advantage_audience) !== 1 &&
              r("WAWebBizAdCreationTargetingModalApplyTargetingAutomation")(
                c,
                !0,
              ),
              (n[s] = {
                audienceID: l,
                audienceOption: s,
                clientEditable: !!(t != null && t.client_editable),
                name: u ? o : String(t == null ? void 0 : t.name),
                subjectToDSA: !!(t != null && t.subject_to_dsa),
                targetSpec: c,
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
