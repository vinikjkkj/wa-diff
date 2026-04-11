__d(
  "WAWebSendMsgDatabaseJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBDeviceListFanout",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = {
        wids: e,
        chatWidSetToIncludeHostedInFanoutOneToOneChatOnly: t,
        shouldMergeAltDevices: n != null ? n : !1,
      };
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getFanOutList",
          function (e) {
            return o("WAWebDBDeviceListFanout").getFanOutList(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted(r);
    }
    l.getFanOutListJob = e;
  },
  98,
);
