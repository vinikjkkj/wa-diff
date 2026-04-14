__d(
  "useWAWebNewsletterMuteState",
  [
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMetadataModel",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebWamEnumChannelEventSurface",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebChatValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = o("useWAWebChatValues").useChatValues(e.id, [
          o("WAWebChatGetters").getMuteExpiration,
          o("WAWebFrontendChatGetters").getNewsletterMetadata,
        ]),
        r = t[0],
        a = t[1],
        i = o("useWAWebModelValues").useModelValues(
          a != null
            ? a
            : new (o("WAWebNewsletterMetadataModel").NewsletterMetadata)(),
          ["followerActivityMuteExpiration"],
        ),
        l = o(
          "WAWebNewsletterExtendedGatingUtils",
        ).isNewsletterAdminNotificationsEnabled(e.newsletterMetadata),
        u =
          o("WAWebNewsletterModelUtils").isMuted(r) &&
          (!l ||
            o("WAWebNewsletterModelUtils").isMuted(
              i.followerActivityMuteExpiration,
            )),
        c = s(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = u
                ? o("WAWebNewsletterModelUtils").UNMUTED_STATE
                : o("WAWebNewsletterModelUtils").MUTED_STATE,
              n = [];
            (t !== r &&
              n.push(
                o("WAWebNewsletterUpdateUserSettingsAction")
                  .NewsletterUserSetting.AdminActivity,
              ),
              l &&
                t !== i.followerActivityMuteExpiration &&
                n.push(
                  o("WAWebNewsletterUpdateUserSettingsAction")
                    .NewsletterUserSetting.FollowerActivity,
                ),
              yield o(
                "WAWebNewsletterUpdateUserSettingsAction",
              ).updateNewsletterUserSettingsAction(e.id, t, n, {
                eventSurface: o("WAWebWamEnumChannelEventSurface")
                  .CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
              }));
          }),
          [e.id, u, r, l, i.followerActivityMuteExpiration],
        );
      return { isMuted: u, toggleMuteState: c };
    }
    l.useNewsletterMuteState = u;
  },
  98,
);
