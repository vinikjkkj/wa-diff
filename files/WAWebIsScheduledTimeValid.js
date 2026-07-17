__d(
  "WAWebIsScheduledTimeValid",
  ["WAWebScheduledMessagesGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
          "WAWebScheduledMessagesGatingUtils",
        ).getScheduledMessagesMinDurationSeconds(),
        r = o(
          "WAWebScheduledMessagesGatingUtils",
        ).getScheduledMessagesMaxDurationSeconds(),
        a = Math.floor(t / 60) * 60;
      return e - a >= n && e - t <= r;
    }
    l.default = e;
  },
  98,
);
