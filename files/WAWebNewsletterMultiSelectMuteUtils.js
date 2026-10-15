__d(
  "WAWebNewsletterMultiSelectMuteUtils",
  [
    "Promise",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebWamEnumChannelEventSurface",
    "asyncToGeneratorRuntime",
    "useWAWebNewsletterMuteState",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = r
            ? o("WAWebNewsletterModelUtils").MUTED_STATE
            : o("WAWebNewsletterModelUtils").UNMUTED_STATE;
          yield (e || (e = n("Promise"))).all(
            t
              .filter(function (e) {
                return c(e, r);
              })
              .map(function (e) {
                return o(
                  "WAWebNewsletterUpdateUserSettingsAction",
                ).updateNewsletterUserSettingsAction(e.id, a, d(e, a), {
                  eventSurface: o("WAWebWamEnumChannelEventSurface")
                    .CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
                  fromMultiselect: !0,
                });
              }),
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      var n = e.newsletterMetadata;
      return (
        n != null &&
        (o("WAWebNewsletterMetadataGetters").getCanBeMuted(n) ||
          o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterAdminNotificationsEnabled(n)) &&
        d(
          e,
          t
            ? o("WAWebNewsletterModelUtils").MUTED_STATE
            : o("WAWebNewsletterModelUtils").UNMUTED_STATE,
        ).length > 0
      );
    }
    function d(e, t) {
      var n;
      return o("useWAWebNewsletterMuteState").getNewsletterMuteSettingsToToggle(
        {
          adminActivityMuteExpiration: e.muteExpiration,
          followerActivityMuteExpiration:
            (n = e.newsletterMetadata) == null
              ? void 0
              : n.followerActivityMuteExpiration,
          isFollowerActivityFeatureEnabled: o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterAdminNotificationsEnabled(e.newsletterMetadata),
          targetState: t,
        },
      );
    }
    ((l.muteChannels = s), (l.canToggleChannelMute = c));
  },
  98,
);
