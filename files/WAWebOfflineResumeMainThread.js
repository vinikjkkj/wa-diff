__d(
  "WAWebOfflineResumeMainThread",
  ["WAWebBlockingOfflineResumeManager", "WAWebNonBlockingOfflineResumeManager"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.initState({
        getBlockingStageManager: function () {
          return new (o(
            "WAWebBlockingOfflineResumeManager",
          ).OfflineBlockingResumeStageManager)();
        },
        getNonblockingStageManager: function (t) {
          return new (o(
            "WAWebNonBlockingOfflineResumeManager",
          ).OfflineNonBlockingResumeStageManager)(t);
        },
      });
    }
    l.setupMainThreadResume = e;
  },
  98,
);
