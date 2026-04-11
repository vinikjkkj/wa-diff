__d(
  "WAWebDebugEvents",
  [
    "WANullthrows",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSendEventCreationMsgAction",
    "WAWebSendEventEditMsgAction",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.callType,
        n = e.description,
        a = e.location,
        i = e.name,
        l = e.startTime,
        s = o("WAWebChatCollection").ChatCollection.getActive();
      if (s == null)
        throw r("err")(
          "[Debug][Send-Event-Message] You must open a chat first",
        );
      var u = s == null ? void 0 : s.composeQuotedMsg;
      (o("WAWebSendEventCreationMsgAction").sendEventCreationMessage({
        chat: s,
        eventCreationOpts: {
          name: i,
          description: n,
          location: a,
          startTime: l,
          callType: t,
        },
        quotedMsg: u,
      }),
        (s.composeQuotedMsg = null));
    }
    e.doc = "Send an event message to currently active chat";
    function s(e) {
      var t = e.name,
        n = t === void 0 ? "Edited name" : t,
        a = e.startTime,
        i = a === void 0 ? o("WATimeUtils").unixTime() : a,
        l = e.description,
        s = l === void 0 ? "Edited description" : l,
        u = e.location,
        c = u === void 0 ? "Edited location" : u,
        d = e.callType,
        m = d === void 0 ? "voice" : d,
        p = e.isEventCanceled,
        _ = p === void 0 ? !1 : p,
        f = o("WAWebChatCollection").ChatCollection.getActive();
      if (f == null)
        throw r("err")(
          "[Debug][Edit-Event-Message] You must open a chat first",
        );
      var g = f.msgs.findFirst(function (e) {
        return (
          e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION &&
          !e.isEventCanceled &&
          o("WAWebUserPrefsMeUser").isMeAccount(
            o("WAWebMsgGetters").getSender(e),
          )
        );
      });
      if (g == null)
        throw r("err")(
          "[Debug][Edit-Event-Message] No event message present to be edited in active chat",
        );
      o("WAWebSendEventEditMsgAction").sendEventEditMessage(
        {
          name: n,
          description: s,
          location: c,
          startTime: i,
          callType: m,
          isEventCanceled: _,
        },
        r("WANullthrows")(o("WAWebFrontendMsgGetters").getAsEventCreation(g)),
      );
    }
    s.doc =
      "Edit the last event message sent from current user in currently active chat";
    var u = {
      sendEventMessageToActiveChat: e,
      editLastEventMessageFromMeInChat: s,
    };
    l.default = u;
  },
  98,
);
