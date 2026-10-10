__d(
  "WAWebHatchBrowserControl",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1e3,
      l = 6e5;
    function s(e) {
      return e.kind === "driving";
    }
    function u(e, t) {
      return e.kind === "driving" && t.kind === "driving"
        ? e.lease.browserTaskID === t.lease.browserTaskID &&
            e.lease.expiresAtMs === t.lease.expiresAtMs
        : e.kind === t.kind;
    }
    function c(t) {
      if (t <= 0) return 0;
      var n = Math.min(Math.max(Math.floor(t / 2), e), l);
      return Math.min(n, t);
    }
    ((i.isDriving = s), (i.isSameControlState = u), (i.heartbeatDelayMs = c));
  },
  66,
);
