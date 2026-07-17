__d(
  "WAWebWaitingRoomNameFormat",
  [
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGuestNameFormat",
    "WAWebParticipantListUtils",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = u(e),
        n = t.contact,
        r = t.isGuest,
        a =
          n != null
            ? o("WAWebFrontendContactGetters").getDisplayName(n)
            : o("WAWebWidFormat").widToFormattedUser(e);
      return o("WAWebGuestNameFormat")
        .maybeGetNameWithGuestLabel(a, r)
        .toString();
    }
    function s(e) {
      var t = o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(
        [e],
        !0,
      );
      return o("WAWebGuestNameFormat")
        .maybeGetNameWithGuestLabel(t, u(e).isGuest)
        .toString();
    }
    function u(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return {
        contact: t,
        isGuest:
          t != null ? o("WAWebFrontendContactGetters").getIsGuest(t) : !1,
      };
    }
    ((l.getWaitingRoomUserDisplayName = e),
      (l.getWaitingRoomNotificationUserDisplayName = s));
  },
  98,
);
