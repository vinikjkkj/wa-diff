__d(
  "WAMediaManagerWorkerScheduler",
  ["MsgrSchedulerQPL", "NativeSchedulerTickStrategy", "TaskScheduler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if (e == null) {
        var t = o("TaskScheduler").taskScheduler(
          "MediaManager",
          {
            concurrency: 16,
            failOnTimeout: !0,
            promotionTimeoutMs: 3e4,
            timeoutMs: 6e4,
          },
          o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
        );
        (t.setLifecycleListener(
          o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener(),
        ),
          (e = t));
      }
      return e;
    }
    l.mediaManagerWorkerScheduler = s;
  },
  98,
);
