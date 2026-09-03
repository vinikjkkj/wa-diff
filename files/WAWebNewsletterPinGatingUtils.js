__d(
  "WAWebNewsletterPinGatingUtils",
  ["WAWebNewsletterCommonGatingUtils"],
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
    function u() {
      return e() || s();
    }
    ((l.isChannelMessagePinAdminEnabled = s),
      (l.isChannelMessagePinReadEnabled = u));
  },
  98,
);
