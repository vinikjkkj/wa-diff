__d(
  "WAWebPrekeyProcessingBackendWorker",
  [
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "WACryptoLibrary",
    "WAPromiseDelays",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = o("TaskScheduler").taskScheduler(
        "signal",
        { concurrency: 1 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = [],
              u = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = yield o("WACryptoLibrary").createOutgoingSession(
                      t,
                      e,
                      a,
                    );
                    n.success
                      ? l.push({ success: !0, session: n.value })
                      : l.push({ success: !1, error: n.error });
                  },
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })();
            if (i === !0) for (var c of r) (yield u(c), yield s.yield());
            else {
              var d = self.performance.now();
              for (var m of r)
                (yield u(m),
                  self.performance.now() - d > e &&
                    (yield o("WAPromiseDelays").releaseToEventLoop(),
                    (d = self.performance.now())));
            }
            return l;
          },
        )),
        c.apply(this, arguments)
      );
    }
    l.createOutgoingSessionBatch = u;
  },
  98,
);
