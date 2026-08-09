__d(
  "LSDeleteThenInsertNotificationsSettingsGraphQLSnapshot",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.db
            .table(175)
            .put({
              id: e[0],
              globalMuteUntil: e[1],
              showMessagePreview: e[4],
              isSoundOn: e[7],
              groupNotificationSetting: e[8],
              oneToOneNotificationSetting: e[9],
              replyReminderSetting: e[10],
              messageReminderDisabled: e[12],
              messageSound: e[13],
              ringtoneSound: e[14],
              newFriendBumpDisabledSetting: e[15],
              globalMuteMessageUntil: e[2],
              globalMuteCallUntil: e[3],
              includeInSwitchAccountBadges: e[11],
              dismissNfbThreadsCount: e[16],
              mutePageAccountMessageReminder: e[17],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSOmnistoreSettingsDeleteThenInsertNotificationsSettingsGraphQLSnapshotStoredProcedure"),
      (e.__tables__ = ["notification_settings"]),
      (a.exports = e));
  },
  null,
);
