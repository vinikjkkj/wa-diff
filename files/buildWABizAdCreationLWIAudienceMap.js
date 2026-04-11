__d(
  "buildWABizAdCreationLWIAudienceMap",
  ["fbt", "emptyObject", "jsonParseSafe"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {};
    function u(t) {
      if (t == null) return r("emptyObject");
      var n = {};
      return (
        t.forEach(function (t) {
          var o,
            a = t == null ? void 0 : t.audience_key,
            i = t == null ? void 0 : t.audience_option;
          if (!(a == null || i == null)) {
            var l = i === "NCPP";
            n[i] = {
              audienceID: a,
              audienceOption: i,
              clientEditable: !!(t != null && t.client_editable),
              name: l
                ? s._(/*BTDS*/ "Default").toString()
                : String(t == null ? void 0 : t.name),
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
