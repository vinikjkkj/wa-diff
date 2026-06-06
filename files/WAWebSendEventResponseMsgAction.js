__d(
  "WAWebSendEventResponseMsgAction",
  [
    "WANullthrows",
    "WAWebAddonSendMsgData",
    "WAWebCreateEncryptedEventResponseMsgData",
    "WAWebCreateEventResponseMsgData",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgResultAction",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = r("WANullthrows")(
          o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey),
        ),
        n = r("WANullthrows")(
          o("WAWebFrontendMsgGetters").getAsEventCreation(t),
        ),
        a = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
          o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        );
      await u({
        responseType: e.eventResponse,
        responseMsgKey: e.id,
        eventCreationMsg: n,
        sender: a,
      });
    }
    async function s(e, t) {
      var n = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
          o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        a = new (r("WAWebMsgKey"))({
          fromMe: !0,
          remote: t.id.remote,
          id: await r("WAWebMsgKey").newId(),
          participant: n,
        });
      await u({
        responseType: e,
        responseMsgKey: a,
        eventCreationMsg: t,
        sender: n,
      });
    }
    async function u(e) {
      var t = o("WAWebCreateEventResponseMsgData").createEventResponseMsgData(
          e,
        ),
        n;
      if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(t))
        n = await o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(t);
      else {
        var a = await o(
          "WAWebCreateEncryptedEventResponseMsgData",
        ).createEncryptedEventResponseMsgData(t, e.eventCreationMsg);
        n = await o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(a);
      }
      if (
        n.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
      )
        throw r("err")("Failed to send event response");
    }
    ((l.resendEventResponseMsg = e), (l.sendEventResponseMsg = s));
  },
  98,
);
