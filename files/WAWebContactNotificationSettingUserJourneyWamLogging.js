__d(
  "WAWebContactNotificationSettingUserJourneyWamLogging",
  [
    "WAWebContactNotificationSettingUserJourneyWamEvent",
    "WAWebGetSharedSessionId",
    "WAWebWamEnumContactNotificationSettingActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e) {
          (e === void 0 &&
            (e = o("WAWebGetSharedSessionId").getSharedSessionId()),
            (this.$1 = e));
        }
        var t = e.prototype;
        return (
          (t.$2 = function (t, n, r) {
            new (o(
              "WAWebContactNotificationSettingUserJourneyWamEvent",
            ).ContactNotificationSettingUserJourneyWamEvent)({
              appSessionId: this.$1,
              contactNotificationSettingActionType: t,
              uiSurface: n,
              groupSize: r,
            }).commit();
          }),
          (t.logMuteAllMentionsToggle = function (t, n, r) {
            this.$2(
              t
                ? o("WAWebWamEnumContactNotificationSettingActionType")
                    .CONTACT_NOTIFICATION_SETTING_ACTION_TYPE
                    .MUTE_MENTION_EVERYONE_ON
                : o("WAWebWamEnumContactNotificationSettingActionType")
                    .CONTACT_NOTIFICATION_SETTING_ACTION_TYPE
                    .MUTE_MENTION_EVERYONE_OFF,
              n,
              r,
            );
          }),
          e
        );
      })(),
      s = new e();
    l.ContactNotificationSettingUserJourneyLogger = s;
  },
  98,
);
