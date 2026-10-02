__d(
  "WAServerRemoteProceduresHandlers",
  [
    "Promise",
    "WAHandleErrorStanza",
    "WAHandleIncomingMsg",
    "WAHandleInfoBulletin",
    "WAHandlePrekeyContactIDChangedNotification",
    "WAHandlePrekeyDigestNotification",
    "WAHandlePrekeyLowCountNotification",
    "WAHandleReceipt",
    "WAHandleServerPing",
    "WAHandleStreamError",
    "WALogger",
    "WAServerRPC",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      var r, a, i, l, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
      return o("WAServerRPC").makeServerRPC({
        abprops: {
          handleAbPropsRefreshNotification:
            (r = t.abprops) == null
              ? void 0
              : r.handleAbPropsRefreshNotification,
        },
        accountSync: null,
        appdataMessage: {
          handleAppdataMessage:
            (a = t.appdataMessage) == null ? void 0 : a.handleAppdataMessage,
          handlePeerAppdataReceipt:
            (i = t.appdataMessage) == null
              ? void 0
              : i.handlePeerAppdataReceipt,
          handlePeerAppdataRetryReceipt:
            (l = t.appdataMessage) == null
              ? void 0
              : l.handlePeerAppdataRetryReceipt,
        },
        broadcast: {
          handleBroadcastMessage: function (r) {
            var t = r.makeAck;
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Broadcast messages are not supported",
                  ])),
              ),
              (u || (u = n("Promise"))).resolve(t())
            );
          },
        },
        call: {
          handleRtcE2eeCallEvent:
            (c = t.call) == null ? void 0 : c.handleRtcE2eeCallEvent,
        },
        clientLog: null,
        comms: {
          handleEdgeRoutingInfo: o("WAHandleInfoBulletin")
            .handleEdgeRoutingInfo,
          handleServerPing: o("WAHandleServerPing").handleServerPing,
        },
        error: {
          handleErrorStanza: o("WAHandleErrorStanza").handleErrorStanza,
          handleSmaxErrorStanza: o("WAHandleErrorStanza").handleSmaxErrorStanza,
        },
        fb: {
          handleFbDeviceChangeNotification:
            (d = t.fb) == null ? void 0 : d.handleFbDeviceChangeNotification,
          handleFbMultiwayNotification:
            (m = t.fb) == null ? void 0 : m.handleFbMultiwayNotification,
          handleFbThreadNotification:
            (p = t.fb) == null ? void 0 : p.handleFbThreadNotification,
        },
        groupMessage: {
          handleGroupDirtyBit: null,
          handleGroupChatState:
            (_ = t.groupMessage) == null ? void 0 : _.handleGroupChatState,
          handleGroupMessage: o("WAHandleIncomingMsg").handleGroupMessage,
          handleGroupNotification:
            (f = t.groupMessage) == null ? void 0 : f.handleGroupNotification,
          handleGroupReceipt:
            (g = t.groupMessage) == null ? void 0 : g.handleGroupReceipt,
          handleGroupRetryReceipt:
            (h = t.groupMessage) == null ? void 0 : h.handleGroupRetryReceipt,
        },
        individualMessage: {
          handleIndividualMessage: o("WAHandleIncomingMsg")
            .handleIncomingIndividualMsg,
          handleIndividualReceipt: o("WAHandleReceipt").handleIndividualReceipt,
          handleIndividualChatState:
            (y = t.individualMessage) == null
              ? void 0
              : y.handleIndividualChatState,
          handleIndividualRetryReceipt:
            (C = t.individualMessage) == null
              ? void 0
              : C.handleIndividualRetryReceipt,
        },
        login: {
          handleLoginFailure:
            (b = t.login) == null ? void 0 : b.handleLoginFailure,
          handleLoginSuccess:
            (v = t.login) == null ? void 0 : v.handleLoginSuccess,
        },
        md: null,
        newsletter: null,
        offline: {
          handleOfflineEnd: o("WAHandleInfoBulletin").handleOfflineEnd,
          handleOfflineStart: o("WAHandleInfoBulletin").handleOfflineStart,
          handleThreadMetadata:
            (S = t.offline) == null ? void 0 : S.handleThreadMetadata,
        },
        peerMessage: {
          handlePeerMessage: function (t) {
            var e = t.makeAck;
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Peer messages are not supported",
                  ])),
              ),
              (u || (u = n("Promise"))).resolve(e())
            );
          },
        },
        prekey: {
          handlePrekeyContactIDChangedNotification: o(
            "WAHandlePrekeyContactIDChangedNotification",
          ).handlePrekeyContactIDChangedNotification,
          handlePrekeyDigestNotification: o("WAHandlePrekeyDigestNotification")
            .handlePrekeyDigestNotification,
          handlePrekeyLowCountNotification: o(
            "WAHandlePrekeyLowCountNotification",
          ).handlePrekeyLowCountNotification,
        },
        presence: null,
        spam: { handleSpam: (R = t.spam) == null ? void 0 : R.handleSpam },
        status: null,
        streamError: {
          handleAckKick: o("WAHandleStreamError").handleAckKick,
          handleBadMac: o("WAHandleStreamError").handleBadMac,
          handleConflict: o("WAHandleStreamError").handleConflict,
          handlePingKick: o("WAHandleStreamError").handlePingKick,
          handleStreamErrorCode: o("WAHandleStreamError").handleStreamErrorCode,
          handleXmlNotWellFormed: o("WAHandleStreamError")
            .handleXmlNotWellFormed,
        },
        syncd: null,
        usync: null,
      });
    }
    l.makeServerRemoteProcedureHandlers = c;
  },
  98,
);
