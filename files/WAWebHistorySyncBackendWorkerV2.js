__d(
  "WAWebHistorySyncBackendWorkerV2",
  [
    "Promise",
    "WABinary",
    "WACommonTaskScheduler",
    "WAGzip",
    "WALogger",
    "WAPromiseDelays",
    "WAResultOrError",
    "WAWebABProps",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebDBCreateLidPnMappings",
    "WAWebGetHistorySyncProgress",
    "WAWebHandleHistorySyncMsg",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncProgress",
    "WAWebHistorySyncWorkerCompatibleNotificationUtils",
    "WAWebPreprocessHistorySyncProto",
    "WAWebProtobufsHistorySync.pb",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _;
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = 0,
            f = 0;
          try {
            var g = new (o("WABinary").Binary)(a),
              h = yield o("WAGzip").inflate(g.readByteArrayView()),
              y = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
                h,
              );
            f = y.conversations.length;
            var C = [];
            (y.phoneNumberToLidMappings.forEach(function (e) {
              var t = e.lidJid,
                n = e.pnJid;
              t != null &&
                n != null &&
                C.push({
                  lid: o("WAWebWidFactory").createUserLidOrThrow(t),
                  pn: o("WAWebWidFactory").createUserWidOrThrow(n),
                });
            }),
              yield i.isReady);
            var b = yield o(
              "WAWebGetHistorySyncProgress",
            ).getHistorySyncProgress(t);
            (yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches(
              {
                mappings: C,
                flushImmediately: !0,
                identityChangeHandlingEnabled: !1,
                learningSource: "other",
              },
            ),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][recent sync] learned ",
                    " mappings",
                  ])),
                C.length,
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
                  y.conversations.length,
                ),
              ),
              t.chunkOrder != null &&
                o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
              (y.conversations = y.conversations.reduce(function (e, t) {
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
                : yield o("WAPromiseDelays").releaseToEventLoop());
            var v = yield o(
                "WAWebPreprocessHistorySyncProto",
              ).preprocessHistorySyncProto(y, C),
              S = v.associatedMsgs,
              R = v.chatRows,
              L = v.chatsWithRecentOrFullSyncMsgs,
              E = v.lastMsgs,
              k = v.missingParentsCache,
              I = v.recentOrFullSyncMsgs,
              T = v.threadMsgs,
              D = v.totalChunkMsgCount,
              x = v.unifiedAddons;
            ((l = D),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .MESSAGE_PREPROCESSED,
                t.chunkOrder,
              ),
              I.length !== 0
                ? yield o(
                    "WAWebHandleHistorySyncMsg",
                  ).handleProgressiveHistorySyncMsgs(
                    I,
                    Array.from(L),
                    x,
                    E,
                    t.syncType,
                    t.chunkOrder,
                    S,
                    k,
                    T,
                  )
                : o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] no messages from history sync need to handle",
                      ])),
                  ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncTotalProcessedMessageCount(D),
              yield o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
                t.syncType,
                t.chunkOrder,
                b,
              ),
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
              yield o(
                "WAWebApiHistorySyncNotification",
              ).updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder));
            for (
              var $ = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                P = new Set(),
                N = [],
                M = 0;
              M < y.conversations.length;
              M++
            ) {
              var w = y.conversations[M],
                A = o("WAWebWidFactory").createWid(w.id),
                F = R[M],
                O =
                  (F == null ? void 0 : F.id) != null
                    ? o("WAWebWidFactory").createWid(F.id)
                    : A;
              P.add(O.toString());
              var B = ($ == null ? void 0 : $[w.id]) != null;
              if (B) {
                var W = w.endOfHistoryTransferType;
                W != null &&
                  N.push(
                    o(
                      "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                    ).updateEndOfHistorySync(O, W),
                  );
              }
            }
            (yield (_ || (_ = n("Promise"))).all(N),
              o("WAWebBackendEventBusWorkerCompatible")
                .getBackendEventBus()
                .triggerHistorySyncChunkProcessed(P),
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
                  D,
                  L.length,
                ),
              ));
          } catch (e) {
            return (
              o("WALogger").ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebHistorySyncBackendWorkerV2 fails: ",
                    "",
                  ])),
                r("getErrorSafe")(e),
              ),
              o("WAResultOrError").makeError(String(r("getErrorSafe")(e)))
            );
          }
          return o("WAResultOrError").makeResult({
            totalChunkMsgCount: l,
            conversationLength: f,
          });
        })),
        g.apply(this, arguments)
      );
    }
    l.processHistorySync = f;
  },
  98,
);
