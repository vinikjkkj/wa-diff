__d(
  "WAWormQueue",
  ["WormCallbacks", "WormQueueDatabase", "WormQueueEarSyncDriver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = importNamespace("WormQueueDatabase").bindWormPersistedQueue,
      l = importNamespace("WormQueueDatabase").logWormQueueDbInitFailure,
      s = importNamespace("WormQueueDatabase").openWormQueueDatabase,
      u = importNamespace("WormCallbacks").setWormCallbacks,
      c = importNamespace("WormQueueEarSyncDriver").makeWormQueueEarSyncDriver;
    ((i.bindWAWormQueue = e),
      (i.logWAWormQueueDbInitFailure = l),
      (i.openWAWormQueueDatabase = s),
      (i.setWAWormCallbacks = u),
      (i.makeWAWormQueueEarSyncDriver = c));
  },
  66,
);
