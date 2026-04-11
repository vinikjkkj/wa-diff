__d(
  "TaskSchedulerTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      CANCELLED: -3,
      STUCK: -2,
      FAILED: -1,
      PENDING: 0,
      RUNNING: 1,
      COMPLETED: 2,
    });
    i.RunState = e;
  },
  66,
);
