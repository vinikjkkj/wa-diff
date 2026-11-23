__d(
  "MawCopScheduler",
  ["MsgrSchedulerQPL", "NativeSchedulerTickStrategy", "TaskScheduler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if (e == null) {
        var t = o("TaskScheduler").taskScheduler(
          "cop",
          {
            concurrency: 1,
            failOnTimeout: !0,
            promotionTimeoutMs: 1e5,
            timeoutMs: 1e5,
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
    l.copScheduler = s;
  },
  98,
);
