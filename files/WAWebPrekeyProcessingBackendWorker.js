__d(
  "WAWebPrekeyProcessingBackendWorker",
  [
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "WACryptoLibrary",
    "WAWebReleaseToEventLoop",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = o("TaskScheduler").taskScheduler(
        "signal",
        { concurrency: 1 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    async function u(t, n, r, a) {
      var i = [],
        l = async function (n) {
          var e = await o("WACryptoLibrary").createOutgoingSession(t, n, r);
          e.success
            ? i.push({ success: !0, session: e.value })
            : i.push({ success: !1, error: e.error });
        };
      if (a === !0) for (var u of n) (await l(u), await s.yield());
      else {
        var c = self.performance.now();
        for (var d of n)
          (await l(d),
            self.performance.now() - c > e &&
              (await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              (c = self.performance.now())));
      }
      return i;
    }
    l.createOutgoingSessionBatch = u;
  },
  98,
);
