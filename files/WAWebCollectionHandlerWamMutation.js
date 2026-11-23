__d(
  "WAWebCollectionHandlerWamMutation",
  [
    "WATimeUtils",
    "WAWebMdAppStateMessageRangeWamEvent",
    "WAWebMdBootstrapDataAppliedWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebSyncdMetrics",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapSource",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      new (o(
        "WAWebMdAppStateMessageRangeWamEvent",
      ).MdAppStateMessageRangeWamEvent)({
        additionalMessagesCount: e,
      }).commit();
    }
    async function s(e, t, n) {
      new (o(
        "WAWebMdBootstrapDataAppliedWamEvent",
      ).MdBootstrapDataAppliedWamEvent)({
        mdBootstrapPayloadType: o("WAWebWamEnumMdBootstrapPayloadType")
          .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
        mdBootstrapSource: o("WAWebWamEnumMdBootstrapSource")
          .MD_BOOTSTRAP_SOURCE.APP_STATE,
        mdSessionId: await o(
          "WAWebSyncdMdSyncFieldstatMeta",
        ).MdSyncFieldStatsMeta.getMdSessionId(),
        mdTimestamp: o("WATimeUtils").unixTimeMs(),
        mdBootstrapStepDuration: n,
        collection: o("WAWebSyncdMetrics").collectionNameToMetric(e),
        usedSnapshot:
          t ===
          o("WAWebSyncdMetrics").SyncdBootstrapDataAppliedSnapshotUsed
            .SNAPSHOT_USED,
      }).commit();
    }
    ((l.logMetricsForMutationLength = e), (l.logMetricsForDataApplied = s));
  },
  98,
);
