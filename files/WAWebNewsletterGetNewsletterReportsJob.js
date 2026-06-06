__d(
  "WAWebNewsletterGetNewsletterReportsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexFetchNewsletterReportsJob",
    "WAWebNewsletterReportModelUtils",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterReports",
          async function () {
            var t,
              n,
              r = await o(
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
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterReports = e;
  },
  98,
);
