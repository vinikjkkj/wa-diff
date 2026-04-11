__d(
  "WAWebHandleReportServerSyncNotification",
  ["WAWebMdAppStateOfflineNotificationsWamEvent"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s() {
      if (!(e.size < 1)) {
        var t = 0;
        (Array.from(e.entries()).forEach(function (e) {
          var n = e[1];
          t += n - 1;
        }),
          new (o(
            "WAWebMdAppStateOfflineNotificationsWamEvent",
          ).MdAppStateOfflineNotificationsWamEvent)({
            redundantCount: t,
          }).commit(),
          e.clear());
      }
    }
    ((l.offlineNotificationsCount = e), (l.reportOfflineNotifications = s));
  },
  98,
);
