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
              u = i.fromMultiselect,
              c = u === void 0 ? !1 : u,
              d =
                r === o("WAWebNewsletterModelUtils").MUTED_STATE
                  ? o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.MUTE
                  : o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.UNMUTE;
            o(
              "WAWebNewsletterAttributionLogging",
            ).NewsletterCoreEventLogger.log({
              eventSurface: l,
              cid: t,
              channelCoreEventType: d,
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
            var m = [];
            (a.includes(s.AdminActivity) &&
              m.push(
                o(
                  "WAWebNewsletterToggleAdminActivityMuteStateAction",
                ).toggleNewsletterAdminActivityMuteStateAction(t, r, c),
              ),
              a.includes(s.FollowerActivity) &&
                m.push(
                  o(
                    "WAWebNewsletterToggleFollowerActivityMuteStateAction",
                  ).toggleNewsletterFollowerActivityMuteStateAction(t, r),
                ),
              yield (e || (e = n("Promise"))).all(m));
          },
        )),
        c.apply(this, arguments)
      );
    }
    ((l.NewsletterUserSetting = s), (l.updateNewsletterUserSettingsAction = u));
  },
  98,
);
