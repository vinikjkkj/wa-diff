__d(
  "WAWebNotificationsModalVariant",
  ["$InternalEnum", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({ Banner: 0, TimeBased: 1, EventBased: 2 }),
      s = n("$InternalEnum")({
        PostLoad: "post_load",
        MissedMessages: "missed_messages",
        MissedCall: "missed_call",
      });
    function u() {
      var t;
      return (t = e.cast(
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_notifications_modal_variants",
        ),
      )) != null
        ? t
        : e.Banner;
    }
    function c() {
      return u() !== e.Banner;
    }
    var d = 180 * 1e3;
    function m(t) {
      var n = t.hasNewUnreadWhileHidden,
        r = t.hasOptInNuxBeenShown,
        o = t.variant;
      return o === e.EventBased && n && !r;
    }
    function p(t) {
      var n = t.getHasRecentMissedCallWhileHidden,
        r = t.hasOptInNuxBeenShown,
        o = t.variant;
      return o === e.EventBased && !r && n();
    }
    ((l.NotificationsModalVariant = e),
      (l.NotificationsOptInModalCopy = s),
      (l.getNotificationsModalVariant = u),
      (l.isNotificationsOptInModalVariant = c),
      (l.POST_LOAD_OPT_IN_DELAY_MS = d),
      (l.shouldShowReturnToUnreadOptInModal = m),
      (l.shouldShowAfterMissedCallOptInModal = p));
  },
  98,
);
