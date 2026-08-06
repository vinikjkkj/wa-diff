__d(
  "WAWebIdentityVerificationJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebIdentityVerificationApi",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.isRemoteGuest,
        n = e.jid,
        r = e.lid,
        a = e.options,
        i = babelHelpers.extends({ jid: n, lid: r, isRemoteGuest: t }, a);
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getIdentityVerificationData",
          o("WAWebIdentityVerificationApi").getIdentityVerificationData,
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(i);
    }
    l.getIdentityVerificationDataJob = e;
  },
  98,
);
