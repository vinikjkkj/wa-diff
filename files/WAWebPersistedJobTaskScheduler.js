__d(
  "WAWebPersistedJobTaskScheduler",
  ["NativeSchedulerTickStrategy", "TaskScheduler"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
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
    var u = {
        run: function (t, n) {
          var e = s().run(t, { name: n == null ? void 0 : n.name });
          return { promise: e.promise };
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
