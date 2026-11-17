__d(
  "WAWebCommonTaskScheduler",
  ["NativeSchedulerTickStrategy", "TaskScheduler", "WAWebJobsMigrationGating"],
  function (t, n, r, o, a, i, l) {
    var e = o("TaskScheduler").taskScheduler(
        "wa-common",
        { concurrency: 10 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      ),
      s = o("TaskScheduler").taskScheduler(
        "wa-common-detached",
        { concurrency: 10, detached: !0 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      ),
      u = {
        name: e.name,
        run: function (t, n) {
          return d().run(t, n);
        },
        yield: function (t) {
          return d().yield(t);
        },
      },
      c = u;
    function d() {
      return o("WAWebJobsMigrationGating").isJobsManagerDecommissioned()
        ? s
        : e;
    }
    l.default = c;
  },
  98,
);
