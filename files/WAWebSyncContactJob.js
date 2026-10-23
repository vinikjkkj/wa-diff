__d(
  "WAWebSyncContactJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebContactSyncApi",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      t === void 0 && (t = !0);
      var r = { contactIds: e, shouldDelayBetweenChunks: t, mode: n };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "syncContactListInChunks",
          function (e) {
            return o("WAWebContactSyncApi").syncContactListInChunks(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(r);
    }
    function s(e, t, n, r) {
      t === void 0 && (t = !0);
      var a = {
        contactIds: e,
        shouldSyncDevice: t,
        mode: n,
        businessProfileVersion: r,
      };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "syncContactList",
          function (e) {
            return o("WAWebContactSyncApi").syncContactList(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(a);
    }
    ((l.syncContactListInChunksJob = e), (l.syncContactListJob = s));
  },
  98,
);
