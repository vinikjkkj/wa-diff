__d(
  "WebMpsScheduler",
  [
    "MsgrSchedulerQPL",
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if (e == null) {
        var t,
          n = o("TaskScheduler").taskScheduler(
            "MPS",
            {
              concurrency: (t = r("justknobx"))._("4338"),
              failOnTimeout: !1,
              promotionTimeoutMs: t._("4339"),
              timeoutMs: t._("4337"),
            },
            o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
          );
        (n.setLifecycleListener(
          o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener({
            defaultSamplingRate: t._("4540"),
          }),
        ),
          (e = n));
      }
      return e;
    }
    l.mpsScheduler = s;
  },
  98,
);
