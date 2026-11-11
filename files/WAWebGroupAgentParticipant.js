__d(
  "WAWebGroupAgentParticipant",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupAgentProfileRouting",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s(e, t == null ? void 0 : t.id);
    }
    function s(e, t) {
      return e == null
        ? !1
        : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
          ? !0
          : u(e) &&
            o("WAWebGroupAgentProfileRouting").getGroupAgentOneToOneTargetFor(
              e,
              t,
            ) !==
              o("WAWebGroupAgentProfileRouting").GroupAgentOneToOneTarget
                .HATCH_CHAT;
    }
    function u(e) {
      return (
        e != null &&
        e.isBot() &&
        !o("WAWebBotUtils").isAnyMetaAiBot(e) &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    ((l.isBotAuthorDirectMessagingBlocked = e),
      (l.isBotAuthorDirectMessagingBlockedFor = s),
      (l.isStandardBotProfileGroupAgent = u));
  },
  98,
);
