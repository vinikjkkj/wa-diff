__d(
  "WAWebNewsletterUnsubscribeJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebBackendErrors",
    "WAWebMexLeaveNewsletterJob",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "unsubscribeFromNewsletter",
          async function () {
            try {
              var t = await o("WAWebMexLeaveNewsletterJob").mexLeaveNewsletter(
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
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.unsubscribeFromNewsletter = e;
  },
  98,
);
