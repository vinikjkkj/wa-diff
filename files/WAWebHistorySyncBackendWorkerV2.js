__d(
  "WAWebHistorySyncBackendWorkerV2",
  [
    "WABinary",
    "WACommonTaskScheduler",
    "WAGzip",
    "WALogger",
    "WAResultOrError",
    "WAWebABProps",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebDBCreateLidPnMappings",
    "WAWebGetHistorySyncProgress",
    "WAWebHandleHistorySyncMsg",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncProgress",
    "WAWebHistorySyncWorkerCompatibleNotificationUtils",
    "WAWebPreprocessHistorySyncProto",
    "WAWebProtobufsHistorySync.pb",
    "WAWebReleaseToEventLoop",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = 0,
            l = 0;
          try {
            var _ = new (o("WABinary").Binary)(n),
              f = yield o("WAGzip").inflate(_.readByteArrayView()),
              g = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
                f,
              );
            l = g.conversations.length;
            var h = [];
            (g.phoneNumberToLidMappings.forEach(function (e) {
              var t = e.lidJid,
                n = e.pnJid;
              t != null &&
                n != null &&
                h.push({
                  lid: o("WAWebWidFactory").createUserLidOrThrow(t),
                  pn: o("WAWebWidFactory").createUserWidOrThrow(n),
                });
            }),
              yield a.isReady);
            var y = yield o(
              "WAWebGetHistorySyncProgress",
            ).getHistorySyncProgress(t);
            (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: h,
              flushImmediately: !0,
              identityChangeHandlingEnabled: !1,
              learningSource: "other",
            }),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][recent sync] learned ",
                    " mappings",
                  ])),
                h.length,
              ),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .DECODED,
                t.chunkOrder,
              ),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][recent sync] chunk decoded, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  t,
                  void 0,
                  g.conversations.length,
                ),
              ),
              t.chunkOrder != null &&
                o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
              (g.conversations = g.conversations.reduce(function (e, t) {
                var n = null;
                try {
                  n = o("WAWebWidFactory").createWid(t.id);
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
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
              }, [])),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][recent sync] start processing recent sync messages",
                  ])),
              ),
              o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
                ? yield r("WACommonTaskScheduler").yield()
                : yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var C = yield o(
                "WAWebPreprocessHistorySyncProto",
              ).preprocessHistorySyncProto(g, h),
              b = C.associatedMsgs,
              v = C.chatRows,
              S = C.chatsWithRecentOrFullSyncMsgs,
              R = C.lastMsgs,
              L = C.missingParentsCache,
              E = C.recentOrFullSyncMsgs,
              k = C.threadMsgs,
              I = C.totalChunkMsgCount,
              T = C.unifiedAddons;
            ((i = I),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .MESSAGE_PREPROCESSED,
                t.chunkOrder,
              ),
              E.length !== 0
                ? yield o(
                    "WAWebHandleHistorySyncMsg",
                  ).handleProgressiveHistorySyncMsgs({
                    associatedMsgs: b,
                    chatsWithRecentOrFullSyncMsgs: Array.from(S),
                    chunkOrder: t.chunkOrder,
                    lastMsgs: R,
                    missingParentsCache: L,
                    recentOrFullSyncMsgs: E,
                    syncType: t.syncType,
                    threadMsgs: k,
                    unifiedAddons: T,
                  })
                : o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] no messages from history sync need to handle",
                      ])),
                  ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncTotalProcessedMessageCount(I),
              yield o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
                t.syncType,
                t.chunkOrder,
                y,
              ),
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel());
            for (
              var D = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                x = new Set(),
                $ = [],
                P = 0;
              P < g.conversations.length;
              P++
            ) {
              var N = g.conversations[P],
                M = o("WAWebWidFactory").createWid(N.id),
                w = v[P],
                A =
                  (w == null ? void 0 : w.id) != null
                    ? o("WAWebWidFactory").createWid(w.id)
                    : M;
              x.add(A.toString());
              var F = (D == null ? void 0 : D[N.id]) != null;
              if (F) {
                var O = N.endOfHistoryTransferType;
                O != null &&
                  $.push({ chat: A, endOfHistoryTransferTypeFromProto: O });
              }
            }
            (yield o(
              "WAWebHistorySyncWorkerCompatibleNotificationUtils",
            ).bulkUpdateEndOfHistorySync($),
              o("WAWebBackendEventBusWorkerCompatible")
                .getBackendEventBus()
                .triggerHistorySyncChunkProcessed(x),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .APPLIED,
                t.chunkOrder,
              ),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][recent sync] storing recent chunk complete, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  t,
                  I,
                  S.length,
                ),
              ));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebHistorySyncBackendWorkerV2 fails",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("backend-worker-history-sync-fails"),
              o("WAResultOrError").makeError(String(r("getErrorSafe")(e)))
            );
          }
          return o("WAResultOrError").makeResult({
            totalChunkMsgCount: i,
            conversationLength: l,
          });
        })),
        f.apply(this, arguments)
      );
    }
    l.processHistorySync = _;
  },
  98,
);
