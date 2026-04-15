__d(
  "WAWebSyncdBridgeApi",
  [
    "WAWebCmd",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdKeyCallbacksApi",
    "WAWebSyncdOrphan",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      checkOrphanMutations: function (t) {
        var e = t.chatIds,
          n = t.msgIds,
          r = t.threadIds;
        return o("WAWebSyncdOrphan").checkOrphanMutations(n, e, r);
      },
      handleSyncdFatal: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebSyncdDbCallbacksApi").handleSyncdFatal();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getDeviceFingerprint: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebSyncdKeyCallbacksApi").getDeviceFingerprint();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      triggerAppStateSyncCompletedFromBridge: function () {
        o("WAWebCmd").Cmd.onAppStateSyncCompletedFromBridge();
      },
    };
    l.SyncdBridgeApi = e;
  },
  98,
);
