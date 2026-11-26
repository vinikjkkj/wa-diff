__d(
  "WAWebOfflineResumeMainThread",
  [
    "WAWebBlockingOfflineResumeManager",
    "WAWebNonBlockingOfflineResumeManager",
    "cr:22575",
    "cr:22621",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e = n("cr:22575")) != null ? e : {},
      c = u.maybeRequestPrimarySnapshot,
      d = (s = n("cr:22621")) != null ? s : {},
      m = d.RcodChunkFinder;
    function p(e) {
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
        maybeRequestPrimarySnapshot: c,
        rcodChunkFinder: _(),
      });
    }
    function _() {
      return m != null ? new m() : void 0;
    }
    l.setupMainThreadResume = p;
  },
  98,
);
