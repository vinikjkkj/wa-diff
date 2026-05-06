__d(
  "buildWABizAdCreationLWIAudienceMap",
  ["fbt", "WAWebBizGatingUtils", "emptyObject", "jsonParseSafe"],
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
          var o,
            i = t == null ? void 0 : t.audience_key,
            l = t == null ? void 0 : t.audience_option;
          if (!(i == null || l == null)) {
            var s = l === "NCPP";
            n[l] = {
              audienceID: i,
              audienceOption: l,
              clientEditable: !!(t != null && t.client_editable),
              name: s ? a : String(t == null ? void 0 : t.name),
              subjectToDSA: !!(t != null && t.subject_to_dsa),
              targetSpec: r("jsonParseSafe")(
                String(
                  (o =
                    t == null
                      ? void 0
                      : t.target_spec_string_without_placements) != null
                    ? o
                    : "{}",
                ),
                e,
              ),
            };
          }
        }),
        n
      );
    }
    l.default = u;
  },
  226,
);
