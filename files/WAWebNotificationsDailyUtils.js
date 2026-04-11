__d(
  "WAWebNotificationsDailyUtils",
  [
    "$InternalEnum",
    "WAWebChatFlowTypes",
    "WAWebDailyAggregatedStatsCollection",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "KIC_NOTIFICATION",
      "KIC_NOTIFICATION_TAP",
    ]);
    function s(t, n) {
      var a = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      switch (n) {
        case o("WAWebChatFlowTypes").ChatKindType.Chat:
          if (t === e.KIC_NOTIFICATION) a.kicNotifications++;
          else if (t === e.KIC_NOTIFICATION_TAP) a.kicNotificationTaps++;
          else throw r("err")("Invalid count kind " + t);
          break;
        case o("WAWebChatFlowTypes").ChatKindType.Group:
          if (t === e.KIC_NOTIFICATION)
            (a.kicNotifications++, a.kicGroupNotifications++);
          else if (t === e.KIC_NOTIFICATION_TAP)
            (a.kicNotificationTaps++, a.kicGroupNotificationTaps++);
          else throw r("err")("Invalid count kind " + t);
          break;
        case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
        case o("WAWebChatFlowTypes").ChatKindType.Community:
        case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
          break;
      }
    }
    ((l.NotificationDailyCountKind = e),
      (l.incrementNotificationDailyCount = s));
  },
  98,
);
