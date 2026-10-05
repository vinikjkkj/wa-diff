__d(
  "WAWebDBExperienceIdStore",
  [
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebSchemaExperienceId",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      try {
        if (
          !e.some(function (e) {
            var t, n;
            return (
              ((t = (n = e.experienceIds) == null ? void 0 : n.length) != null
                ? t
                : 0) > 0
            );
          }) ||
          !o("WAWebSchemaExperienceId").canUseExperienceIdTable() ||
          !r("justknobx")._("6170")
        )
          return;
        var t = o("WATimeUtils").unixTimeMs(),
          n = e.flatMap(function (e) {
            var n = e.experienceIds,
              r = e.id;
            return n != null && n.length > 0
              ? [{ msgKey: r, experienceIds: n, storedAtMs: t }]
              : [];
          });
        r("WAWeb-dexie").ignoreTransaction(function () {
          o("WAWebSchemaExperienceId")
            .getExperienceIdTable()
            .bulkCreateOrReplace(n)
            .catch(u);
        });
      } catch (e) {
        u(e);
      }
    }
    function u(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "recordReceivedExperienceIds: dropping rows",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("experience-id-record-failed");
    }
    l.recordReceivedExperienceIds = s;
  },
  98,
);
