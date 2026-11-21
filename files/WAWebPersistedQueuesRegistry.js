__d(
  "WAWebPersistedQueuesRegistry",
  [
    "Promise",
    "WAWebAddonDeletionQueueDef",
    "WAWebInboundMsgQueueDef",
    "WAWebKeyShareQueueDef",
    "WAWebMetaAiThreadServerDeleteQueueDef",
    "WAWebPersistedQueueIds",
    "WAWebResendMsgQueueDef",
    "WAWormQueue",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        addonDeletion: o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE,
        inboundMsg: o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE,
        metaAiThreadServerDelete: o("WAWebMetaAiThreadServerDeleteQueueDef")
          .META_AI_THREAD_SERVER_DELETE_QUEUE,
        resendGroupMsg: o("WAWebResendMsgQueueDef").RESEND_GROUP_MSG_QUEUE,
        resendUserMsg: o("WAWebResendMsgQueueDef").RESEND_USER_MSG_QUEUE,
        sendRequestedKeyShare: o("WAWebKeyShareQueueDef")
          .SEND_REQUESTED_KEY_SHARE_QUEUE,
      },
      u = "wa_web_persisted_queues",
      c = {
        addonDeletion: s.addonDeletion.store,
        inboundMsg: s.inboundMsg.store,
        metaAiThreadServerDelete: s.metaAiThreadServerDelete.store,
        resendGroupMsg: s.resendGroupMsg.store,
        resendUserMsg: s.resendUserMsg.store,
        sendRequestedKeyShare: s.sendRequestedKeyShare.store,
      };
    function d(e) {
      var t;
      ((t = o("WAWormQueue")).bindWAWormQueue(
        e,
        "addonDeletion",
        s.addonDeletion,
      ),
        t.bindWAWormQueue(e, "inboundMsg", s.inboundMsg),
        t.bindWAWormQueue(
          e,
          "metaAiThreadServerDelete",
          s.metaAiThreadServerDelete,
        ),
        t.bindWAWormQueue(e, "resendGroupMsg", s.resendGroupMsg),
        t.bindWAWormQueue(e, "resendUserMsg", s.resendUserMsg),
        t.bindWAWormQueue(e, "sendRequestedKeyShare", s.sendRequestedKeyShare));
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield (e || (e = n("Promise"))).all([
            _(s.inboundMsg),
            _(s.metaAiThreadServerDelete),
            _(s.resendGroupMsg),
            _(s.resendUserMsg),
            _(s.sendRequestedKeyShare),
          ]);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.read({ limit: 1, order: "desc" }),
            n = t[0];
          o("WAWebPersistedQueueIds").recordNewestStoredQueueId(
            e,
            n == null ? void 0 : n.queueId,
          );
        })),
        f.apply(this, arguments)
      );
    }
    ((l.PERSISTED_QUEUES_DB_ALIAS = u),
      (l.persistedQueueStores = c),
      (l.bindPersistedQueues = d),
      (l.recordNewestStoredQueueIds = m));
  },
  98,
);
