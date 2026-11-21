__d(
  "WAWebInboundMsgQueueDef",
  ["WAWormQueueDef"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        o("WAWormQueueDef").WA_WORM_ORDERED_QUEUE_STORE,
        {
          indexes: {
            chatKey: { fields: ["chatKey", "queueId"], unique: !1 },
            priority: { fields: ["priority", "queueId"], unique: !1 },
          },
        },
      ),
      s = o("WAWormQueueDef").defineWAWormQueue("inboundMsg", e);
    l.INBOUND_MSG_QUEUE = s;
  },
  98,
);
