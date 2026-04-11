__d(
  "WAWebNewsletterCommonGatingUtils",
  ["$InternalEnum", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Disabled: 0,
      NeedsUpgrade: 1,
      Enabled: 2,
      AvailableOnPhone: 3,
    });
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue("channels_enabled") === e.Enabled
      );
    }
    function u(e) {
      return s() && o("WAWebABProps").getABPropConfigValue(e) === !0;
    }
    function c() {
      return u("channel_photo_poll_sender_enabled");
    }
    function d() {
      return u("channel_photo_poll_receiver_enabled");
    }
    ((l.NewsletterCompanionGating = e),
      (l.isNewsletterEnabled = s),
      (l.isNewsletterFeatureEnabled = u),
      (l.isNewsletterPhotoPollSenderEnabled = c),
      (l.isNewsletterPhotoPollsReceiverEnabled = d));
  },
  98,
);
