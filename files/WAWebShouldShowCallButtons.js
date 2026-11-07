__d(
  "WAWebShouldShowCallButtons",
  [
    "WAWebBizCoexGatingUtils",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = o("WAWebChatGetters").getIsGroup(e),
        a = o("WAWebFrontendChatGetters").getGroupMetadata(e),
        i =
          r &&
          ((t = a == null ? void 0 : a.participants.length) != null ? t : 0) ===
            1,
        l =
          !c(e) ||
          (r &&
            (((a == null ? void 0 : a.announce) === !0 &&
              !(
                (n = a == null ? void 0 : a.participants.iAmAdmin()) != null &&
                n
              )) ||
              i)),
        s = u(e) && !l;
      return { shouldShow: s, shouldDisableStartCall: l };
    }
    function s(e) {
      return e.contact != null && u(e) && c(e);
    }
    function u(e) {
      var t = o("WAWebFrontendChatGetters").getGroupMetadata(e);
      return (
        p(e.contact) &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t) !==
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        (t == null ? void 0 : t.hasCapi) !== !0 &&
        !o("WAWebChatGetters").getIsNewsletter(e) &&
        !o("WAWebChatGetters").getIsBroadcast(e)
      );
    }
    function c(e) {
      if (!o("WAWebChatGetters").getIsGroup(e)) return !0;
      var t = o("WAWebFrontendChatGetters").getGroupMetadata(e);
      return (
        t != null && t.participants.iAmMember() && !t.isSuspendedOrTerminated()
      );
    }
    function d(t) {
      return e(t).shouldShow;
    }
    function m(e) {
      return !e.isBot() && !e.isAiHub() && !e.isPSA();
    }
    function p(e) {
      return (
        !o("WAWebContactGetters").getIsMe(e) &&
        !o("WAWebFrontendContactGetters").getIsContactBlocked(e) &&
        !e.isEnterprise &&
        m(e.id) &&
        !o(
          "WAWebBizCoexGatingUtils",
        ).isCallingDisabledOnAuthAgentSoftOffboarded()
      );
    }
    ((l.getCallButtonsState = e),
      (l.canJoinOngoingCallInChat = s),
      (l.shouldShowCallButtons = d),
      (l.canBeCallParticipant = m),
      (l.canCallContact = p));
  },
  98,
);
