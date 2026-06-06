__d(
  "WAWebVoipActionWriteCallLogPlaceholder",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebDBGetByParentMsgKey",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessageOrphans",
    "WAWebSendMsgChatAction",
    "WAWebViewMode.flow",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallsTabPanelManager",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    async function d(t) {
      var n = t.callCreator,
        a = t.callId,
        i = t.groupJid,
        l = t.isVideoCall,
        d = t.t;
      try {
        var m = await o("WAWebCallLogUtils").getCallLogTargetDetails({
            callCreatorWid: n,
            callId: a,
            groupJid: i,
          }),
          p = m.chatId,
          _ = m.fromMe,
          f = m.msgKeyId,
          g = m.participant,
          h = i != null ? i : p,
          y = {
            type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
            kind: o("WAWebMsgType").MsgKind.CallLog,
            viewMode:
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME,
            callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Unknown,
            isVideoCall: l,
            callCreator: n,
            from: n,
            t: d,
            id: new (r("WAWebMsgKey"))({
              remote: h,
              fromMe: _,
              id: f,
              participant: g,
            }),
            to: h,
          },
          C = o("WAWebMsgCollection").MsgCollection.get(y.id);
        if (C != null) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder for callId=",
                ": ICCE already exists, skipping",
              ])),
            a,
          );
          return;
        }
        var b = await o(
            "WAWebDBGetByParentMsgKey",
          ).getMessageOrphansByParentMsgKey(y.id),
          v;
        if (b.length > 0) {
          var S = b[0];
          ((v = babelHelpers.extends({}, S.parsedMsgPayload, {
            id: y.id,
            t: y.t,
          })),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] placeholder for callId=",
                  ": merged with orphan data",
                ])),
              a,
            ));
        } else
          ((v = y),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] placeholder for callId=",
                  ": writing hidden placeholder ICCE",
                ])),
              a,
            ));
        (await o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(h, v),
          b.length > 0 &&
            (await o("WAWebSchemaMessageOrphans")
              .getMessageOrphanTable()
              .bulkRemove(
                b.map(function (e) {
                  return e.msgKey;
                }),
              )),
          r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage"));
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder resolve failed for callId=",
                "",
              ])),
            a,
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-placeholder-resolve-fail");
      } finally {
        o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(a);
      }
    }
    l.writeCallOfferPlaceholder = d;
  },
  98,
);
