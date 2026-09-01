__d(
  "WAWebPersistedQueuesRegistry",
  [
    "WAWebAddonDeletionQueueDef",
    "WAWebKeyShareQueueDef",
    "WAWebResendMsgQueueDef",
    "WAWormQueue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        addonDeletion: o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE,
        resendGroupMsg: o("WAWebResendMsgQueueDef").RESEND_GROUP_MSG_QUEUE,
        resendUserMsg: o("WAWebResendMsgQueueDef").RESEND_USER_MSG_QUEUE,
        sendRequestedKeyShare: o("WAWebKeyShareQueueDef")
          .SEND_REQUESTED_KEY_SHARE_QUEUE,
      },
      s = "wa_web_persisted_queues",
      u = {
        addonDeletion: e.addonDeletion.store,
        resendGroupMsg: e.resendGroupMsg.store,
        resendUserMsg: e.resendUserMsg.store,
        sendRequestedKeyShare: e.sendRequestedKeyShare.store,
      };
    function c(t) {
      var n;
      ((n = o("WAWormQueue")).bindWAWormQueue(
        t,
        "addonDeletion",
        e.addonDeletion,
      ),
        n.bindWAWormQueue(t, "resendGroupMsg", e.resendGroupMsg),
        n.bindWAWormQueue(t, "resendUserMsg", e.resendUserMsg),
        n.bindWAWormQueue(t, "sendRequestedKeyShare", e.sendRequestedKeyShare));
    }
    ((l.PERSISTED_QUEUES_DB_ALIAS = s),
      (l.persistedQueueStores = u),
      (l.bindPersistedQueues = c));
  },
  98,
);
