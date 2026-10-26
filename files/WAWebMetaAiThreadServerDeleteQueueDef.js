__d(
  "WAWebMetaAiThreadServerDeleteQueueDef",
  ["WAWormQueueDef"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAWormQueueDef").defineWAWormQueue(
      "metaAiThreadServerDelete",
      o("WAWormQueueDef").WA_WORM_ORDERED_QUEUE_STORE,
    );
    l.META_AI_THREAD_SERVER_DELETE_QUEUE = e;
  },
  98,
);
