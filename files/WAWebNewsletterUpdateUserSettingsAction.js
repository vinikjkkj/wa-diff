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
        l = a.fromMultiselect,
        s = l === void 0 ? !1 : l,
        u =
          n === o("WAWebNewsletterModelUtils").MUTED_STATE
            ? o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.MUTE
            : o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.UNMUTE;
      o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.log({
        eventSurface: i,
        cid: t,
        channelCoreEventType: u,
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
      var c = [];
      (r.includes(e.AdminActivity) &&
        c.push(
          o(
            "WAWebNewsletterToggleAdminActivityMuteStateAction",
          ).toggleNewsletterAdminActivityMuteStateAction(t, n, s),
        ),
        r.includes(e.FollowerActivity) &&
          c.push(
            o(
              "WAWebNewsletterToggleFollowerActivityMuteStateAction",
            ).toggleNewsletterFollowerActivityMuteStateAction(t, n),
          ),
        await Promise.all(c));
    }
    ((l.NewsletterUserSetting = e), (l.updateNewsletterUserSettingsAction = s));
  },
  98,
);
