__d(
  "WAWebHandleWorkerCompatibleRecentSyncChunk",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABPropsCache",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerClient",
    "WAWebDownloadManager",
    "WAWebGetHistorySyncMetrics",
    "WAWebGetHistorySyncProgress",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHttpErrors",
    "WAWebMdSyncDownloadFailureReason",
    "WAWebMetricsAttributionActions",
    "WAWebMmsClient",
    "WAWebMsgKey",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSendHistSyncServerErrorReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebStartMediaDownloadQpl",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "HandleWorkerCompatibleRecentSyncChunk",
          });
          try {
            (o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[recent sync] handleHistorySyncChunk started ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
              )
              .tags("history-sync"),
              n.addPoint("download_start"),
              o(
                "WAWebMetricsAttributionActions",
              ).startHistorySyncAttributionTracking(t.syncType));
            var i = yield o(
                "WAWebGetHistorySyncProgress",
              ).getHistorySyncProgress(t),
              l = t.downloadedHistorySyncPayload,
              _ = yield o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(
                t,
                !0,
              ),
              f = _.historySyncDataAppliedMetric,
              g = _.historySyncDownloadedMetric,
              h = _.historySyncStartDownloadingMetric,
              y = null;
            if (l != null)
              (a.addPoint("history_sync_predownloaded_payload"),
                o("WALogger")
                  .LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[recent sync] use pre-downloaded payload ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(t),
                  )
                  .tags("history-sync"),
                (y = l));
            else {
              (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .DOWNLOADING,
                t.chunkOrder,
              ),
                o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryStartDownloadingMetric(
                  h,
                  t.historySyncStepStartedTs,
                  o("WATimeUtils").unixTimeMs(),
                ));
              try {
                (o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] start downloading chunk, ",
                        "",
                      ])),
                    o(
                      "WAWebHistorySyncLogUtils",
                    ).getHistorySyncLogDetailsString(t),
                  )
                  .tags("history-sync"),
                  (y = yield o(
                    "WAWebDownloadManager",
                  ).downloadManager.downloadAndMaybeDecrypt(
                    babelHelpers.extends(
                      { signal: new AbortController().signal, downloadQpl: a },
                      t.downloadOptions,
                    ),
                  )));
              } catch (e) {
                if (
                  (a.endFailWithError("download_failed", String(e)),
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] history sync download failed",
                      ])),
                  ),
                  o(
                    "WAWebMetricsAttributionActions",
                  ).stopHistorySyncAttributionTracking(t.syncType),
                  e instanceof o("WAWebHttpErrors").HttpNetworkError)
                ) {
                  o(
                    "WAWebApiHistorySyncNotification",
                  ).removeLocalFailureFromInFlightChunk(t.msgKey);
                  return;
                }
                var C = r("WAWebMsgKey").fromString(t.msgKey);
                (o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryDownloadedMetric({
                  chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                  failureReason: o(
                    "WAWebMdSyncDownloadFailureReason",
                  ).getMdSyncDownloadFailureReason(e),
                  historySyncDownloadMetric: g,
                  isSuccess: !1,
                  startTs: t.historySyncStepStartedTs,
                }),
                  r("WAWebSendHistSyncServerErrorReceiptJob")(
                    C.remote,
                    C.id,
                    t.downloadOptions.mediaKey,
                  ),
                  yield o(
                    "WAWebApiHistorySyncNotification",
                  ).markChunkForReuploadPending(t.msgKey));
                return;
              }
              (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .DOWNLOADED,
                t.chunkOrder,
              ),
                (t.downloadOptions.mediaKey = ""),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][recent sync] chunk downloaded, ",
                      "",
                    ])),
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    t,
                  ),
                ));
            }
            (n.addPoint("download_end"),
              n.addPoint("history_sync_process_start"),
              n.addPoint("get_bridge_start", {
                bool: {
                  isABPropsReady: o("WAWebABPropsCache").isABPropConfigsReady(),
                  isBridgeReady: o(
                    "WAWebBackendWorkerClient",
                  ).isBackendWorkerBridgeReady(),
                },
              }));
            var b = yield o(
              "WAWebBackendWorkerClient",
            ).getBackendWorkerBridge();
            (n.addPoint("get_bridge_end"),
              n.addPoint("process_in_worker_start", {
                int: { dataSize: y.byteLength },
              }));
            var v = yield b.sendAndReceive(
              "historySync",
              "processV2",
              { data: y, chunkInfo: t },
              !1,
              void 0,
              void 0,
              [y],
            );
            if (
              (n.addPoint("process_in_worker_end"),
              n.addPoint("post_processing_start"),
              !v.success)
            )
              throw (
                o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryDataAppliedMetric({
                  historySyncDataAppliedMetric: f,
                  startTs: t.historySyncStepStartedTs,
                  isSuccess: !1,
                  forceFlushWamBuffer: !0,
                  failureReason: v.error,
                }),
                n.endFail(v.error),
                r("err")(v.error)
              );
            (yield o(
              "WAWebApiHistorySyncNotification",
            ).updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: f,
                startTs: t.historySyncStepStartedTs,
                isSuccess: !0,
              }));
            var S = r("WAWebMsgKey").fromString(t.msgKey),
              R = new Map();
            (R.set(S.remote, [S.id]),
              t.syncType !==
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_STATUS_V3 &&
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: S.remote,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                    .HISTORY_SYNC_COMPLETION,
                  groupedReceipt: R,
                }),
              t.downloadOptions.encFilehash != null &&
                r("WAWebMmsClient")
                  .deleteMdHistorySyncBlob({
                    directPath: t.downloadOptions.directPath,
                    encFilehash: t.downloadOptions.encFilehash,
                    signal: new AbortController().signal,
                    encHandle: t.encHandle,
                    companionUserSecret: o(
                      "WAWebUserPrefsIndexedDBStorage",
                    ).userPrefsIdb.get("WAWebCompanionMetaNonce"),
                  })
                  .catch(function (e) {
                    o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "MMS client delete error",
                        ])),
                    );
                  }),
              i === 100 &&
                (o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] Recent history sync complete",
                      ])),
                  )
                  .tags("history-sync"),
                o(
                  "WAWebMetricsAttributionActions",
                ).stopHistorySyncAttributionTracking(t.syncType),
                yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                  recentCompleted: !0,
                }),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerRecentChatHistorySynced()),
              n.addPoint("post_processing_end"),
              n.addPoint("history_sync_process_end"),
              a.isActive() && a.endSuccess());
          } catch (e) {
            throw (
              a.isActive() &&
                a.endFailWithError(
                  "worker_compatible_history_sync_chunk_failed",
                  String(e),
                ),
              e
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    l.handleWorkerCompatibleRecentSyncChunk = _;
  },
  98,
);
