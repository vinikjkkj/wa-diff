__d(
  "WAWebShowNewsletterMetadataUpdateNotification",
  [
    "WAWebNewsletterMembershipUtil",
    "WAWebNotificationController",
    "WAWebNotificationsNewsletterMetadataUpdateNotification",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.updates,
            r = e.user,
            a = t.newsletterMetadata;
          if (
            a != null &&
            o("WAWebNewsletterMembershipUtil").iAmOwner(a) &&
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
        })),
        s.apply(this, arguments)
      );
    }
    l.showNewsletterMetadataUpdateNotification = e;
  },
  98,
);
