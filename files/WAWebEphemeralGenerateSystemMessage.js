__d(
  "WAWebEphemeralGenerateSystemMessage",
  [
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebContactSystemMsg").genDisappearingModeUpdateSystemMsg(
            e.id,
            t,
            n,
          );
          yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
            chatId: r.from,
            newMsg: r,
            handleSingleMsgOrigin: "ephemeralSystemMsg",
            preserveOrder: !1,
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebContactSystemMsg",
          ).genDisappearingModeUnsupportedSystemMsg(e.id);
          yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
            chatId: t.from,
            newMsg: t,
            handleSingleMsgOrigin: "ephemeralUnsupportedSystemMsg",
            preserveOrder: !1,
          });
        })),
        c.apply(this, arguments)
      );
    }
    ((l.generateEphemeralNotificationTemplateSystemMessage = e),
      (l.generateEphemeralUnsupportedNotificationTemplateSystemMessage = u));
  },
  98,
);
