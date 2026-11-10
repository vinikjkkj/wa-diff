__d(
  "WAWebHandleWorkerCompatibleRecentSyncChunk",
  [
    "JSResourceForInteraction",
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
    "WAWebOmittedConversationMetadataCapabilities",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSendHistSyncServerErrorReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebStartMediaDownloadQpl",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = r("JSResourceForInteraction")(
        "WAWebOmittedConversationMetadataReceiver",
      ).__setRef("WAWebHandleWorkerCompatibleRecentSyncChunk");
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "HandleWorkerCompatibleRecentSyncChunk",
          });
          try {
            var i;
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
            var l = yield o(
                "WAWebGetHistorySyncProgress",
              ).getHistorySyncProgress(t),
              _ = o("WAWebHistorySyncNotificationUtils").maybeGetInlinePayload(
                t,
              ),
              f = (i = t.downloadedHistorySyncPayload) != null ? i : _,
              h = yield o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(
                t,
                _ == null,
              ),
              y = h.historySyncDataAppliedMetric,
              b = h.historySyncDownloadedMetric,
              v = h.historySyncStartDownloadingMetric,
              S = null;
            if (f != null)
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
                (S = f));
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
                  v,
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
                  (S = yield o(
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
                var R = r("WAWebMsgKey").fromString(t.msgKey);
                (o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryDownloadedMetric({
                  chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                  failureReason: o(
                    "WAWebMdSyncDownloadFailureReason",
                  ).getMdSyncDownloadFailureReason(e),
                  historySyncDownloadMetric: b,
                  isSuccess: !1,
                  startTs: t.historySyncStepStartedTs,
                }),
                  r("WAWebSendHistSyncServerErrorReceiptJob")(
                    R.remote,
                    R.id,
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
            var L = yield o(
              "WAWebBackendWorkerClient",
            ).getBackendWorkerBridge();
            (n.addPoint("get_bridge_end"),
              n.addPoint("process_in_worker_start", {
                int: { dataSize: S.byteLength },
              }));
            var E = o(
                "WAWebOmittedConversationMetadataCapabilities",
              ).canReadOmittedMetadata(),
              k = E ? yield g.load() : null,
              I = yield L.sendAndReceive(
                "historySync",
                "processV2",
                { data: S, chunkInfo: t, omittedMetadataEnabled: E },
                !1,
                void 0,
                void 0,
                [S],
              );
            if (
              (n.addPoint("process_in_worker_end"),
              n.addPoint("post_processing_start"),
              !I.success)
            )
              throw (
                o(
                  "WAWebHistorySyncNotificationUtils",
                ).commitHistoryDataAppliedMetric({
                  historySyncDataAppliedMetric: y,
                  startTs: t.historySyncStepStartedTs,
                  isSuccess: !1,
                  forceFlushWamBuffer: !0,
                  failureReason: I.error,
                }),
                n.endFail(I.error),
                r("err")(I.error)
              );
            if (I.value.omittedMetadata != null) {
              try {
                var T = yield k == null
                  ? void 0
                  : k.handleDecodedOmittedMetadata(I.value.omittedMetadata, t);
                if (T !== !0)
                  throw r("err")("Omitted metadata receiver is unavailable");
              } finally {
                o(
                  "WAWebMetricsAttributionActions",
                ).stopHistorySyncAttributionTracking(t.syncType);
              }
              (a.isActive() && a.endSuccess(), n.endSuccess());
              return;
            }
            if (
              (yield k == null
                ? void 0
                : k.recordOrdinaryRecentForOmittedMetadata(t.syncType),
              t.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT && !r("gkx")("26258"))
            ) {
              var D;
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[odhs-v2] [RECENT] STORED: ordinary worker chunk order=",
                    ", conversations=",
                    ", messages=",
                    ", progress=",
                    "%.",
                  ])),
                (D = t.chunkOrder) != null ? D : "unknown",
                I.value.conversationLength,
                I.value.totalChunkMsgCount,
                l,
              );
            }
            (yield o(
              "WAWebApiHistorySyncNotification",
            ).updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: y,
                startTs: t.historySyncStepStartedTs,
                isSuccess: !0,
              }));
            var x = r("WAWebMsgKey").fromString(t.msgKey),
              $ = new Map();
            ($.set(x.remote, [x.id]),
              t.syncType !==
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .INITIAL_STATUS_V3 &&
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: x.remote,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                    .HISTORY_SYNC_COMPLETION,
                  groupedReceipt: $,
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
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "MMS client delete error",
                        ])),
                    );
                  }),
              yield C(t, l, n, a));
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
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            (t === 100 &&
              (o("WALogger")
                .LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][recent sync] Recent history sync complete",
                    ])),
                )
                .tags("history-sync"),
              o(
                "WAWebMetricsAttributionActions",
              ).stopHistorySyncAttributionTracking(e.syncType),
              yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                recentCompleted: !0,
              }),
              r("gkx")("26258") ||
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[odhs-v2] [RECENT] DONE: ordinary worker RECENT reached 100% and completion persisted.",
                    ])),
                ),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerRecentChatHistorySynced()),
              n.addPoint("post_processing_end"),
              n.addPoint("history_sync_process_end"),
              a.isActive() && a.endSuccess());
          },
        )),
        b.apply(this, arguments)
      );
    }
    l.handleWorkerCompatibleRecentSyncChunk = h;
  },
  98,
);
