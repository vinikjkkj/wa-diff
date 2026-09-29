__d(
  "WAWebGroupAgentParticipant",
  ["WAWebBotGroupGatingUtils", "WAWebBotUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null
        ? !1
        : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) || s(e);
    }
    function s(e) {
      return (
        e != null &&
        e.isBot() &&
        !o("WAWebBotUtils").isAnyMetaAiBot(e) &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    ((l.isBotAuthorDirectMessagingBlocked = e),
      (l.isStandardBotProfileGroupAgent = s));
  },
  98,
);
