__d(
  "WAWebBizAiHandoffNotificationWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumHandoffNotifActionType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BizAiHandoffNotification: [
            6528,
            {
              handoffNotifAction: [
                1,
                o("WAWebWamEnumHandoffNotifActionType")
                  .HANDOFF_NOTIF_ACTION_TYPE,
              ],
              handoffNotifVersion: [2, e.TYPES.INTEGER],
              handoffReason: [3, e.TYPES.INTEGER],
              notificationId: [4, e.TYPES.STRING],
              threadId: [5, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { BizAiHandoffNotification: [] },
      );
    l.BizAiHandoffNotificationWamEvent = s;
  },
  98,
);
