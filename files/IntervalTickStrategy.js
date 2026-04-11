__d(
  "IntervalTickStrategy",
  ["TaskSchedulerPriority", "WAPromiseDelays", "WAPromiseQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new (o("WAPromiseQueue").PromiseQueue)();
      }
      var t = e.prototype;
      return (
        (t.tick = function (t) {
          return this.$1.enqueue(function () {
            var e;
            switch (t) {
              case o("TaskSchedulerPriority").BLOCKING_PRIORITY:
                return;
              case o("TaskSchedulerPriority").BACKGROUND_PRIORITY:
                e = 100;
                break;
              default:
                e = 0;
                break;
            }
            return o("WAPromiseDelays").delayMs(e);
          });
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
