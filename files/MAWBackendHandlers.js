__d(
  "MAWBackendHandlers",
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      abprops: {
        handleAbPropsRefreshNotification: o(
          "MAWHandleAbPropsRefreshNotification",
        ).handleAbPropsRefreshNotification,
      },
      appdataMessage: {
        handleAppdataMessage: o("MAWHandleAppdataMessage").handleAppdataMessage,
        handlePeerAppdataReceipt: o("MAWHandlePeerAppdataReceipt")
          .handlePeerAppdataReceipt,
        handlePeerAppdataRetryReceipt: o("MAWHandlePeerAppdataRetryReceipt")
          .handlePeerAppdataRetryReceipt,
      },
      call: {
        handleRtcE2eeCallEvent: o("MAWHandleRtcE2eeCallEventNotification")
          .handleRtcE2eeCallEventNotification,
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
        handleGroupNotification: o("MAWHandleGroupNotification")
          .handleGroupNotification,
        handleGroupReceipt: o("MAWHandleGroupReceipt").handleGroupReceipt,
        handleGroupRetryReceipt: o("MAWHandleGroupRetryReceipt")
          .handleGroupRetryReceipt,
      },
      individualMessage: {
        handleIndividualChatState:
          o("MAWHandleChatState").handleIndividualChatState,
        handleIndividualRetryReceipt: o("MAWHandleIndividualRetryReceipt")
          .handleIndividualRetryReceipt,
      },
      login: {
        handleLoginFailure: o("MAWHandleFailure").handleLoginFailure,
        handleLoginSuccess: o("MAWHandleLoginSuccess").handleLoginSuccess,
      },
      offline: {
        handleThreadMetadata: o("MAWHandleThreadMetadata").handleThreadMetadata,
      },
      spam: { handleSpam: o("MAWHandleSpam").handleSpam },
    };
    l.serverRpcHandlers = e;
  },
  98,
);
