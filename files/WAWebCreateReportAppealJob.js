__d(
  "WAWebCreateReportAppealJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexCreateReportAppealJob",
    "WAWebNewsletterReportModelUtils",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "createReportAppeal",
          async function () {
            var t = await o(
                "WAWebMexCreateReportAppealJob",
              ).mexCreateReportAppeal(e),
              n = t.xwa2_create_channel_report_appeal_v2;
            return o(
              "WAWebNewsletterReportModelUtils",
            ).mapMexReportToNewsletterReport(n);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.createReportAppeal = e;
  },
  98,
);
