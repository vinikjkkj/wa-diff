__d(
  "WAWebPersistedQueuesRegistry",
  [
    "WAWebAddonDeletionQueueDef",
    "WAWebInboundMsgQueueDef",
    "WAWebKeyShareQueueDef",
    "WAWebMetaAiThreadServerDeleteQueueDef",
    "WAWebPersistedQueueIds",
    "WAWebResendMsgQueueDef",
    "WAWormQueue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        addonDeletion: o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE,
        inboundMsg: o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE,
        metaAiThreadServerDelete: o("WAWebMetaAiThreadServerDeleteQueueDef")
          .META_AI_THREAD_SERVER_DELETE_QUEUE,
        resendGroupMsg: o("WAWebResendMsgQueueDef").RESEND_GROUP_MSG_QUEUE,
        resendUserMsg: o("WAWebResendMsgQueueDef").RESEND_USER_MSG_QUEUE,
        sendRequestedKeyShare: o("WAWebKeyShareQueueDef")
          .SEND_REQUESTED_KEY_SHARE_QUEUE,
      },
      s = "wa_web_persisted_queues",
      u = {
        addonDeletion: e.addonDeletion.store,
        inboundMsg: e.inboundMsg.store,
        metaAiThreadServerDelete: e.metaAiThreadServerDelete.store,
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
        n.bindWAWormQueue(t, "inboundMsg", e.inboundMsg),
        n.bindWAWormQueue(
          t,
          "metaAiThreadServerDelete",
          e.metaAiThreadServerDelete,
        ),
        n.bindWAWormQueue(t, "resendGroupMsg", e.resendGroupMsg),
        n.bindWAWormQueue(t, "resendUserMsg", e.resendUserMsg),
        n.bindWAWormQueue(t, "sendRequestedKeyShare", e.sendRequestedKeyShare));
    }
    async function d() {
      await Promise.all([
        m(e.inboundMsg),
        m(e.metaAiThreadServerDelete),
        m(e.resendGroupMsg),
        m(e.resendUserMsg),
        m(e.sendRequestedKeyShare),
      ]);
    }
    async function m(e) {
      var t = await e.read({ limit: 1, order: "desc" }),
        n = t[0];
      o("WAWebPersistedQueueIds").recordNewestStoredQueueId(
        e,
        n == null ? void 0 : n.queueId,
      );
    }
    ((l.PERSISTED_QUEUES_DB_ALIAS = s),
      (l.persistedQueueStores = u),
      (l.bindPersistedQueues = c),
      (l.recordNewestStoredQueueIds = d));
  },
  98,
);
