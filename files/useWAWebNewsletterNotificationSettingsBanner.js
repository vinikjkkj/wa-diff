__d(
  "useWAWebNewsletterNotificationSettingsBanner",
  [
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebNux",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(8),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["membershipType"]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebModelValues").useOptionalModelValues(
          e.newsletterMetadata,
          n,
        ),
        i = r("useWAWebNux")(
          o("WAWebNux").NUX.NEWSLETTER_ADMIN_NOTIFICATION_SETTINGS_BANNER,
        ),
        l = i[0],
        s = i[2],
        u;
      t[1] !== e.newsletterMetadata || t[2] !== a || t[3] !== l
        ? ((u =
            a != null &&
            o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(a) &&
            l &&
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterAdminNotificationsEnabled(e.newsletterMetadata)),
          (t[1] = e.newsletterMetadata),
          (t[2] = a),
          (t[3] = l),
          (t[4] = u))
        : (u = t[4]);
      var c;
      return (
        t[5] !== s || t[6] !== u
          ? ((c = [u, s]), (t[5] = s), (t[6] = u), (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    l.useNewsletterNotificationSettingsBanner = e;
  },
  98,
);
