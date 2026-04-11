__d(
  "WAWebKeepInChatNotifWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          KeepInChatNotif: [
            3484,
            {
              kicGroupNotificationTaps: [3, e.TYPES.INTEGER],
              kicGroupNotifications: [4, e.TYPES.INTEGER],
              kicNotificationTaps: [5, e.TYPES.INTEGER],
              kicNotifications: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { KeepInChatNotif: [] },
      );
    l.KeepInChatNotifWamEvent = s;
  },
  98,
);
