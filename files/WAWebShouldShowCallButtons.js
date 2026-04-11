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
        r = e.contact,
        a = e.id,
        i = (n = o("WAWebChatGetters")).getIsGroup(e),
        l = n.getIsNewsletter(e),
        s = n.getIsBroadcast(e),
        u = n.getIsPSA(e),
        c = o("WAWebContactGetters").getIsMe(r),
        d = o("WAWebFrontendChatGetters").getGroupMetadata(e),
        m =
          i &&
          ((d == null ? void 0 : d.participants.iAmMember()) !== !0 ||
            ((d == null ? void 0 : d.announce) === !0 &&
              !(
                (t = d == null ? void 0 : d.participants.iAmAdmin()) != null &&
                t
              )) ||
            (d == null ? void 0 : d.isSuspendedOrTerminated()) === !0),
        p = (d == null ? void 0 : d.hasCapi) === !0,
        _ =
          (d == null ? void 0 : d.groupType) !==
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
          !p &&
          !c &&
          !l &&
          !a.isBot() &&
          !r.isEnterprise &&
          !u &&
          !m &&
          !s;
      return { shouldShow: _, shouldDisableStartCall: m };
    }
    function s(t) {
      return e(t).shouldShow;
    }
    ((l.getCallButtonsState = e), (l.shouldShowCallButtons = s));
  },
  98,
);
