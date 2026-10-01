__d(
  "WAWebNewsletterPinGatingUtils",
  ["WAWebCommonNewsletterEnums", "WAWebNewsletterCommonGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_message_pin_follower_enabled",
      );
    }
    function s() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_message_pin_admin_enabled",
      );
    }
    function u(t) {
      return (
        t === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin ||
        t === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner ||
        e() ||
        s()
      );
    }
    ((l.isChannelMessagePinAdminEnabled = s), (l.canViewNewsletterPins = u));
  },
  98,
);
