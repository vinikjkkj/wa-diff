__d(
  "MAWWorkerEvent",
  ["MAWTrackPendingOccamadilloThreads"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["bulkMaybeCreateOrUpdateThread", "createOrUpdateThread"]);
    function s(t, n) {
      typeof n == "object" &&
        typeof (n == null ? void 0 : n.timestamp) == "number" &&
        e.has(t) &&
        o("MAWTrackPendingOccamadilloThreads").markBridgeCallAcked();
    }
    l.logAck = s;
  },
  98,
);
