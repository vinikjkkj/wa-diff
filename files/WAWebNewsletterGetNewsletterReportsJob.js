__d(
  "WAWebNewsletterGetNewsletterReportsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexFetchNewsletterReportsJob",
    "WAWebNewsletterReportModelUtils",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterReports",
          async function () {
            var e,
              t,
              n = await o(
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
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterReports = e;
  },
  98,
);
