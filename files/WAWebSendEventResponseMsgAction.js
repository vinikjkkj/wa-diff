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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          yield d({
            responseType: e.eventResponse,
            responseMsgKey: e.id,
            eventCreationMsg: n,
            sender: a,
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
              o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
            ),
            a = new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: t.id.remote,
              id: yield r("WAWebMsgKey").newId(),
              participant: n,
            });
          yield d({
            responseType: e,
            responseMsgKey: a,
            eventCreationMsg: t,
            sender: n,
          });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebCreateEventResponseMsgData",
            ).createEventResponseMsgData(e),
            n;
          if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(t))
            n = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(t);
          else {
            var a = yield o(
              "WAWebCreateEncryptedEventResponseMsgData",
            ).createEncryptedEventResponseMsgData(t, e.eventCreationMsg);
            n = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(a);
          }
          if (
            n.messageSendResult !==
            o("WAWebSendMsgResultAction").SendMsgResult.OK
          )
            throw r("err")("Failed to send event response");
        })),
        m.apply(this, arguments)
      );
    }
    ((l.resendEventResponseMsg = e), (l.sendEventResponseMsg = u));
  },
  98,
);
