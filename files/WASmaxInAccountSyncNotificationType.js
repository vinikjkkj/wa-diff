__d(
  "WASmaxInAccountSyncNotificationType",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationBlocklistNotificationMixin",
    "WASmaxInAccountSyncNotificationDevicesNotificationMixin",
    "WASmaxInAccountSyncNotificationDisappearingModeNotificationMixin",
    "WASmaxInAccountSyncNotificationNoticeNotificationMixin",
    "WASmaxInAccountSyncNotificationPictureNotificationMixin",
    "WASmaxInAccountSyncNotificationPrivacyNotificationMixin",
    "WASmaxInAccountSyncNotificationStatusNotificationMixin",
    "WASmaxInAccountSyncNotificationTextStatusNotificationMixin",
    "WASmaxInAccountSyncNotificationUsernameNotificationMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationBlocklistNotificationMixin",
      ).parseNotificationBlocklistNotificationMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationBlocklistNotification",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationDevicesNotificationMixin",
      ).parseNotificationDevicesNotificationMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationDevicesNotification",
          value: n.value,
        });
      var r = o(
        "WASmaxInAccountSyncNotificationPictureNotificationMixin",
      ).parseNotificationPictureNotificationMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationPictureNotification",
          value: r.value,
        });
      var a = o(
        "WASmaxInAccountSyncNotificationPrivacyNotificationMixin",
      ).parseNotificationPrivacyNotificationMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationPrivacyNotification",
          value: a.value,
        });
      var i = o(
        "WASmaxInAccountSyncNotificationStatusNotificationMixin",
      ).parseNotificationStatusNotificationMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationStatusNotification",
          value: i.value,
        });
      var l = o(
        "WASmaxInAccountSyncNotificationTextStatusNotificationMixin",
      ).parseNotificationTextStatusNotificationMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationTextStatusNotification",
          value: l.value,
        });
      var s = o(
        "WASmaxInAccountSyncNotificationUsernameNotificationMixin",
      ).parseNotificationUsernameNotificationMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationUsernameNotification",
          value: s.value,
        });
      var u = o(
        "WASmaxInAccountSyncNotificationDisappearingModeNotificationMixin",
      ).parseNotificationDisappearingModeNotificationMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationDisappearingModeNotification",
          value: u.value,
        });
      var c = o(
        "WASmaxInAccountSyncNotificationNoticeNotificationMixin",
      ).parseNotificationNoticeNotificationMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationNoticeNotification",
            value: c.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BlocklistNotification",
              "DevicesNotification",
              "PictureNotification",
              "PrivacyNotification",
              "StatusNotification",
              "TextStatusNotification",
              "UsernameNotification",
              "DisappearingModeNotification",
              "NoticeNotification",
            ],
            [t, n, r, a, i, l, s, u, c],
          );
    }
    l.parseNotificationType = e;
  },
  98,
);
