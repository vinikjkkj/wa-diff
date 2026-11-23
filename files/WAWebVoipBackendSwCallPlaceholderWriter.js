__d(
  "WAWebVoipBackendSwCallPlaceholderWriter",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebDBProcessMessage",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebVoipBackendCallLogPlaceholderTargetResolver",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallOfferStanzaParser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(t) {
      var n = null;
      try {
        var a;
        if (
          !o(
            "WAWebVoipCallLogPlaceholderTracker",
          ).isOfflineCallLogOrderingEnabled()
        )
          return;
        var i = o("WAWebVoipCallOfferStanzaParser").parseCallOfferStanza(t);
        if (
          i == null ||
          ((n = i.callId), o("WAWebUserUtils").isMeAccount(i.callCreator))
        )
          return;
        var l = await o(
          "WAWebVoipBackendCallLogPlaceholderTargetResolver",
        ).getCallLogPlaceholderTargetDetails({
          callCreatorWid: i.callCreator,
          callId: i.callId,
          groupJid: i.groupJid,
        });
        if (l == null) return;
        var c = l.callCreatorUserWid,
          d = l.chatId,
          m = l.fromMe,
          p = l.msgKeyId,
          _ = l.participant,
          f = (a = i.groupJid) != null ? a : d,
          g = new (r("WAWebMsgKey"))({
            remote: f,
            fromMe: m,
            id: p,
            participant: _,
          }),
          h = await o("WAWebSchemaMessage")
            .getMessageTable()
            .get(String(g), !1);
        if (h != null) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:sw] placeholder callId=",
                " exists, skip",
              ])),
            i.callId,
          );
          return;
        }
        var y = {
          type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
          kind: o("WAWebMsgType").MsgKind.CallLog,
          viewMode:
            o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME,
          callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Unknown,
          isVideoCall: i.isVideoCall,
          callCreator: c,
          from: c,
          t: i.t,
          id: g,
          to: f,
        };
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:sw] writing offline placeholder for callId=",
              "",
            ])),
          i.callId,
        ),
          await o("WAWebDBProcessMessage").storeMessages([y], f));
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:sw] failed to write offline placeholder for callId=",
                "",
              ])),
            n != null ? n : "<unparsed>",
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-sw-placeholder-write-error", { sampling: 0.1 });
      }
    }
    l.maybeWriteSwOfflineCallPlaceholder = c;
  },
  98,
);
