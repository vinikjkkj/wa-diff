__d(
  "WAWebVoipTransferredCallSetup",
  [
    "WALogger",
    "WAWebVoipCallIdProvider",
    "WAWebVoipGatingUtils",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipTransferredCallRegistry",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = e.callId,
        n = e.rootCallCreator,
        r = e.rootCallId;
      (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!1),
        o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
        o("WAWebVoipCallIdProvider").resetPendingCallId(),
        o("WAWebVoipTransferredCallRegistry").registerTransferredCall(t, {
          rootCallId: r,
          rootCallCreatorWid: o("WAWebWidFactory").createWid(n),
        }));
    }
    function c(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: transferCall: started by native rootCallId=",
            " callId=",
            "",
          ])),
        t.rootCallId,
        t.callId,
      ),
        u(t));
    }
    function d(e) {
      var t = e.callId,
        n = e.rootCallId;
      (o("WAWebVoipTransferredCallRegistry").unregisterTransferredCall(t),
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferCall: native start failed rootCallId=",
                " callId=",
                "",
              ])),
            n,
            t,
          )
          .sendLogs("voip-native-transfer-lobby-start-failed"));
    }
    ((l.prepareForTransferredCall = u),
      (l.registerCallTransferStartedByNative = c),
      (l.unregisterCallTransferStartedByNative = d));
  },
  98,
);
