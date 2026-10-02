__d(
  "WAWebGroupAgentParticipant",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupAgentProfileRouting",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e == null
        ? !1
        : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
          ? !0
          : s(e) &&
            o("WAWebGroupAgentProfileRouting").getGroupAgentOneToOneTarget(
              e,
              t,
            ) !==
              o("WAWebGroupAgentProfileRouting").GroupAgentOneToOneTarget
                .HATCH_CHAT;
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
