__d(
  "WAWebLabyrinthTaskScheduler",
  ["NativeSchedulerTickStrategy", "TaskScheduler", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
      return (
        e == null &&
          (e = o("TaskScheduler").taskScheduler(
            "wabyrinth",
            {
              concurrency: 1,
              promotionTimeoutMs: o("WATimeUtils").MINUTE_MILLISECONDS,
            },
            o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
          )),
        e
      );
    }
    l.getLabyrinthTaskScheduler = s;
  },
  98,
);
