__d(
  "WAWebTasksExperienceIdDailyReport",
  [
    "WALogger",
    "WAWebDBExperienceIdCounts",
    "WAWebExperienceIdGatingUtils",
    "WAWebFalcoCanonicalAbKey2",
    "WAWebFalcoCanonicalAppVersion",
    "WAWebFalcoCanonicalMdId",
    "WAWebWamGlobals",
    "WamExperienceIdDailyFalcoEvent",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      try {
        var t = await o(
          "WAWebDBExperienceIdCounts",
        ).getReceivedExperienceIdCounts();
        if (t == null) return;
        (r("justknobx")._("6387") &&
          o("WAWebExperienceIdGatingUtils").isExperienceIdReceiveEnabled() &&
          t.aggregates.forEach(c),
          await o("WAWebDBExperienceIdCounts").removeReportedExperienceIds(
            t.msgKeys,
          ));
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "reportExperienceIdDailyStats: keeping rows for the next run",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("experience-id-daily-report-failed");
      }
    }
    function c(e) {
      try {
        var t = r("WAWebFalcoCanonicalMdId")();
        r("WamExperienceIdDailyFalcoEvent").log(function () {
          var n;
          return {
            ab_key2: r("WAWebFalcoCanonicalAbKey2")(),
            app_version: r("WAWebFalcoCanonicalAppVersion")(),
            expo_key:
              o("WAWebWamGlobals").Global == null ||
              (n = o("WAWebWamGlobals").Global.all) == null
                ? void 0
                : n.expoKey,
            md_id: t != null ? String(t) : null,
            experience_id: String(e.experienceId),
            unique_message_count: String(e.uniqueMessageCount),
            unique_sender_count: String(e.uniqueSenderCount),
          };
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "reportExperienceIdDailyStats: dropping one id",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("experience-id-daily-event-failed");
      }
    }
    l.reportExperienceIdDailyStats = u;
  },
  98,
);
