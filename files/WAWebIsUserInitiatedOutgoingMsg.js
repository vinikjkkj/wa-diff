__d(
  "WAWebIsUserInitiatedOutgoingMsg",
  [
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSilentPaymentMsg",
    "WAWebSilentProtocolMsg",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.type !== o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        e.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
        !o("WAWebSilentProtocolMsg").isSilentProtocolMsg(e) &&
        !o("WAWebSilentPaymentMsg").isSilentPaymentMsg(e) &&
        (o("WAWebMsgGetters").getIsSentByMe(e) ||
          (e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && e.id.fromMe))
      );
    }
    l.isUserInitiatedOutgoingMsg = e;
  },
  98,
);
