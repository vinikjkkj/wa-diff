__d(
  "WAWormQueueDef",
  ["WormPersistedQueue", "WormPersistedQueueDef"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = importNamespace("WormPersistedQueue").defineWormPersistedQueue,
      l = importNamespace("WormPersistedQueueDef").BASE_QUEUE_STORE,
      s = importNamespace("WormPersistedQueueDef").ORDERED_QUEUE_STORE,
      u = importNamespace("WormPersistedQueueDef").toWormPersistedQueueId,
      c = 50;
    ((i.defineWAWormQueue = e),
      (i.WA_WORM_QUEUE_STORE = l),
      (i.WA_WORM_ORDERED_QUEUE_STORE = s),
      (i.toWAWormQueueId = u),
      (i.WA_WORM_QUEUE_DRAIN_LIMIT = c));
  },
  66,
);
