__d(
  "WAWebHandleWorkerCompatibleRecentSyncChunk",
  [
    "Promise",
    "WABinary",
    "WAGzip",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerClient",
    "WAWebDBCreateLidPnMappings",
    "WAWebDownloadManager",
    "WAWebGetHistorySyncMetrics",
    "WAWebGetHistorySyncProgress",
    "WAWebHandleHistorySyncMsg",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncProgress",
    "WAWebHistorySyncWorkerCompatibleNotificationUtils",
    "WAWebHttpErrors",
    "WAWebMetricsAttributionActions",
    "WAWebMmsClient",
    "WAWebMsgKey",
    "WAWebPreprocessHistorySyncProto",
    "WAWebProtobufsHistorySync.pb",
    "WAWebReleaseToEventLoop",
    "WAWebSendHistSyncServerErrorReceiptJob",
    "WAWebSendReceiptJobCommon",
    "WAWebSetUsernameJob",
    "WAWebStartMediaDownloadQpl",
    "WAWebUpdateLidMetadataApi",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
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
            a.addPoint("download_start"),
            o(
              "WAWebMetricsAttributionActions",
            ).startHistorySyncAttributionTracking(t.syncType));
          var i = yield o("WAWebGetHistorySyncProgress").getHistorySyncProgress(
              t,
            ),
            l = t.downloadedHistorySyncPayload,
            v = yield o("WAWebGetHistorySyncMetrics").getHistorySyncMetrics(
              t,
              !0,
            ),
            S = v.historySyncDataAppliedMetric,
            L = v.historySyncDownloadedMetric,
            E = v.historySyncStartDownloadingMetric,
            I = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "HandleWorkerCompatibleRecentSyncChunk",
            }),
            T = null;
          if (l != null)
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[recent sync] use pre-downloaded payload ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
              )
              .tags("history-sync"),
              (T = l));
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
                E,
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
                  o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                    t,
                  ),
                )
                .tags("history-sync"),
                (T = yield o(
                  "WAWebDownloadManager",
                ).downloadManager.downloadAndMaybeDecrypt(
                  babelHelpers.extends(
                    { signal: new AbortController().signal, downloadQpl: I },
                    t.downloadOptions,
                  ),
                )),
                I.endSuccess());
            } catch (e) {
              if (
                (I.endFailWithError("download_failed", String(e)),
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
              var D = r("WAWebMsgKey").fromString(t.msgKey);
              (o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                historySyncDownloadMetric: L,
                isSuccess: !1,
                startTs: t.historySyncStepStartedTs,
              }),
                r("WAWebSendHistSyncServerErrorReceiptJob")(
                  D.remote,
                  D.id,
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
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
              ));
          }
          a.addPoint("download_end");
          var x =
            o("WAWebABProps").getABPropConfigValue(
              "web_history_sync_worker_enabled",
            ) === !0;
          if (
            (a.addPoint("history_sync_process_start", {
              bool: { isInWorker: x },
            }),
            x)
          ) {
            (yield k({
              blob: T,
              chunkInfo: t,
              historySyncDataAppliedMetric: S,
              progress: i,
              qpl: a,
            }),
              a.addPoint("history_sync_process_end"));
            return;
          }
          var $ = new (o("WABinary").Binary)(T),
            P = yield o("WAGzip").inflate($.readByteArrayView()),
            N = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
              P,
            ),
            M = [];
          (N.phoneNumberToLidMappings.forEach(function (e) {
            var t = e.lidJid,
              n = e.pnJid;
            t != null &&
              n != null &&
              M.push({
                lid: o("WAWebWidFactory").createUserLidOrThrow(t),
                pn: o("WAWebWidFactory").createUserWidOrThrow(n),
              });
          }),
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
              mappings: M,
              flushImmediately: !0,
              identityChangeHandlingEnabled: !1,
              learningSource: "recent-sync-chunk",
            }),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][recent sync] learned ",
                  " mappings",
                ])),
              M.length,
            ),
            o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              t.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED,
              t.chunkOrder,
            ),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][recent sync] chunk decoded, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                t,
                void 0,
                N.conversations.length,
              ),
            ),
            t.chunkOrder != null &&
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
            (N.conversations = N.conversations.reduce(function (e, t) {
              var n = null;
              try {
                n = o("WAWebWidFactory").createWid(t.id);
              } catch (e) {
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        '[handleWorkerCompatibleRecentSyncChunk] createWid failed "',
                        '" ',
                        "",
                      ])),
                    t.id,
                    e,
                  )
                  .tags("history-sync");
              }
              return n ? e.concat(t) : e;
            }, [])));
          var w = [],
            A = [],
            F = [];
          try {
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[recent sync] processing msgs",
                ])),
            ),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var O = yield o(
                "WAWebPreprocessHistorySyncProto",
              ).preprocessHistorySyncProto(N, M),
              B = O.associatedMsgs,
              W = O.chatRows,
              q = O.chatsWithRecentOrFullSyncMsgs,
              U = O.lastMsgs,
              V = O.missingParentsCache,
              H = O.recentOrFullSyncMsgs,
              G = O.threadMsgs,
              z = O.totalChunkMsgCount,
              j = O.unifiedAddons;
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              t.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                .MESSAGE_PREPROCESSED,
              t.chunkOrder,
            ),
              H.length !== 0
                ? yield o(
                    "WAWebHandleHistorySyncMsg",
                  ).handleProgressiveHistorySyncMsgs({
                    associatedMsgs: B,
                    chatsWithRecentOrFullSyncMsgs: Array.from(q),
                    chunkOrder: t.chunkOrder,
                    lastMsgs: U,
                    missingParentsCache: V,
                    recentOrFullSyncMsgs: H,
                    syncType: t.syncType,
                    threadMsgs: G,
                    unifiedAddons: j,
                  })
                : o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[recent sync] no msgs to handle",
                      ])),
                  ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncTotalProcessedMessageCount(z),
              yield o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
                t.syncType,
                t.chunkOrder,
                i,
              ),
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
              yield o(
                "WAWebApiHistorySyncNotification",
              ).updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder));
            for (
              var K = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                Q = new Set(),
                X = [],
                Y = 0;
              Y < N.conversations.length;
              Y++
            ) {
              var J = N.conversations[Y],
                Z = o("WAWebWidFactory").createWid(J.id),
                ee = W[Y],
                te =
                  (ee == null ? void 0 : ee.id) != null
                    ? o("WAWebWidFactory").createWid(ee.id)
                    : Z;
              Q.add(te.toString());
              var ne = (K == null ? void 0 : K[J.id]) != null;
              if (ne) {
                var re = J.endOfHistoryTransferType;
                re != null &&
                  X.push(
                    o(
                      "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                    ).updateEndOfHistorySync(te, re),
                  );
              }
            }
            (yield (R || (R = n("Promise"))).all(X),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerHistorySyncChunkProcessed(Q),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: S,
                startTs: t.historySyncStepStartedTs,
                isSuccess: !0,
              }),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .APPLIED,
                t.chunkOrder,
              ),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][recent sync] storing recent chunk complete, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  t,
                  z,
                  q.length,
                ),
              ));
          } catch (e) {
            throw (
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleWorkerCompatibleRecentSyncChunk] failed ",
                    "",
                  ])),
                e,
              ),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: S,
                startTs: t.historySyncStepStartedTs,
                isSuccess: !1,
                forceFlushWamBuffer: !0,
                failureReason: String(e),
              }),
              e
            );
          }
          var oe = r("WAWebMsgKey").fromString(t.msgKey),
            ae = new Map();
          (ae.set(oe.remote, [oe.id]),
            t.syncType !==
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_STATUS_V3 &&
              o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: oe.remote,
                type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                  .HISTORY_SYNC_COMPLETION,
                groupedReceipt: ae,
              }),
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
              mappings: A,
              flushImmediately: !0,
              identityChangeHandlingEnabled: !1,
              learningSource: "recent-sync-chunk",
            }),
            yield o("WAWebUpdateLidMetadataApi").updateLidMetadata({
              updates: w,
            }),
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
              (yield o("WAWebSetUsernameJob").setUsernamesJob(F)),
            yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
              t.msgKey,
              t.syncType,
              t.chunkOrder,
            ),
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
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "MMS client delete error",
                      ])),
                  );
                }),
            i === 100 &&
              (o("WALogger")
                .LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
            a.addPoint("history_sync_process_end"));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.blob,
            n = e.chunkInfo,
            a = e.historySyncDataAppliedMetric,
            i = e.progress,
            l = e.qpl;
          l.addPoint("get_bridge_start", {
            bool: {
              isABPropsReady: o("WAWebABPropsCache").isABPropConfigsReady(),
              isBridgeReady: o(
                "WAWebBackendWorkerClient",
              ).isBackendWorkerBridgeReady(),
            },
          });
          var s = yield o("WAWebBackendWorkerClient").getBackendWorkerBridge();
          (l.addPoint("get_bridge_end"),
            l.addPoint("process_in_worker_start", {
              int: { dataSize: t.byteLength },
            }));
          var u = yield s.sendAndReceive(
            "historySync",
            "processV2",
            { data: t, chunkInfo: n },
            !1,
            void 0,
            void 0,
            [t],
          );
          if (
            (l.addPoint("process_in_worker_end"),
            l.addPoint("post_processing_start"),
            !u.success)
          )
            throw (
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: a,
                startTs: n.historySyncStepStartedTs,
                isSuccess: !1,
                forceFlushWamBuffer: !0,
                failureReason: u.error,
              }),
              l.endFail(u.error),
              r("err")(u.error)
            );
          (yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
            n.msgKey,
            n.syncType,
            n.chunkOrder,
          ),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDataAppliedMetric({
              historySyncDataAppliedMetric: a,
              startTs: n.historySyncStepStartedTs,
              isSuccess: !0,
            }));
          var c = r("WAWebMsgKey").fromString(n.msgKey),
            d = new Map();
          (d.set(c.remote, [c.id]),
            n.syncType !==
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_STATUS_V3 &&
              o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: c.remote,
                type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                  .HISTORY_SYNC_COMPLETION,
                groupedReceipt: d,
              }),
            n.downloadOptions.encFilehash != null &&
              r("WAWebMmsClient")
                .deleteMdHistorySyncBlob({
                  directPath: n.downloadOptions.directPath,
                  encFilehash: n.downloadOptions.encFilehash,
                  signal: new AbortController().signal,
                  encHandle: n.encHandle,
                  companionUserSecret: o(
                    "WAWebUserPrefsIndexedDBStorage",
                  ).userPrefsIdb.get("WAWebCompanionMetaNonce"),
                })
                .catch(function (e) {
                  o("WALogger").WARN(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "MMS client delete error",
                      ])),
                  );
                }),
            i === 100 &&
              (o("WALogger")
                .LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][recent sync] Recent history sync complete",
                    ])),
                )
                .tags("history-sync"),
              o(
                "WAWebMetricsAttributionActions",
              ).stopHistorySyncAttributionTracking(n.syncType),
              yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                recentCompleted: !0,
              }),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerRecentChatHistorySynced()),
            l.addPoint("post_processing_end"));
        })),
        I.apply(this, arguments)
      );
    }
    ((l.handleWorkerCompatibleRecentSyncChunk = L),
      (l.doRecentHistorySyncinWorkerV2 = k));
  },
  98,
);
