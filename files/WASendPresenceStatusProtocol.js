__d(
  "WASendPresenceStatusProtocol",
  ["WASmaxPresenceAvailabilityRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.name,
        n = e.status;
      return o("WASmaxPresenceAvailabilityRPC").sendAvailabilityRPC({
        presenceType: n,
        presenceName: t,
      });
    }
    l.sendPresenceStatusProtocol = e;
  },
  98,
);
