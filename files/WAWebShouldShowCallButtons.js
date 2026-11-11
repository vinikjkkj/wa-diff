__d(
  "WAWebShouldShowCallButtons",
  [
    "WAWebBizCoexGatingUtils",
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
      return s({
        chatId: e.id,
        contact: e.contact,
        groupMetadata: o("WAWebFrontendChatGetters").getGroupMetadata(e),
      });
    }
    function s(e) {
      var t,
        n,
        r = e.chatId,
        o = e.groupMetadata,
        a = r.isGroup(),
        i =
          a &&
          ((t = o == null ? void 0 : o.participants.length) != null ? t : 0) ===
            1,
        l =
          !d(r, o) ||
          (a &&
            (((o == null ? void 0 : o.announce) === !0 &&
              !(
                (n = o == null ? void 0 : o.participants.iAmAdmin()) != null &&
                n
              )) ||
              i)),
        s = c(e) && !l;
      return { shouldShow: s, shouldDisableStartCall: l };
    }
    function u(e) {
      if (e.contact == null) return !1;
      var t = {
        chatId: e.id,
        contact: e.contact,
        groupMetadata: o("WAWebFrontendChatGetters").getGroupMetadata(e),
      };
      return c(t) && d(t.chatId, t.groupMetadata);
    }
    function c(e) {
      var t = e.chatId,
        n = e.contact,
        r = e.groupMetadata;
      return (
        C(n) &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(r) !==
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        (r == null ? void 0 : r.hasCapi) !== !0 &&
        !t.isNewsletter() &&
        !t.isBroadcast()
      );
    }
    function d(e, t) {
      return e.isGroup()
        ? t != null &&
            t.participants.iAmMember() &&
            !t.isSuspendedOrTerminated()
        : !0;
    }
    function m(t) {
      return e(t).shouldShow;
    }
    function p(e) {
      return s(e).shouldShow;
    }
    function _(e) {
      return !e.isBot() && !e.isAiHub() && !e.isPSA();
    }
    function f(e) {
      var t = e.contact;
      return (
        t == null ||
        !b(t) ||
        o("WAWebVoipCapiBusinessCalling").canVideoCallCapiBusiness(t)
      );
    }
    function g(e) {
      var t = e.contact;
      return (
        !b(t) || o("WAWebVoipCapiBusinessCalling").canVideoCallCapiBusiness(t)
      );
    }
    function h(e) {
      var t = e.contact;
      return t == null || !b(t);
    }
    function y(e) {
      return !e.isEnterprise && v(e);
    }
    function C(e) {
      return (
        v(e) &&
        (!e.isEnterprise ||
          o("WAWebVoipCapiBusinessCalling").canCallCapiBusiness(e))
      );
    }
    function b(e) {
      return (
        e.isEnterprise &&
        o("WAWebVoipGatingUtils").isCapiCallingEntryPointEnabled()
      );
    }
    function v(e) {
      return (
        !o("WAWebContactGetters").getIsMe(e) &&
        !o("WAWebFrontendContactGetters").getIsContactBlocked(e) &&
        _(e.id) &&
        !o(
          "WAWebBizCoexGatingUtils",
        ).isCallingDisabledOnAuthAgentSoftOffboarded()
      );
    }
    ((l.getCallButtonsState = e),
      (l.getCallButtonsStateFor = s),
      (l.canJoinOngoingCallInChat = u),
      (l.shouldShowCallButtons = m),
      (l.shouldShowCallButtonsFor = p),
      (l.canBeCallParticipant = _),
      (l.canVideoCallInChat = f),
      (l.canVideoCallInChatFor = g),
      (l.canAddChatContactToCall = h),
      (l.canCallContact = y));
  },
  98,
);
