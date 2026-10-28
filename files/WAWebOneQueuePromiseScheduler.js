__d(
  "WAWebOneQueuePromiseScheduler",
  [
    "Promise",
    "TaskSchedulerError",
    "TaskSchedulerPriority",
    "WACustomError",
    "WAPromiseQueue",
    "WAPromiseTimeout",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var r = t.lifecycleListener,
        a = t.name,
        i = t.timeoutMs,
        l = new (o("WAPromiseQueue").PromiseQueue)(),
        s = 0;
      return {
        run: function (u, c) {
          var t,
            d,
            m = (t = c.name) != null ? t : "anonymous",
            p = a + ":" + m + ":" + s++,
            _ =
              (d = c.priority) != null
                ? d
                : o("TaskSchedulerPriority").NORMAL_PRIORITY,
            f = o("WATimeUtils").performanceAbsoluteNow();
          r({ name: m, priority: _, taskId: p, time: f, type: "queued" });
          var g = l.enqueue(function () {
            var t = o("WATimeUtils").performanceAbsoluteNow();
            return (
              r({
                name: m,
                priority: _,
                taskId: p,
                time: t,
                type: "granted",
                waitTimeMs: t - f,
              }),
              o("WAPromiseTimeout")
                .promiseTimeout(
                  new (e || (e = n("Promise")))(function (e) {
                    return e(u());
                  }),
                  i,
                )
                .then(
                  function (e) {
                    var t = o("WATimeUtils").performanceAbsoluteNow();
                    return (
                      r({
                        name: m,
                        taskId: p,
                        time: t,
                        totalTimeMs: t - f,
                        type: "completed",
                      }),
                      e
                    );
                  },
                  function (e) {
                    var t = o("WATimeUtils").performanceAbsoluteNow();
                    throw e instanceof o("WACustomError").TimeoutError
                      ? (r({
                          name: m,
                          taskId: p,
                          time: t,
                          totalTimeMs: t - f,
                          type: "stuck",
                        }),
                        new (o("TaskSchedulerError").TaskSchedulerTimeoutError)(
                          a,
                          p,
                        ))
                      : (r({
                          error: e,
                          name: m,
                          taskId: p,
                          time: t,
                          totalTimeMs: t - f,
                          type: "failed",
                        }),
                        e);
                  },
                )
            );
          });
          return { promise: g };
        },
      };
    }
    l.makeOneQueuePromiseScheduler = s;
  },
  98,
);
