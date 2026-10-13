__d(
  "WAWebTasksExperienceIdDailyReport",
  [
    "WALogger",
    "WAWebDBExperienceIdCounts",
    "WAWebExperienceIdGatingUtils",
    "WAWebFalcoCanonicalAppVersion",
    "WAWebFalcoCanonicalMdId",
    "WamExperienceIdDailyFalcoEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o(
              "WAWebDBExperienceIdCounts",
            ).getReceivedExperienceIdCounts();
            if (e == null) return;
            (r("justknobx")._("6387") &&
              o(
                "WAWebExperienceIdGatingUtils",
              ).isExperienceIdReceiveEnabled() &&
              e.aggregates.forEach(d),
              yield o("WAWebDBExperienceIdCounts").removeReportedExperienceIds(
                e.msgKeys,
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "reportExperienceIdDailyStats: keeping rows for the next run",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("experience-id-daily-report-failed");
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(t) {
      try {
        var n = r("WAWebFalcoCanonicalMdId")();
        r("WamExperienceIdDailyFalcoEvent").log(function () {
          return {
            app_version: r("WAWebFalcoCanonicalAppVersion")(),
            md_id: n != null ? String(n) : null,
            experience_id: String(t.experienceId),
            unique_message_count: String(t.uniqueMessageCount),
            unique_sender_count: String(t.uniqueSenderCount),
          };
        });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "reportExperienceIdDailyStats: dropping one id",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("experience-id-daily-event-failed");
      }
    }
    l.reportExperienceIdDailyStats = u;
  },
  98,
);
