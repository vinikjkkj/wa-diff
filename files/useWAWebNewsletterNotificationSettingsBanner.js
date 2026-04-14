__d(
  "useWAWebNewsletterNotificationSettingsBanner",
  [
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebNux",
    "useWAWebModelValues",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("useWAWebModelValues").useOptionalModelValues(
          e.newsletterMetadata,
          ["membershipType"],
        ),
        n = r("useWAWebNux")(
          o("WAWebNux").NUX.NEWSLETTER_ADMIN_NOTIFICATION_SETTINGS_BANNER,
        ),
        a = n[0],
        i = n[2];
      return [
        t != null &&
          o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(t) &&
          a &&
          o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterAdminNotificationsEnabled(e.newsletterMetadata),
        i,
      ];
    }
    l.useNewsletterNotificationSettingsBanner = e;
  },
  98,
);
