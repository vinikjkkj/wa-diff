__d(
  "WAWebNewsletterGetNewsletterReportsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexFetchNewsletterReportsJob",
    "WAWebNewsletterReportModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterReports",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t,
              n = yield o(
                "WAWebMexFetchNewsletterReportsJob",
              ).mexFetchNewsletterReports();
            return (
              (e =
                n == null || (t = n.xwa2_channels_reports) == null
                  ? void 0
                  : t.channels_reports) != null
                ? e
                : []
            ).map(
              o("WAWebNewsletterReportModelUtils")
                .mapMexReportToNewsletterReport,
            );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterReports = e;
  },
  98,
);
