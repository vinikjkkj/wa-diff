__d(
  "WACommonTaskScheduler",
  ["NativeSchedulerTickStrategy", "TaskScheduler"],
  function (t, n, r, o, a, i, l) {
    var e = o("TaskScheduler").taskScheduler(
        "wa-common",
        { concurrency: 10 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      ),
      s = e;
    l.default = s;
  },
  98,
);
