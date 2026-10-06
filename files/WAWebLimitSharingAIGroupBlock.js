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
    function u(t) {
      return m(t)
        ? e.GROUP_AGENT
        : (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
              o("WAWebChatGroupUtils").isAIGroupOpen(t)) ||
            (o(
              "WAWebBotGroupGatingUtils",
            ).isTEEGroupBotParticipantAddEnabled() &&
              o("WAWebChatGroupUtils").isAIGroupTee(t))
          ? e.META_AI
          : null;
    }
    function c() {
      return s._(/*BTDS*/ "Advanced chat privacy and AI agents");
    }
    function d() {
      return s._(
        /*BTDS*/ "AI agents are in this chat. To turn on advanced chat privacy, AI agents must first be removed from this chat.",
      );
    }
    function m(e) {
      var t;
      if (e == null) return !1;
      var n =
          (t = o("WAWebStateUtils").unproxy(e).groupMetadata) == null
            ? void 0
            : t.participants,
        r =
          (n == null
            ? void 0
            : n.some(function (e) {
                return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e.id);
              })) === !0;
      return (
        r && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    ((l.LimitSharingAIGroupBlock = e),
      (l.getLimitSharingAIGroupBlock = u),
      (l.getLimitSharingBlockedByGroupAgentTitle = c),
      (l.getLimitSharingBlockedByGroupAgentText = d));
  },
  226,
);
