__d(
  "WAWebHandleWorkerCompatibleRecentSyncChunk",
  [
    "Promise",
    "WABinary",
    "WACommonTaskScheduler",
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
    "WAWebSyncGatingUtils",
    "WAWebUpdateLidMetadataApi",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
    "gkx",
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
            l = o(
              "WAWebSyncGatingUtils",
            ).isRecentSyncDownloadOptimizationEnabled(),
            v = l ? t.downloadedHistorySyncPayload : null,
            S = yield o(
              "WAWebHistorySyncNotificationUtils",
            ).getHistorySyncMetrics(t, !0),
            L = S.historySyncDataAppliedMetric,
            E = S.historySyncDownloadedMetric,
            I = S.historySyncStartDownloadingMetric,
            T = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "HandleWorkerCompatibleRecentSyncChunk",
            }),
            D = null;
          if (v != null)
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
              (D = v));
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
                I,
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
                (D = yield o(
                  "WAWebDownloadManager",
                ).downloadManager.downloadAndMaybeDecrypt(
                  babelHelpers.extends(
                    { signal: new AbortController().signal, downloadQpl: T },
                    t.downloadOptions,
                  ),
                )),
                T.endSuccess());
            } catch (e) {
              if (
                (T.endFailWithError("download_failed", String(e)),
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
              var x = r("WAWebMsgKey").fromString(t.msgKey);
              (o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
                historySyncDownloadMetric: E,
                isSuccess: !1,
                startTs: t.historySyncStepStartedTs,
              }),
                r("WAWebSendHistSyncServerErrorReceiptJob")(
                  x.remote,
                  x.id,
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
          var $ =
            o("WAWebABProps").getABPropConfigValue(
              "web_history_sync_worker_enabled",
            ) === !0;
          if (
            (a.addPoint("history_sync_process_start", {
              bool: { isInWorker: $ },
              int: {
                isWorkerV2: r("gkx")("17524")
                  ? r("gkx")("20033")
                    ? 1
                    : 0
                  : -1,
              },
            }),
            $)
          ) {
            (yield k({
              blob: D,
              chunkInfo: t,
              historySyncDataAppliedMetric: L,
              historySyncDownloadedMetric: E,
              progress: i,
              qpl: a,
            }),
              a.addPoint("history_sync_process_end"));
            return;
          }
          var P = new (o("WABinary").Binary)(D),
            N = yield o("WAGzip").inflate(P.readByteArrayView()),
            M = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
              N,
            ),
            w = [];
          (M.phoneNumberToLidMappings.forEach(function (e) {
            var t = e.lidJid,
              n = e.pnJid;
            t != null &&
              n != null &&
              w.push({
                lid: o("WAWebWidFactory").createUserLidOrThrow(t),
                pn: o("WAWebWidFactory").createUserWidOrThrow(n),
              });
          }),
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
              mappings: w,
              flushImmediately: !0,
              identityChangeHandlingEnabled: !1,
              learningSource: "other",
            }),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][recent sync] learned ",
                  " mappings",
                ])),
              w.length,
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
                M.conversations.length,
              ),
            ));
          var A = o("WATimeUtils").unixTimeMs();
          (t.chunkOrder != null &&
            o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
            (M.conversations = M.conversations.reduce(function (e, t) {
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
          var F = [],
            O = [],
            B = [];
          try {
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[recent sync] processing msgs",
                ])),
            ),
              o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
                ? yield r("WACommonTaskScheduler").yield()
                : yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var W = yield o(
                "WAWebPreprocessHistorySyncProto",
              ).preprocessHistorySyncProto(M, w),
              q = W.associatedMsgs,
              U = W.chatRows,
              V = W.chatsWithRecentOrFullSyncMsgs,
              H = W.lastMsgs,
              G = W.missingParentsCache,
              z = W.recentOrFullSyncMsgs,
              j = W.threadMsgs,
              K = W.totalChunkMsgCount,
              Q = W.unifiedAddons;
            (l ||
              ((E.mdBootstrapMessagesCount = K),
              (E.mdBootstrapChatsCount = M.conversations.length),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp: A,
                historySyncDownloadMetric: E,
                isSuccess: !0,
                startTs: t.historySyncStepStartedTs,
              })),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .MESSAGE_PREPROCESSED,
                t.chunkOrder,
              ),
              z.length !== 0
                ? yield o(
                    "WAWebHandleHistorySyncMsg",
                  ).handleProgressiveHistorySyncMsgs({
                    associatedMsgs: q,
                    chatsWithRecentOrFullSyncMsgs: Array.from(V),
                    chunkOrder: t.chunkOrder,
                    lastMsgs: H,
                    missingParentsCache: G,
                    recentOrFullSyncMsgs: z,
                    syncType: t.syncType,
                    threadMsgs: j,
                    unifiedAddons: Q,
                  })
                : o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[recent sync] no msgs to handle",
                      ])),
                  ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncTotalProcessedMessageCount(K),
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
              var X = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                Y = new Set(),
                J = [],
                Z = 0;
              Z < M.conversations.length;
              Z++
            ) {
              var ee = M.conversations[Z],
                te = o("WAWebWidFactory").createWid(ee.id),
                ne = U[Z],
                re =
                  (ne == null ? void 0 : ne.id) != null
                    ? o("WAWebWidFactory").createWid(ne.id)
                    : te;
              Y.add(re.toString());
              var oe = (X == null ? void 0 : X[ee.id]) != null;
              if (oe) {
                var ae = ee.endOfHistoryTransferType;
                ae != null &&
                  J.push(
                    o(
                      "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                    ).updateEndOfHistorySync(re, ae),
                  );
              }
            }
            (yield (R || (R = n("Promise"))).all(J),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerHistorySyncChunkProcessed(Y),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: L,
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
                  K,
                  V.length,
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
                historySyncDataAppliedMetric: L,
                startTs: t.historySyncStepStartedTs,
                isSuccess: !1,
                forceFlushWamBuffer: !0,
                failureReason: String(e),
              }),
              e
            );
          }
          var ie = r("WAWebMsgKey").fromString(t.msgKey),
            le = new Map();
          (le.set(ie.remote, [ie.id]),
            t.syncType !==
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_STATUS_V3 &&
              o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: ie.remote,
                type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                  .HISTORY_SYNC_COMPLETION,
                groupedReceipt: le,
              }),
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
              mappings: O,
              flushImmediately: !0,
              identityChangeHandlingEnabled: !1,
              learningSource: "other",
            }),
            yield o("WAWebUpdateLidMetadataApi").updateLidMetadata({
              updates: F,
            }),
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
              (yield o("WAWebSetUsernameJob").setUsernamesJob(B)),
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
            i = e.historySyncDownloadedMetric,
            l = e.progress,
            s = e.qpl,
            u = o("WATimeUtils").unixTimeMs();
          s.addPoint("get_bridge_start", {
            bool: {
              isABPropsReady: o("WAWebABPropsCache").isABPropConfigsReady(),
              isBridgeReady: o(
                "WAWebBackendWorkerClient",
              ).isBackendWorkerBridgeReady(),
            },
          });
          var c = yield o("WAWebBackendWorkerClient").getBackendWorkerBridge();
          (s.addPoint("get_bridge_end"),
            s.addPoint("process_in_worker_start", {
              int: { dataSize: t.byteLength },
            }));
          var d = yield c.sendAndReceive(
            "historySync",
            "processV2",
            { data: t, chunkInfo: n },
            !1,
            void 0,
            void 0,
            [t],
          );
          if (
            (s.addPoint("process_in_worker_end"),
            s.addPoint("post_processing_start"),
            !d.success)
          )
            throw (
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: a,
                startTs: n.historySyncStepStartedTs,
                isSuccess: !1,
                forceFlushWamBuffer: !0,
                failureReason: d.error,
              }),
              s.endFail(d.error),
              r("err")(d.error)
            );
          var m = d.value,
            p = m.conversationLength,
            _ = m.totalChunkMsgCount;
          (o(
            "WAWebSyncGatingUtils",
          ).isRecentSyncDownloadOptimizationEnabled() ||
            ((i.mdBootstrapMessagesCount = _),
            (i.mdBootstrapChatsCount = p),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDownloadedMetric({
              chunkDownloadFinishTimestamp: u,
              historySyncDownloadMetric: i,
              isSuccess: !0,
              startTs: n.historySyncStepStartedTs,
            })),
            yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
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
          var f = r("WAWebMsgKey").fromString(n.msgKey),
            g = new Map();
          (g.set(f.remote, [f.id]),
            n.syncType !==
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_STATUS_V3 &&
              o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: f.remote,
                type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                  .HISTORY_SYNC_COMPLETION,
                groupedReceipt: g,
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
            l === 100 &&
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
            s.addPoint("post_processing_end"));
        })),
        I.apply(this, arguments)
      );
    }
    ((l.handleWorkerCompatibleRecentSyncChunk = L),
      (l.doRecentHistorySyncinWorkerV2 = k));
  },
  98,
);
