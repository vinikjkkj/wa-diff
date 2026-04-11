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
    function s(e, t, n) {
      t === void 0 && (t = !0);
      var r = { contactIds: e, shouldSyncDevice: t, mode: n };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "syncContactList",
          function (e) {
            return o("WAWebContactSyncApi").syncContactList(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(r);
    }
    ((l.syncContactListInChunksJob = e), (l.syncContactListJob = s));
  },
  98,
);
