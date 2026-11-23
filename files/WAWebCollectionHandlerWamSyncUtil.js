__d(
  "WAWebCollectionHandlerWamSyncUtil",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebMdBootstrapAppStateDataDownloadedWamEvent",
    "WAWebSyncdConst",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapStepResult",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      o("WAWebSyncdConst").CollectionName.CriticalBlock,
      o("WAWebSyncdConst").CollectionName.CriticalUnblockLow,
    ];
    async function s(t) {
      var n = t.collectionName,
        r = t.downloadSize,
        a = t.downloadStartTs,
        i = t.failureReason,
        l = t.isSuccess,
        s = new (o(
          "WAWebMdBootstrapAppStateDataDownloadedWamEvent",
        ).MdBootstrapAppStateDataDownloadedWamEvent)({
          mdBootstrapPayloadType: e.includes(n)
            ? o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE
                .CRITICAL
            : o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE
                .NON_CRITICAL,
          mdTimestamp: o("WATimeUtils").unixTimeMs(),
          mdBootstrapStepDuration: o("WATimeUtils").unixTimeMs() - a,
          mdBootstrapStepResult:
            l === "success"
              ? o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
                  .SUCCESS
              : o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
                  .FAILURE,
          mdSessionId: await o(
            "WAWebSyncdMdSyncFieldstatMeta",
          ).MdSyncFieldStatsMeta.getMdSessionId(),
          mdSyncFailureReason: i != null ? i : void 0,
        }),
        u = await o(
          "WAWebSyncdMdSyncFieldstatMeta",
        ).MdSyncFieldStatsMeta.getStorageEstimation();
      u.mdStorageQuotaBytes !==
        o("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE &&
        ((s.mdStorageQuotaUsedBytes = u.mdStorageQuotaUsedBytes),
        (s.mdStorageQuotaBytes = u.mdStorageQuotaBytes));
      try {
        var c = o("WALongInt").maybeNumberOrThrowIfTooLarge(r);
        c != null && (s.mdBootstrapPayloadSize = c);
      } catch (e) {}
      s.commit();
    }
    l.commitBootstrapAppStateDownloadMetric = s;
  },
  98,
);
