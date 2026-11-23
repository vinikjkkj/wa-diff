__d(
  "WAWebNewsletterMultiSelectMuteUtils",
  [
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebWamEnumChannelEventSurface",
    "useWAWebNewsletterMuteState",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = t
        ? o("WAWebNewsletterModelUtils").MUTED_STATE
        : o("WAWebNewsletterModelUtils").UNMUTED_STATE;
      await Promise.all(
        e
          .filter(function (e) {
            return s(e, t);
          })
          .map(function (e) {
            return o(
              "WAWebNewsletterUpdateUserSettingsAction",
            ).updateNewsletterUserSettingsAction(e.id, n, u(e, n), {
              eventSurface: o("WAWebWamEnumChannelEventSurface")
                .CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
              fromMultiselect: !0,
            });
          }),
      );
    }
    function s(e, t) {
      var n = e.newsletterMetadata;
      return (
        n != null &&
        (o("WAWebNewsletterMetadataGetters").getCanBeMuted(n) ||
          o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterAdminNotificationsEnabled(n)) &&
        u(
          e,
          t
            ? o("WAWebNewsletterModelUtils").MUTED_STATE
            : o("WAWebNewsletterModelUtils").UNMUTED_STATE,
        ).length > 0
      );
    }
    function u(e, t) {
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
    ((l.muteChannels = e), (l.canToggleChannelMute = s));
  },
  98,
);
