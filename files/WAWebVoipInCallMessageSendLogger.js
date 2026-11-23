__d(
  "WAWebVoipInCallMessageSendLogger",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallUserJourneyGating",
    "WAWebLidMigrationUtils",
    "WAWebVoipCallStateUtils",
    "WAWebVoipWaCallEnums",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        o("WAWebVoipCallStateUtils").isCallConnected(e) ||
        o("WAWebVoipCallStateUtils").isCallOutgoing(e) ||
        e === o("WAWebVoipWaCallEnums").CallState.AcceptReceived
      );
    }
    function u(e) {
      try {
        var t = r("WAWebCallCollection").activeCall;
        if (t == null || !s(t.getState())) return;
        var n = t.isGroup ? t.groupJid : t.peerJid,
          a = o("WAWebLidMigrationUtils").toCommonAddressingMode(n, e.id),
          i = a[0],
          l = a[1];
        if (
          i == null ||
          !i.equals(l) ||
          !o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()
        )
          return;
        c(t);
      } catch (e) {
        d(e);
      }
    }
    async function c(e) {
      try {
        var t = await r("JSResourceForInteraction")(
            "WAWebVoipInCallMessageSendJourneyLog",
          )
            .__setRef("WAWebVoipInCallMessageSendLogger")
            .load(),
          n = t.logMessageSendInLinkedChat;
        if (r("WAWebCallCollection").activeCall !== e) return;
        n();
      } catch (e) {
        d(e);
      }
    }
    function d(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: in-call message send logging failed",
            ])),
        )
        .catching(r("getErrorSafe")(t));
    }
    l.logInCallMessageSendIfNeeded = u;
  },
  98,
);
