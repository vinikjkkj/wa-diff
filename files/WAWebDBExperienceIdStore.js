__d(
  "WAWebDBExperienceIdStore",
  ["WALogger", "WATimeUtils", "WAWebSchemaExperienceId", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return e.some(function (e) {
        var t, n;
        return (
          ((t = (n = e.experienceIds) == null ? void 0 : n.length) != null
            ? t
            : 0) > 0
        );
      });
    }
    async function u(t) {
      try {
        if (!s(t)) return;
        var n = o("WATimeUtils").unixTimeMs(),
          a = t.flatMap(function (e) {
            var t = e.experienceIds,
              r = e.id;
            return t != null && t.length > 0
              ? [{ msgKey: r, experienceIds: t, storedAtMs: n }]
              : [];
          });
        await o("WAWebSchemaExperienceId")
          .getExperienceIdTable()
          .bulkCreateOrReplace(a);
      } catch (t) {
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
    }
    ((l.shouldLockExperienceIdTable = s), (l.recordReceivedExperienceIds = u));
  },
  98,
);
