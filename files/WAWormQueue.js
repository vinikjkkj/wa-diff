__d(
  "WAWormQueue",
  ["WAWormDB", "WormQueueDatabase"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = importNamespace("WormQueueDatabase").bindWormPersistedQueue,
      l = importNamespace("WormQueueDatabase").logWormQueueDbInitFailure,
      s = importNamespace("WormQueueDatabase").openWormQueueDatabase,
      u = importNamespace("WAWormDB").makeWAWormEarSyncDriver;
    ((i.bindWAWormQueue = e),
      (i.logWAWormQueueDbInitFailure = l),
      (i.openWAWormQueueDatabase = s),
      (i.makeWAWormQueueEarSyncDriver = u));
  },
  66,
);
