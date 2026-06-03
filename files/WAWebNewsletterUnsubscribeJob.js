__d(
  "WAWebNewsletterUnsubscribeJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebBackendErrors",
    "WAWebMexLeaveNewsletterJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "unsubscribeFromNewsletter",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var t = yield o("WAWebMexLeaveNewsletterJob").mexLeaveNewsletter(
                e,
              );
              return t;
            } catch (e) {
              if (
                e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                e.status === 400
              )
                return !0;
              throw e;
            }
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.unsubscribeFromNewsletter = e;
  },
  98,
);
