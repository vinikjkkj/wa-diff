__d(
  "WAWebGetHistorySyncMetrics",
  [
    "WAWebGetHistorySyncProgress",
    "WAWebGetMetricHistorySyncPayloadType",
    "WAWebMdBootstrapDataAppliedWamEvent",
    "WAWebMdBootstrapHistoryDataDownloadedWamEvent",
    "WAWebMdBootstrapHistoryDataStartDownloadingWamEvent",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapSource",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
              e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_BOOTSTRAP
                ? o("WAWebWamEnumMdBootstrapPayloadType")
                    .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL
                : o("WAWebWamEnumMdBootstrapPayloadType")
                    .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
            r = o(
              "WAWebGetMetricHistorySyncPayloadType",
            ).getMetricHistorySyncPayloadType(e.syncType),
            a = yield o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getMdSessionId(),
            i = yield o("WAWebGetHistorySyncProgress").getHistorySyncProgress(
              e,
            ),
            l = new (o(
              "WAWebMdBootstrapHistoryDataStartDownloadingWamEvent",
            ).MdBootstrapHistoryDataStartDownloadingWamEvent)({
              mdBootstrapPayloadType: n,
              mdBootstrapPayloadSize: e.historySyncPayloadSize,
              mdBootstrapHistoryPayloadType: r,
              mdSessionId: a,
              historySyncStageProgress: i,
            }),
            s = new (o(
              "WAWebMdBootstrapHistoryDataDownloadedWamEvent",
            ).MdBootstrapHistoryDataDownloadedWamEvent)({
              mdBootstrapPayloadType: n,
              mdBootstrapPayloadSize: e.historySyncPayloadSize,
              mdBootstrapHistoryPayloadType: r,
              mdSessionId: a,
              historySyncStageProgress: i,
            }),
            u = new (o(
              "WAWebMdBootstrapDataAppliedWamEvent",
            ).MdBootstrapDataAppliedWamEvent)({
              mdBootstrapPayloadType: n,
              mdBootstrapSource: o("WAWebWamEnumMdBootstrapSource")
                .MD_BOOTSTRAP_SOURCE.HISTORY,
              mdBootstrapHistoryPayloadType: r,
              mdSessionId: a,
              sentViaMms: t,
              historySyncStageProgress: i,
            });
          e.chunkOrder != null &&
            ((l.historySyncChunkOrder = e.chunkOrder),
            (s.historySyncChunkOrder = e.chunkOrder),
            (u.historySyncChunkOrder = e.chunkOrder));
          var c = yield o(
            "WAWebSyncdMdSyncFieldstatMeta",
          ).MdSyncFieldStatsMeta.getStorageEstimation();
          return (
            c.mdStorageQuotaBytes !==
              o("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE &&
              ((s.mdStorageQuotaUsedBytes = c.mdStorageQuotaUsedBytes),
              (s.mdStorageQuotaBytes = c.mdStorageQuotaBytes)),
            {
              historySyncStartDownloadingMetric: l,
              historySyncDownloadedMetric: s,
              historySyncDataAppliedMetric: u,
            }
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.getHistorySyncMetrics = e;
  },
  98,
);
