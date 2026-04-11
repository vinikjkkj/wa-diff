__d(
  "WAWebHandleWorkerCompatibleRecentSyncChunk",
  [
    "Promise",
    "WABinary",
    "WACommonTaskScheduler",
    "WAGzip",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebApiChatBulkGetByHistory",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          (o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][recent sync] handleHistorySyncChunk started for ",
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
            S = l ? t.downloadedHistorySyncPayload : null,
            R = yield o(
              "WAWebHistorySyncNotificationUtils",
            ).getHistorySyncMetrics(t, !0),
            E = R.historySyncDataAppliedMetric,
            I = R.historySyncDownloadedMetric,
            T = R.historySyncStartDownloadingMetric,
            D = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "HandleWorkerCompatibleRecentSyncChunk",
            }),
            x = null;
          if (S != null)
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][recent sync] get downloaded payload in chunk, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
              )
              .tags("history-sync"),
              (x = S));
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
                T,
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
                (x = yield o(
                  "WAWebDownloadManager",
                ).downloadManager.downloadAndMaybeDecrypt(
                  babelHelpers.extends(
                    { signal: new AbortController().signal, downloadQpl: D },
                    t.downloadOptions,
                  ),
                )),
                D.endSuccess());
            } catch (e) {
              if (
                (D.endFailWithError("download_failed", String(e)),
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
              var $ = r("WAWebMsgKey").fromString(t.msgKey);
              (o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric(
                I,
                t.historySyncStepStartedTs,
                !1,
                o("WATimeUtils").unixTimeMs(),
              ),
                r("WAWebSendHistSyncServerErrorReceiptJob")(
                  $.remote,
                  $.id,
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
          var P =
            o("WAWebABProps").getABPropConfigValue(
              "web_history_sync_worker_enabled",
            ) === !0;
          a.addPoint("unzip_decode_start", { bool: { isInWorker: P } });
          var N;
          (P ? (N = yield k(x, a)) : (N = yield L(x, a)),
            a.addPoint("unzip_decode_end"),
            a.addPoint("persist_start"));
          var M = [];
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
              learningSource: "other",
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
            ));
          var w = o("WATimeUtils").unixTimeMs();
          (t.chunkOrder != null &&
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
                        '[history sync][recent sync] handleWorkerCompatibleRecentSyncChunk: failed to create wid from "',
                        '": ',
                        "",
                      ])),
                    t.id,
                    e,
                  )
                  .tags("history-sync");
              }
              return n ? e.concat(t) : e;
            }, [])));
          var A = [],
            F = [],
            O = [];
          try {
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][recent sync] start processing recent sync messages",
                ])),
            ),
              o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
                ? yield r("WACommonTaskScheduler").yield()
                : yield o("WAPromiseDelays").releaseToEventLoop());
            var B = yield o(
                "WAWebPreprocessHistorySyncProto",
              ).preprocessHistorySyncProto(N, M),
              W = B.associatedMsgs,
              q = B.chatsWithRecentOrFullSyncMsgs,
              U = B.lastMsgs,
              V = B.missingParentsCache,
              H = B.recentOrFullSyncMsgs,
              G = B.threadMsgs,
              z = B.totalChunkMsgCount,
              j = B.unifiedAddons;
            (l ||
              ((I.mdBootstrapMessagesCount = z),
              (I.mdBootstrapChatsCount = N.conversations.length),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric(
                I,
                t.historySyncStepStartedTs,
                !0,
                w,
              )),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .MESSAGE_PREPROCESSED,
                t.chunkOrder,
              ),
              H.length !== 0
                ? yield o(
                    "WAWebHandleHistorySyncMsg",
                  ).handleProgressiveHistorySyncMsgs(
                    H,
                    Array.from(q),
                    j,
                    U,
                    t.syncType,
                    t.chunkOrder,
                    W,
                    V,
                    G,
                  )
                : o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] no messages from history sync need to handle",
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
                X = yield o(
                  "WAWebApiChatBulkGetByHistory",
                ).bulkGetChatsMaybeByHistory(
                  N.conversations.map(function (e) {
                    return e.id;
                  }),
                ),
                Y = [],
                J = 0;
              J < N.conversations.length;
              J++
            ) {
              var Z = N.conversations[J],
                ee = o("WAWebWidFactory").createWid(Z.id),
                te = X[J],
                ne =
                  (te == null ? void 0 : te.id) != null
                    ? o("WAWebWidFactory").createWid(te.id)
                    : ee;
              Q.add(ne.toString());
              var re = (K == null ? void 0 : K[Z.id]) != null;
              if (re) {
                var oe = Z.endOfHistoryTransferType;
                oe != null &&
                  Y.push(
                    o(
                      "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                    ).updateEndOfHistorySync(ne, oe),
                  );
              }
            }
            (yield (v || (v = n("Promise"))).all(Y),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerHistorySyncChunkProcessed(Q),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: E,
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
                    "[history sync][recent sync] handleWorkerCompatibleRecentSyncChunk failed with error ",
                    "",
                  ])),
                e,
              ),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: E,
                startTs: t.historySyncStepStartedTs,
                isSuccess: !1,
                forceFlushWamBuffer: !0,
                failureReason: String(e),
              }),
              e
            );
          }
          var ae = r("WAWebMsgKey").fromString(t.msgKey),
            ie = new Map();
          (ie.set(ae.remote, [ae.id]),
            t.syncType !==
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_STATUS_V3 &&
              o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: ae.remote,
                type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                  .HISTORY_SYNC_COMPLETION,
                groupedReceipt: ie,
              }),
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
              mappings: F,
              flushImmediately: !0,
              identityChangeHandlingEnabled: !1,
              learningSource: "other",
            }),
            yield o("WAWebUpdateLidMetadataApi").updateLidMetadata({
              updates: A,
            }),
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
              (yield o("WAWebSetUsernameJob").setUsernamesJob(O)),
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
            a.addPoint("persist_end"));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.addPoint("process_unzip_decode_start", {
            int: { dataSize: e.byteLength },
          });
          var n = new (o("WABinary").Binary)(e),
            r = yield o("WAGzip").inflate(n.readByteArrayView()),
            a = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
              r,
            );
          return (t.addPoint("process_unzip_decode_end"), a);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.addPoint("get_bridge_start", {
            bool: {
              isABPropsReady: o("WAWebABPropsCache").isABPropConfigsReady(),
              isBridgeReady: o(
                "WAWebBackendWorkerClient",
              ).isBackendWorkerBridgeReady(),
            },
          });
          var n = yield o("WAWebBackendWorkerClient").getBackendWorkerBridge();
          (t.addPoint("get_bridge_end"),
            t.addPoint("process_unzip_decode_start", {
              int: { dataSize: e.byteLength },
            }));
          var r = yield n.sendAndReceive(
            "historySync",
            "process",
            { data: e },
            !1,
            void 0,
            void 0,
            [e],
          );
          return (t.addPoint("process_unzip_decode_end"), r);
        })),
        I.apply(this, arguments)
      );
    }
    l.handleWorkerCompatibleRecentSyncChunk = S;
  },
  98,
);
