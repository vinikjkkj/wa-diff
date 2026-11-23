__d(
  "NativeSchedulerTickStrategy",
  ["IntervalTickStrategy", "TaskSchedulerPriority", "WAPromiseDelays"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.tick = function (t) {
            switch (t) {
              case o("TaskSchedulerPriority").BLOCKING_PRIORITY:
                return globalThis.scheduler.postTask(function () {}, {
                  priority: "user-blocking",
                });
              case o("TaskSchedulerPriority").HIGH_PRIORITY:
                return globalThis.scheduler.postTask(function () {}, {
                  priority: "user-visible",
                });
              case o("TaskSchedulerPriority").BACKGROUND_PRIORITY:
                return new Promise(function (e) {
                  globalThis.scheduler.postTask(
                    async function () {
                      (await o("WAPromiseDelays").delayMs(100), e());
                    },
                    { priority: "background" },
                  );
                });
              default:
                return globalThis.scheduler.postTask(function () {}, {
                  priority: "background",
                });
            }
          }),
          e
        );
      })(),
      s = null;
    function u() {
      var t;
      return s != null
        ? s
        : typeof ((t = globalThis.scheduler) == null ? void 0 : t.postTask) !=
            "function"
          ? ((s = new (r("IntervalTickStrategy"))()), s)
          : ((s = new e()), s);
    }
    ((l.NativeSchedulerTickStrategy = e),
      (l.makeNativeSchedulerTickStrategy = u));
  },
  98,
);
