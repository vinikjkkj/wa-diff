__d(
  "NativeSchedulerTickStrategy",
  [
    "IntervalTickStrategy",
    "Promise",
    "TaskSchedulerPriority",
    "WAPromiseDelays",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.tick = function (r) {
            switch (r) {
              case o("TaskSchedulerPriority").BLOCKING_PRIORITY:
                return globalThis.scheduler.postTask(function () {}, {
                  priority: "user-blocking",
                });
              case o("TaskSchedulerPriority").HIGH_PRIORITY:
                return globalThis.scheduler.postTask(function () {}, {
                  priority: "user-visible",
                });
              case o("TaskSchedulerPriority").BACKGROUND_PRIORITY:
                return new (e || (e = n("Promise")))(function (e) {
                  globalThis.scheduler.postTask(
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      (yield o("WAPromiseDelays").delayMs(100), e());
                    }),
                    { priority: "background" },
                  );
                });
              default:
                return globalThis.scheduler.postTask(function () {}, {
                  priority: "background",
                });
            }
          }),
          t
        );
      })(),
      u = null;
    function c() {
      var e;
      return u != null
        ? u
        : typeof ((e = globalThis.scheduler) == null ? void 0 : e.postTask) !=
            "function"
          ? ((u = new (r("IntervalTickStrategy"))()), u)
          : ((u = new s()), u);
    }
    ((l.NativeSchedulerTickStrategy = s),
      (l.makeNativeSchedulerTickStrategy = c));
  },
  98,
);
