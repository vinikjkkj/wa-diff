__d(
  "getSavedAudiencesFromQuery",
  ["compactMap", "jsonParseSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null || e.length === 0
        ? []
        : r("compactMap")(e, function (e) {
            var t,
              n,
              o,
              a,
              i = (t = e.node) == null ? void 0 : t.id;
            return i == null
              ? null
              : {
                  audienceID: i,
                  audienceOption: "SAVED_AUDIENCE",
                  clientEditable: !0,
                  name: String((n = e.node) == null ? void 0 : n.name),
                  subjectToDSA:
                    ((o = e.node) == null ? void 0 : o.subject_to_dsa) === !0,
                  targetSpec: r("jsonParseSafe")(
                    String(
                      (a = e.node) == null
                        ? void 0
                        : a.target_spec_string_without_placements,
                    ),
                    {},
                  ),
                };
          });
    }
    l.default = e;
  },
  98,
);
