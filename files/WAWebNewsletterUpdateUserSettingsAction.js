__d(
  "WAWebNewsletterUpdateUserSettingsAction",
  [
    "$InternalEnum",
    "Promise",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterToggleAdminActivityMuteStateAction",
    "WAWebNewsletterToggleFollowerActivityMuteStateAction",
    "WAWebWamEnumChannelEventType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        AdminActivity: "admin_activity",
        FollowerActivity: "follower_activity",
      });
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = i.eventSurface,
              u =
                r === o("WAWebNewsletterModelUtils").MUTED_STATE
                  ? o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.MUTE
                  : o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.UNMUTE;
            o(
              "WAWebNewsletterAttributionLogging",
            ).NewsletterCoreEventLogger.log({
              eventSurface: l,
              cid: t,
              channelCoreEventType: u,
              channelRequestMetadata: JSON.stringify(
                a.map(function (e) {
                  return (
                    (r === o("WAWebNewsletterModelUtils").MUTED_STATE
                      ? "mute"
                      : "unmute") +
                    "_" +
                    e
                  );
                }),
              ),
            });
            var c = [];
            (a.includes(s.AdminActivity) &&
              c.push(
                o(
                  "WAWebNewsletterToggleAdminActivityMuteStateAction",
                ).toggleNewsletterAdminActivityMuteStateAction(t, r),
              ),
              a.includes(s.FollowerActivity) &&
                c.push(
                  o(
                    "WAWebNewsletterToggleFollowerActivityMuteStateAction",
                  ).toggleNewsletterFollowerActivityMuteStateAction(t, r),
                ),
              yield (e || (e = n("Promise"))).all(c));
          },
        )),
        c.apply(this, arguments)
      );
    }
    ((l.NewsletterUserSetting = s), (l.updateNewsletterUserSettingsAction = u));
  },
  98,
);
