__d(
  "WAWebCreateReportAppealJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexCreateReportAppealJob",
    "WAWebNewsletterReportModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "createReportAppeal",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield o(
                    "WAWebMexCreateReportAppealJob",
                  ).mexCreateReportAppeal(e),
                  n = t.xwa2_create_channel_report_appeal_v2;
                return o(
                  "WAWebNewsletterReportModelUtils",
                ).mapMexReportToNewsletterReport(n);
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        s.apply(this, arguments)
      );
    }
    l.createReportAppeal = e;
  },
  98,
);
