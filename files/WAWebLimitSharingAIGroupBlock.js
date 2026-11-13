__d(
  "WAWebLimitSharingAIGroupBlock",
  [
    "fbt",
    "$InternalEnum",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebChatGroupUtils",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum")({
      GROUP_AGENT: "group_agent",
      META_AI: "meta_ai",
    });
    function u(e) {
      var t = e == null ? null : o("WAWebStateUtils").unproxy(e);
      return c(
        t == null ? null : { chatId: t.id, groupMetadata: t.groupMetadata },
      );
    }
    function c(t) {
      return p(t == null ? void 0 : t.groupMetadata)
        ? e.GROUP_AGENT
        : (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
              t != null &&
              o("WAWebChatGroupUtils").isAIGroupOpenFor(t)) ||
            (o(
              "WAWebBotGroupGatingUtils",
            ).isTEEGroupBotParticipantAddEnabled() &&
              t != null &&
              o("WAWebChatGroupUtils").isAIGroupTeeFor(t))
          ? e.META_AI
          : null;
    }
    function d() {
      return s._(/*BTDS*/ "Advanced chat privacy and AI agents");
    }
    function m() {
      return s._(
        /*BTDS*/ "AI agents are in this chat. To turn on advanced chat privacy, AI agents must first be removed from this chat.",
      );
    }
    function p(e) {
      var t = e == null ? void 0 : e.participants,
        n =
          (t == null
            ? void 0
            : t.some(function (e) {
                return (
                  o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e.id) ||
                  o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)
                );
              })) === !0;
      return (
        n && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    ((l.LimitSharingAIGroupBlock = e),
      (l.getLimitSharingAIGroupBlock = u),
      (l.getLimitSharingAIGroupBlockFor = c),
      (l.getLimitSharingBlockedByGroupAgentTitle = d),
      (l.getLimitSharingBlockedByGroupAgentText = m));
  },
  226,
);
