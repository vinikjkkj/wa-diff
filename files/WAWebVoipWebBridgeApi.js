__d(
  "WAWebVoipWebBridgeApi",
  [
    "WAWebVoipBridgeAVSyncHandlers",
    "WAWebVoipBridgeActivityHandlers",
    "WAWebVoipBridgeCallEntryHandlers",
    "WAWebVoipBridgeCallLogHandlers",
    "WAWebVoipBridgeCallStateHandlers",
    "WAWebVoipBridgeChatHandlers",
    "WAWebVoipBridgeContactHandlers",
    "WAWebVoipBridgeInitHandlers",
    "WAWebVoipBridgeMediaStreamHandlers",
    "WAWebVoipBridgeMicSilenceToast",
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
    );
    ((l.MICROPHONE_SILENCE_TOAST_ID = o(
      "WAWebVoipBridgeMicSilenceToast",
    ).MICROPHONE_SILENCE_TOAST_ID),
      (l.VoipWebBridgeApi = e));
  },
  98,
);
