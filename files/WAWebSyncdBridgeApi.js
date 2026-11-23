__d(
  "WAWebSyncdBridgeApi",
  [
    "WAWebCmd",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdKeyCallbacksApi",
    "WAWebSyncdOrphan",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      checkOrphanMutations: function (t) {
        var e = t.chatIds,
          n = t.msgIds,
          r = t.threadIds;
        return o("WAWebSyncdOrphan").checkOrphanMutations(n, e, r);
      },
      handleSyncdFatal: async function () {
        return o("WAWebSyncdDbCallbacksApi").handleSyncdFatal();
      },
      getDeviceFingerprint: async function () {
        return o("WAWebSyncdKeyCallbacksApi").getDeviceFingerprint();
      },
      triggerAppStateSyncCompletedFromBridge: function () {
        o("WAWebCmd").Cmd.onAppStateSyncCompletedFromBridge();
      },
    };
    l.SyncdBridgeApi = e;
  },
  98,
);
