__d(
  "WAWebHandleHatchAgentStatus",
  ["WAWebHatchAgentStatusManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.activityCode,
        n = e.activityEmoji,
        o = e.activityText;
      if (t == null || t === "online" || o == null || o === "") {
        r("WAWebHatchAgentStatusManager").clearAgentStatus();
        return;
      }
      r("WAWebHatchAgentStatusManager").setAgentStatus({
        activityCode: t,
        activityEmoji: n,
        activityText: o,
      });
    }
    l.handleHatchAgentStatus = e;
  },
  98,
);
