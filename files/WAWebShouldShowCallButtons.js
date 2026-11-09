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
    "WAWebVoipCapiBusinessCalling",
    "WAWebVoipGatingUtils",
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
        g(e.contact) &&
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
      var t = e.contact;
      return (
        t == null ||
        !h(t) ||
        o("WAWebVoipCapiBusinessCalling").canVideoCallCapiBusiness(t)
      );
    }
    function _(e) {
      var t = e.contact;
      return t == null || !h(t);
    }
    function f(e) {
      return !e.isEnterprise && y(e);
    }
    function g(e) {
      return (
        y(e) &&
        (!e.isEnterprise ||
          o("WAWebVoipCapiBusinessCalling").canCallCapiBusiness(e))
      );
    }
    function h(e) {
      return (
        e.isEnterprise &&
        o("WAWebVoipGatingUtils").isCapiCallingEntryPointEnabled()
      );
    }
    function y(e) {
      return (
        !o("WAWebContactGetters").getIsMe(e) &&
        !o("WAWebFrontendContactGetters").getIsContactBlocked(e) &&
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
      (l.canVideoCallInChat = p),
      (l.canAddChatContactToCall = _),
      (l.canCallContact = f));
  },
  98,
);
