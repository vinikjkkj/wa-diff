__d(
  "WAWebEphemeralGenerateSystemMessage",
  ["WAWebContactSystemMsg", "WAWebHandleSingleMsgWorkerCompatible"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r = o("WAWebContactSystemMsg").genDisappearingModeUpdateSystemMsg(
        e.id,
        t,
        n,
      );
      await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
        chatId: r.from,
        newMsg: r,
        handleSingleMsgOrigin: "ephemeralSystemMsg",
        preserveOrder: !1,
      });
    }
    async function s(e) {
      var t = o(
        "WAWebContactSystemMsg",
      ).genDisappearingModeUnsupportedSystemMsg(e.id);
      await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
        chatId: t.from,
        newMsg: t,
        handleSingleMsgOrigin: "ephemeralUnsupportedSystemMsg",
        preserveOrder: !1,
      });
    }
    ((l.generateEphemeralNotificationTemplateSystemMessage = e),
      (l.generateEphemeralUnsupportedNotificationTemplateSystemMessage = s));
  },
  98,
);
