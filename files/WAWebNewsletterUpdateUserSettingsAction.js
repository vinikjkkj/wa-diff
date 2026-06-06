__d(
  "WAWebNewsletterUpdateUserSettingsAction",
  [
    "$InternalEnum",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterToggleAdminActivityMuteStateAction",
    "WAWebNewsletterToggleFollowerActivityMuteStateAction",
    "WAWebWamEnumChannelEventType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      AdminActivity: "admin_activity",
      FollowerActivity: "follower_activity",
    });
    async function s(t, n, r, a) {
      var i = a.eventSurface,
        l =
          n === o("WAWebNewsletterModelUtils").MUTED_STATE
            ? o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.MUTE
            : o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.UNMUTE;
      o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.log({
        eventSurface: i,
        cid: t,
        channelCoreEventType: l,
        channelRequestMetadata: JSON.stringify(
          r.map(function (e) {
            return (
              (n === o("WAWebNewsletterModelUtils").MUTED_STATE
                ? "mute"
                : "unmute") +
              "_" +
              e
            );
          }),
        ),
      });
      var s = [];
      (r.includes(e.AdminActivity) &&
        s.push(
          o(
            "WAWebNewsletterToggleAdminActivityMuteStateAction",
          ).toggleNewsletterAdminActivityMuteStateAction(t, n),
        ),
        r.includes(e.FollowerActivity) &&
          s.push(
            o(
              "WAWebNewsletterToggleFollowerActivityMuteStateAction",
            ).toggleNewsletterFollowerActivityMuteStateAction(t, n),
          ),
        await Promise.all(s));
    }
    ((l.NewsletterUserSetting = e), (l.updateNewsletterUserSettingsAction = s));
  },
  98,
);
