__d(
  "WAWebEphemeralGenerateSystemMessage",
  ["WAWebContactSystemMsg", "WAWebHandleSingleMsgWorkerCompatible"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n, r) {
      var a = o("WAWebContactSystemMsg").genDisappearingModeUpdateSystemMsg(
        e.id,
        t,
        n,
        r,
      );
      await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
        chatId: a.from,
        newMsg: a,
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
