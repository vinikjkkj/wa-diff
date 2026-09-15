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
        r = e.contact,
        a = o("WAWebChatGetters").getIsGroup(e),
        i = o("WAWebChatGetters").getIsNewsletter(e),
        l = o("WAWebChatGetters").getIsBroadcast(e),
        s = o("WAWebFrontendChatGetters").getGroupMetadata(e),
        u =
          a &&
          ((t = s == null ? void 0 : s.participants.length) != null ? t : 0) ===
            1,
        d =
          a &&
          ((s == null ? void 0 : s.participants.iAmMember()) !== !0 ||
            ((s == null ? void 0 : s.announce) === !0 &&
              !(
                (n = s == null ? void 0 : s.participants.iAmAdmin()) != null &&
                n
              )) ||
            (s == null ? void 0 : s.isSuspendedOrTerminated()) === !0 ||
            u),
        m = (s == null ? void 0 : s.hasCapi) === !0,
        p =
          c(r) &&
          o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(s) !==
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
          !m &&
          !i &&
          !d &&
          !l;
      return { shouldShow: p, shouldDisableStartCall: d };
    }
    function s(t) {
      return e(t).shouldShow;
    }
    function u(e) {
      return !e.isBot() && !e.isAiHub() && !e.isPSA();
    }
    function c(e) {
      return (
        !o("WAWebContactGetters").getIsMe(e) &&
        !o("WAWebFrontendContactGetters").getIsContactBlocked(e) &&
        !e.isEnterprise &&
        u(e.id) &&
        !o(
          "WAWebBizCoexGatingUtils",
        ).isCallingDisabledOnAuthAgentSoftOffboarded()
      );
    }
    ((l.getCallButtonsState = e),
      (l.shouldShowCallButtons = s),
      (l.canBeCallParticipant = u),
      (l.canCallContact = c));
  },
  98,
);
