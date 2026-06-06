__d(
  "WAWebShowNewsletterMetadataUpdateNotification",
  [
    "WAWebNotificationController",
    "WAWebNotificationsNewsletterMetadataUpdateNotification",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.chat,
        n = e.updates,
        r = e.user,
        a = t.newsletterMetadata;
      if (
        a != null &&
        a != null &&
        a.iAmOwner() &&
        !o("WAWebUserPrefsMeUser").isMeAccount(r) &&
        n.length !== 0
      )
        return o(
          "WAWebNotificationController",
        ).WANotificationController.triggerNotification(
          new (o(
            "WAWebNotificationsNewsletterMetadataUpdateNotification",
          ).WANewsletterMetadataUpdateNotification)({
            chat: t,
            user: r,
            updates: n,
          }),
        );
    }
    l.showNewsletterMetadataUpdateNotification = e;
  },
  98,
);
