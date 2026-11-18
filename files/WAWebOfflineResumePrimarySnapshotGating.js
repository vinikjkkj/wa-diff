__d(
  "WAWebOfflineResumePrimarySnapshotGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "history_sync_recent_conversations_on_demand_companion",
      );
    }
    l.isOfflineResumePrimarySnapshotEnabled = e;
  },
  98,
);
