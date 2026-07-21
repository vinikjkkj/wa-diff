__d(
  "WAWebPersistedJobTaskScheduler",
  ["NativeSchedulerTickStrategy", "TaskScheduler"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = {
        run: function (t, n) {
          var e = c().run(t, { name: n == null ? void 0 : n.name });
          return { promise: e.promise };
        },
      },
      u = s;
    function c() {
      return (
        e == null &&
          (e = o("TaskScheduler").taskScheduler(
            "jobs-manager",
            { concurrency: 20, timeoutMs: 2e4, failOnTimeout: !1 },
            o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
          )),
        e
      );
    }
    l.default = u;
  },
  98,
);
