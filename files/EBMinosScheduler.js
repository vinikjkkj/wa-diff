__d(
  "EBMinosScheduler",
  ["MsgrSchedulerQPL", "NativeSchedulerTickStrategy", "TaskScheduler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if (e == null) {
        var t = o("TaskScheduler").taskScheduler(
          "L1.1",
          {
            concurrency: 1,
            failOnTimeout: !0,
            promotionTimeoutMs: 1e3,
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
    l.l11Scheduler = s;
  },
  98,
);
