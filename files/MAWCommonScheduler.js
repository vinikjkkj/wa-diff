__d(
  "MAWCommonScheduler",
  ["MsgrSchedulerQPL", "NativeSchedulerTickStrategy", "TaskScheduler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if (e == null) {
        var t = o("TaskScheduler").taskScheduler(
          "msgr-common",
          {
            concurrency: 1,
            failOnTimeout: !0,
            promotionTimeoutMs: 5e3,
            timeoutMs: 3e4,
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
    l.mawCommonScheduler = s;
  },
  98,
);
