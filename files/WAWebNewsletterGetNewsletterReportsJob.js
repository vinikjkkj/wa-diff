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
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterReports",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t,
              n,
              r = yield o(
                "WAWebMexFetchNewsletterReportsJob",
              ).mexFetchNewsletterReports(e);
            return (
              (t =
                r == null || (n = r.xwa2_channels_reports) == null
                  ? void 0
                  : n.channels_reports) != null
                ? t
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
