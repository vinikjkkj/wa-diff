__d(
  "WAWebShouldShowCallButtons",
  [
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
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
          !a.isEnterprise &&
          !c &&
          !_ &&
          !u;
      return { shouldShow: g, shouldDisableStartCall: _ };
    }
    function s(t) {
      return e(t).shouldShow;
    }
    ((l.getCallButtonsState = e), (l.shouldShowCallButtons = s));
  },
  98,
);
