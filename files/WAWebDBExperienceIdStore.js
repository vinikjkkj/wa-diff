__d(
  "WAWebDBExperienceIdStore",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaExperienceId",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
  ],
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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            if (!s(t) || !r("justknobx")._("6170")) return;
            var n = o("WATimeUtils").unixTimeMs(),
              a = t.flatMap(function (e) {
                var t = e.experienceIds,
                  r = e.id;
                return t != null && t.length > 0
                  ? [{ msgKey: r, experienceIds: t, storedAtMs: n }]
                  : [];
              });
            yield o("WAWebSchemaExperienceId")
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
        })),
        c.apply(this, arguments)
      );
    }
    ((l.shouldLockExperienceIdTable = s), (l.recordReceivedExperienceIds = u));
  },
  98,
);
