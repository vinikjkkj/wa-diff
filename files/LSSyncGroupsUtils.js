__d(
  "LSSyncGroupsUtils",
  ["CurrentLocale", "LSIntEnum", "LSMailboxInitialSyncCursor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { locale: r("CurrentLocale").get() },
      u = {
        canIgnoreTimestamp: !1,
        currentCursor: void 0,
        dataTraceId: void 0,
        groupId: (e || (e = o("LSIntEnum"))).ofNumber(0),
        initTraceTimestampMs: void 0,
        lastSyncCompletedTimestampMs: void 0,
        lastSyncRequestTimestampMs: e.ofNumber(0),
        minTimeToSyncTimestampMs: e.ofNumber(-1),
        priority: e.ofNumber(0),
        regionHint: void 0,
        sendSyncParams: !0,
        syncChannel: o("LSMailboxInitialSyncCursor").syncChannel,
        syncParams: JSON.stringify(s),
        syncStatus: e.ofNumber(0),
      },
      c = {
        epochId: void 0,
        failureCount: e.ofNumber(0),
        lastDelayedRequestTimestampMs: void 0,
        lastSentTimestampMs: e.ofNumber(0),
        lastSyncRequestTimestampMs: e.ofNumber(0),
        networkTaskIdentifier: void 0,
        syncDatabaseId: e.ofNumber(0),
        taskQueueName: "",
      },
      d = e.ofNumber(9999999999999);
    ((l.defaultSyncGroup = u),
      (l.defaultNetworkRequest = c),
      (l.neverSyncTimestamp = d));
  },
  98,
);
