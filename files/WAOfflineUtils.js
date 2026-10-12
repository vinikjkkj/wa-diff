__d(
  "WAOfflineUtils",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["INIT", "OFFLINE_RESUME", "ONLINE"]),
      l = n("$InternalEnum")({
        Initializing: "initializing",
        Failed: "failed",
        Processing: "processing",
        Complete: "complete",
      });
    ((i.ServerRPCMode = e), (i.WAClientInfraOfflineProgress = l));
  },
  66,
);
