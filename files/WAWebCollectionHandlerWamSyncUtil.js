__d(
  "WAWebCollectionHandlerWamSyncUtil",
  [
    "WALongInt",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebMdBootstrapAppStateDataDownloadedWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapStepResult",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      o("WASyncdConst").CollectionName.CriticalBlock,
      o("WASyncdConst").CollectionName.CriticalUnblockLow,
    ];
    function s(e, t, n, r, o) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            var l = new (o(
                "WAWebMdBootstrapAppStateDataDownloadedWamEvent",
              ).MdBootstrapAppStateDataDownloadedWamEvent)({
                mdBootstrapPayloadType: e.includes(t)
                  ? o("WAWebWamEnumMdBootstrapPayloadType")
                      .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL
                  : o("WAWebWamEnumMdBootstrapPayloadType")
                      .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
                mdTimestamp: o("WATimeUtils").unixTimeMs(),
                mdBootstrapStepDuration: o("WATimeUtils").unixTimeMs() - n,
                mdBootstrapStepResult:
                  a === "success"
                    ? o("WAWebWamEnumMdBootstrapStepResult")
                        .MD_BOOTSTRAP_STEP_RESULT.SUCCESS
                    : o("WAWebWamEnumMdBootstrapStepResult")
                        .MD_BOOTSTRAP_STEP_RESULT.FAILURE,
                mdSessionId: yield o(
                  "WAWebSyncdMdSyncFieldstatMeta",
                ).MdSyncFieldStatsMeta.getMdSessionId(),
                mdSyncFailureReason: i != null ? i : void 0,
              }),
              s = yield o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getStorageEstimation();
            s.mdStorageQuotaBytes !==
              o("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE &&
              ((l.mdStorageQuotaUsedBytes = s.mdStorageQuotaUsedBytes),
              (l.mdStorageQuotaBytes = s.mdStorageQuotaBytes));
            try {
              var u = o("WALongInt").maybeNumberOrThrowIfTooLarge(r);
              u != null && (l.mdBootstrapPayloadSize = u);
            } catch (e) {}
            l.commit();
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.commitBootstrapAppStateDownloadMetric = s;
  },
  98,
);
