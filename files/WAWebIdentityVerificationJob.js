__d(
  "WAWebIdentityVerificationJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebIdentityVerificationApi",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.jid,
        n = e.lid,
        r = e.options,
        a = babelHelpers.extends({ jid: t, lid: n }, r);
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getIdentityVerificationData",
          o("WAWebIdentityVerificationApi").getIdentityVerificationData,
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(a);
    }
    l.getIdentityVerificationDataJob = e;
  },
  98,
);
