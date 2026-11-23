__d(
  "MAWServerRPC",
  [
    "MAWHandleAbPropsRefreshNotification",
    "MAWHandleAppdataMessage",
    "MAWHandleChatState",
    "MAWHandleFailure",
    "MAWHandleFbDeviceChangeNotification",
    "MAWHandleFbMultiwayNotification",
    "MAWHandleFbThreadNotification",
    "MAWHandleGroupNotification",
    "MAWHandleGroupReceipt",
    "MAWHandleGroupRetryReceipt",
    "MAWHandleIndividualRetryReceipt",
    "MAWHandleLoginSuccess",
    "MAWHandlePeerAppdataReceipt",
    "MAWHandlePeerAppdataRetryReceipt",
    "MAWHandleRtcE2eeCallEventNotification",
    "MAWHandleSpam",
    "MAWHandleThreadMetadata",
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
    function c() {
      var t;
      return o("WAServerRPC").makeServerRPC({
        abprops: {
          handleAbPropsRefreshNotification: o(
            "MAWHandleAbPropsRefreshNotification",
          ).handleAbPropsRefreshNotification,
        },
        accountSync: null,
        appdataMessage: {
          handleAppdataMessage: o("MAWHandleAppdataMessage")
            .handleAppdataMessage,
          handlePeerAppdataReceipt: o("MAWHandlePeerAppdataReceipt")
            .handlePeerAppdataReceipt,
          handlePeerAppdataRetryReceipt: o("MAWHandlePeerAppdataRetryReceipt")
            .handlePeerAppdataRetryReceipt,
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
          handleRtcE2eeCallEvent: o("MAWHandleRtcE2eeCallEventNotification")
            .handleRtcE2eeCallEventNotification,
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
          handleFbDeviceChangeNotification: o(
            "MAWHandleFbDeviceChangeNotification",
          ).handleFbDeviceChangeNotification,
          handleFbMultiwayNotification: o("MAWHandleFbMultiwayNotification")
            .handleFbMultiwayNotification,
          handleFbThreadNotification: o("MAWHandleFbThreadNotification")
            .handleFbThreadNotification,
        },
        groupMessage: {
          handleGroupChatState: o("MAWHandleChatState").handleGroupChatState,
          handleGroupDirtyBit: null,
          handleGroupMessage: o("WAHandleIncomingMsg").handleGroupMessage,
          handleGroupNotification: o("MAWHandleGroupNotification")
            .handleGroupNotification,
          handleGroupReceipt: o("MAWHandleGroupReceipt").handleGroupReceipt,
          handleGroupRetryReceipt: o("MAWHandleGroupRetryReceipt")
            .handleGroupRetryReceipt,
        },
        individualMessage: {
          handleIndividualChatState:
            o("MAWHandleChatState").handleIndividualChatState,
          handleIndividualMessage: o("WAHandleIncomingMsg")
            .handleIncomingIndividualMsg,
          handleIndividualReceipt: o("WAHandleReceipt").handleIndividualReceipt,
          handleIndividualRetryReceipt: o("MAWHandleIndividualRetryReceipt")
            .handleIndividualRetryReceipt,
        },
        login: {
          handleLoginFailure: o("MAWHandleFailure").handleLoginFailure,
          handleLoginSuccess: o("MAWHandleLoginSuccess").handleLoginSuccess,
        },
        md: null,
        newsletter: null,
        offline: {
          handleOfflineEnd: o("WAHandleInfoBulletin").handleOfflineEnd,
          handleOfflineStart: o("WAHandleInfoBulletin").handleOfflineStart,
          handleThreadMetadata: o("MAWHandleThreadMetadata")
            .handleThreadMetadata,
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
        spam: { handleSpam: o("MAWHandleSpam").handleSpam },
        status: null,
        streamError: {
          handleAckKick: (t = o("WAHandleStreamError")).handleAckKick,
          handleBadMac: t.handleBadMac,
          handleConflict: t.handleConflict,
          handlePingKick: t.handlePingKick,
          handleStreamErrorCode: t.handleStreamErrorCode,
          handleXmlNotWellFormed: t.handleXmlNotWellFormed,
        },
        syncd: null,
        usync: null,
      });
    }
    l.makeServerRPC = c;
  },
  98,
);
