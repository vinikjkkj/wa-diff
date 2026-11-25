__d(
  "WAWebOfflineResumeMainThread",
  [
    "WAWebBlockingOfflineResumeManager",
    "WAWebNonBlockingOfflineResumeManager",
    "cr:22575",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:22575")) != null ? e : {},
      u = s.maybeRequestPrimarySnapshot;
    function c(e) {
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
        maybeRequestPrimarySnapshot: u,
      });
    }
    l.setupMainThreadResume = c;
  },
  98,
);
