__d(
  "WAWebShouldShowCallButtons",
  [
    "WAWebBizCoexGatingUtils",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        a = e.contact,
        i = e.id,
        l = (r = o("WAWebChatGetters")).getIsGroup(e),
        s = r.getIsNewsletter(e),
        u = r.getIsBroadcast(e),
        c = r.getIsPSA(e),
        d = o("WAWebContactGetters").getIsMe(a),
        m = o("WAWebFrontendChatGetters").getGroupMetadata(e),
        p =
          l &&
          ((t = m == null ? void 0 : m.participants.length) != null ? t : 0) ===
            1,
        _ =
          l &&
          ((m == null ? void 0 : m.participants.iAmMember()) !== !0 ||
            ((m == null ? void 0 : m.announce) === !0 &&
              !(
                (n = m == null ? void 0 : m.participants.iAmAdmin()) != null &&
                n
              )) ||
            (m == null ? void 0 : m.isSuspendedOrTerminated()) === !0 ||
            p),
        f = (m == null ? void 0 : m.hasCapi) === !0,
        g =
          (m == null ? void 0 : m.groupType) !==
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
          !f &&
          !d &&
          !s &&
          !i.isBot() &&
          !i.isAiHub() &&
          !a.isEnterprise &&
          !c &&
          !_ &&
          !u &&
          !o(
            "WAWebBizCoexGatingUtils",
          ).isCallingDisabledOnAuthAgentSoftOffboarded();
      return { shouldShow: g, shouldDisableStartCall: _ };
    }
    function s(t) {
      return e(t).shouldShow;
    }
    function u(e) {
      var t = e.id;
      return (
        !o("WAWebContactGetters").getIsMe(e) &&
        !o("WAWebFrontendContactGetters").getIsContactBlocked(e) &&
        !t.isBot() &&
        !t.isAiHub() &&
        !t.isPSA() &&
        !o(
          "WAWebBizCoexGatingUtils",
        ).isCallingDisabledOnAuthAgentSoftOffboarded()
      );
    }
    ((l.getCallButtonsState = e),
      (l.shouldShowCallButtons = s),
      (l.canCallContact = u));
  },
  98,
);
