__d(
  "WAWebResendMsgQueueDef",
  ["WAWormQueueDef"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = o("WAWormQueueDef")).defineWAWormQueue(
        "resendUserMsg",
        e.WA_WORM_ORDERED_QUEUE_STORE,
      ),
      u = e.defineWAWormQueue("resendGroupMsg", e.WA_WORM_ORDERED_QUEUE_STORE);
    ((l.RESEND_USER_MSG_QUEUE = s), (l.RESEND_GROUP_MSG_QUEUE = u));
  },
  98,
);
