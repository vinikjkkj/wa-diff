__d(
  "WAWebMexSharableEventGuestJoinedWaNotifications",
  ["WAWebMexSharableEventGuestJoinedWaNotificationsQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    var e;
    e !== void 0 ||
      (e = n("WAWebMexSharableEventGuestJoinedWaNotificationsQuery.graphql"));
    function s(e) {
      var t,
        n = e.xwa2_notify_event_on_guest_joined_wa,
        r = n == null ? void 0 : n.event_id;
      return n == null || r == null
        ? null
        : {
            eventId: r,
            eventName: n.event_name,
            inviteeLid: n.guest_lid,
            guestName: (t = n.username) != null ? t : n.pn,
            isUserVisible: n.is_user_visible,
          };
    }
    l.toGuestJoinedWaNotificationData = s;
  },
  98,
);
