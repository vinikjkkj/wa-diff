__d(
  "WAWebKeyShareQueueDef",
  ["WAWormQueueDef"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAWormQueueDef").defineWAWormQueue(
      "sendRequestedKeyShare",
      o("WAWormQueueDef").WA_WORM_ORDERED_QUEUE_STORE,
    );
    l.SEND_REQUESTED_KEY_SHARE_QUEUE = e;
  },
  98,
);
