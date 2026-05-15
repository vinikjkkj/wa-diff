__d(
  "WAWebIsScheduledTimeValid",
  ["WAWebScheduledMessagesGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e - t,
        r = o(
          "WAWebScheduledMessagesGatingUtils",
        ).getScheduledMessagesMinDurationSeconds(),
        a = o(
          "WAWebScheduledMessagesGatingUtils",
        ).getScheduledMessagesMaxDurationSeconds();
      return n >= r && n <= a;
    }
    l.default = e;
  },
  98,
);
