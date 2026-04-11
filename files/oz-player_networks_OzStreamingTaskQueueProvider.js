__d(
  "oz-player/networks/OzStreamingTaskQueueProvider",
  [
    "oz-player/scheduling/OzRoundRobinPriorityTaskQueue",
    "oz-player/scheduling/OzSequentialTaskScheduler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Map(),
      u = 2,
      c = 2,
      d = 6e4;
    function m(t) {
      var n = e.get(t);
      if (!n) {
        n = new (r("oz-player/scheduling/OzRoundRobinPriorityTaskQueue"))(u, c);
        var o = new (r("oz-player/scheduling/OzSequentialTaskScheduler"))(n, {
          taskTimeout: d,
        });
        (e.set(t, n), s.set(t, o), o.start());
      }
      return n;
    }
    ((l.OZ_QUEUE_MAX_PRIORITY = u), (l.getQueue = m));
  },
  98,
);
