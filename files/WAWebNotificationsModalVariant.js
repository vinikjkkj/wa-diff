__d(
  "WAWebNotificationsModalVariant",
  ["$InternalEnum", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Banner: 0,
      PostLoad: 1,
      ReturnToUnread: 2,
      AfterMissedCall: 3,
    });
    function s() {
      var t;
      return (t = e.cast(
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_notifications_modal_variants",
        ),
      )) != null
        ? t
        : e.Banner;
    }
    function u() {
      return s() !== e.Banner;
    }
    var c = 180 * 1e3;
    function d(t) {
      var n = t.hasNewUnreadWhileHidden,
        r = t.hasOptInNuxBeenShown,
        o = t.variant;
      return o === e.ReturnToUnread && n && !r;
    }
    function m(t) {
      var n = t.getHasRecentMissedCallWhileHidden,
        r = t.hasOptInNuxBeenShown,
        o = t.variant;
      return o === e.AfterMissedCall && !r && n();
    }
    ((l.NotificationsModalVariant = e),
      (l.getNotificationsModalVariant = s),
      (l.isNotificationsOptInModalVariant = u),
      (l.POST_LOAD_OPT_IN_DELAY_MS = c),
      (l.shouldShowReturnToUnreadOptInModal = d),
      (l.shouldShowAfterMissedCallOptInModal = m));
  },
  98,
);
