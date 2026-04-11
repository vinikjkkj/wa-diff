__d(
  "WAWebMetricsAttributionActions",
  ["WAWebAppTracker", "WAWebProtobufsHistorySync.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (
        (o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.HistorySync,
        ),
        e)
      ) {
        case o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_BOOTSTRAP:
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.CriticalSync,
          );
          break;
        case o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .RECENT:
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.RecentSync,
          );
          break;
        case o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL:
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.FullSync,
          );
          break;
        case o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .ON_DEMAND:
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.OnDemandSync,
          );
          break;
        default:
          break;
      }
    }
    function s(e) {
      switch (e) {
        case o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_BOOTSTRAP:
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.CriticalSync,
          );
          break;
        case o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .RECENT:
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.RecentSync,
          );
          break;
        case o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL:
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.FullSync,
          );
          break;
        case o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .ON_DEMAND:
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.OnDemandSync,
          );
          break;
        default:
          break;
      }
    }
    function u() {
      var e,
        t = [
          (e = o("WAWebAppTracker")).AppTrackerType.HistorySync,
          e.AppTrackerType.CriticalSync,
          e.AppTrackerType.RecentSync,
          e.AppTrackerType.FullSync,
          e.AppTrackerType.OnDemandSync,
        ];
      t.forEach(function (e) {
        o("WAWebAppTracker").AppTracker.stop(e);
      });
    }
    ((l.startHistorySyncAttributionTracking = e),
      (l.stopHistorySyncAttributionTracking = s),
      (l.stopAllHistorySyncAttributionTracking = u));
  },
  98,
);
