__d(
  "WAWebVoipWebBridgeApi",
  [
    "WAWebVoipBridgeAVSyncHandlers",
    "WAWebVoipBridgeActivityHandlers",
    "WAWebVoipBridgeCallEntryHandlers",
    "WAWebVoipBridgeCallLogHandlers",
    "WAWebVoipBridgeCallReachabilityHandlers",
    "WAWebVoipBridgeCallStateHandlers",
    "WAWebVoipBridgeCallTransferHandlers",
    "WAWebVoipBridgeChatHandlers",
    "WAWebVoipBridgeContactHandlers",
    "WAWebVoipBridgeInitHandlers",
    "WAWebVoipBridgeMediaStreamHandlers",
    "WAWebVoipBridgeNackHandlers",
    "WAWebVoipBridgeNotificationHandlers",
    "WAWebVoipBridgeSignalingHandlers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
      {},
      o("WAWebVoipBridgeCallEntryHandlers").VoipBridgeCallEntryHandlers,
      o("WAWebVoipBridgeInitHandlers").VoipBridgeInitHandlers,
      o("WAWebVoipBridgeSignalingHandlers").VoipBridgeSignalingHandlers,
      o("WAWebVoipBridgeCallLogHandlers").VoipBridgeCallLogHandlers,
      o("WAWebVoipBridgeNotificationHandlers").VoipBridgeNotificationHandlers,
      o("WAWebVoipBridgeChatHandlers").VoipBridgeChatHandlers,
      o("WAWebVoipBridgeCallStateHandlers").VoipBridgeCallStateHandlers,
      o("WAWebVoipBridgeMediaStreamHandlers").VoipBridgeMediaStreamHandlers,
      o("WAWebVoipBridgeContactHandlers").VoipBridgeContactHandlers,
      o("WAWebVoipBridgeNackHandlers").VoipBridgeNackHandlers,
      o("WAWebVoipBridgeAVSyncHandlers").VoipBridgeAVSyncHandlers,
      o("WAWebVoipBridgeActivityHandlers").VoipBridgeActivityHandlers,
      o("WAWebVoipBridgeCallTransferHandlers").VoipBridgeCallTransferHandlers,
      o("WAWebVoipBridgeCallReachabilityHandlers")
        .VoipBridgeCallReachabilityHandlers,
    );
    l.VoipWebBridgeApi = e;
  },
  98,
);
