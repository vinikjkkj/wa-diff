__d(
  "WAWebWaitingRoomNameFormat",
  [
    "WAWebCallingGuestParticipantName",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebGuestNameFormat",
    "WAWebParticipantListUtils",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = u(e),
        a = r.contact,
        i = r.isGuest,
        l = r.notifyName;
      return (
        (t =
          (n = o(
            "WAWebCallingGuestParticipantName",
          ).getCallingGuestParticipantName(i, l)) == null
            ? void 0
            : n.displayName) != null
          ? t
          : o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(
              a != null
                ? o("WAWebFrontendContactGetters").getDisplayName(a)
                : o("WAWebWidFormat").widToFormattedUser(e),
              i,
            )
      ).toString();
    }
    function s(e) {
      var t,
        n,
        r = u(e),
        a = r.isGuest,
        i = r.notifyName;
      return (
        (t =
          (n = o(
            "WAWebCallingGuestParticipantName",
          ).getCallingGuestParticipantName(a, i)) == null
            ? void 0
            : n.displayName) != null
          ? t
          : o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(
              o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(
                [e],
                !0,
              ),
              a,
            )
      ).toString();
    }
    function u(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return {
        contact: t,
        isGuest:
          t != null ? o("WAWebFrontendContactGetters").getIsGuest(t) : !1,
        notifyName:
          t != null ? o("WAWebContactGetters").getNotifyName(t) : null,
      };
    }
    ((l.getWaitingRoomUserDisplayName = e),
      (l.getWaitingRoomNotificationUserDisplayName = s));
  },
  98,
);
