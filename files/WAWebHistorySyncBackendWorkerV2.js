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
    var e, s, u, c, d, m, p;
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = 0,
            _ = new (o("WABinary").Binary)(a),
            f = yield o("WAGzip").inflate(_.readByteArrayView()),
            g = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
              f,
            ),
            h = g.conversations.length,
            y = [];
          (g.phoneNumberToLidMappings.forEach(function (e) {
            var t = e.lidJid,
              n = e.pnJid;
            t != null &&
              n != null &&
              y.push({
                lid: o("WAWebWidFactory").createUserLidOrThrow(t),
                pn: o("WAWebWidFactory").createUserWidOrThrow(n),
              });
          }),
            yield (p || (p = n("Promise"))).all([
              i.dbReady,
              i.abPropsReady,
              i.isGlobalsReady,
            ]));
          var C = yield o("WAWebGetHistorySyncProgress").getHistorySyncProgress(
            t,
          );
          (yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
            mappings: y,
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
              y.length,
            ),
            o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              t.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DECODED,
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
            }, [])));
          try {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][recent sync] start processing recent sync messages",
                ])),
            ),
              o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
                ? yield r("WACommonTaskScheduler").yield()
                : yield o("WAPromiseDelays").releaseToEventLoop());
            var b = yield o(
                "WAWebPreprocessHistorySyncProto",
              ).preprocessHistorySyncProto(g, y),
              v = b.associatedMsgs,
              S = b.chatRows,
              R = b.chatsWithRecentOrFullSyncMsgs,
              L = b.lastMsgs,
              E = b.missingParentsCache,
              k = b.recentOrFullSyncMsgs,
              I = b.threadMsgs,
              T = b.totalChunkMsgCount,
              D = b.unifiedAddons;
            ((l = T),
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                t.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .MESSAGE_PREPROCESSED,
                t.chunkOrder,
              ),
              k.length !== 0
                ? yield o(
                    "WAWebHandleHistorySyncMsg",
                  ).handleProgressiveHistorySyncMsgs(
                    k,
                    Array.from(R),
                    D,
                    L,
                    t.syncType,
                    t.chunkOrder,
                    v,
                    E,
                    I,
                  )
                : o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] no messages from history sync need to handle",
                      ])),
                  ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncTotalProcessedMessageCount(T),
              yield o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
                t.syncType,
                t.chunkOrder,
                C,
              ),
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
              yield o(
                "WAWebApiHistorySyncNotification",
              ).updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder));
            for (
              var x = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                $ = new Set(),
                P = [],
                N = 0;
              N < g.conversations.length;
              N++
            ) {
              var M = g.conversations[N],
                w = o("WAWebWidFactory").createWid(M.id),
                A = S[N],
                F =
                  (A == null ? void 0 : A.id) != null
                    ? o("WAWebWidFactory").createWid(A.id)
                    : w;
              $.add(F.toString());
              var O = (x == null ? void 0 : x[M.id]) != null;
              if (O) {
                var B = M.endOfHistoryTransferType;
                B != null &&
                  P.push(
                    o(
                      "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                    ).updateEndOfHistorySync(F, B),
                  );
              }
            }
            (yield (p || (p = n("Promise"))).all(P),
              o("WAWebBackendEventBusWorkerCompatible")
                .getBackendEventBus()
                .triggerHistorySyncChunkProcessed($),
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
                  T,
                  R.length,
                ),
              ));
          } catch (e) {
            return o("WAResultOrError").makeError(String(r("getErrorSafe")(e)));
          }
          return o("WAResultOrError").makeResult({
            totalChunkMsgCount: l,
            conversationLength: h,
          });
        })),
        f.apply(this, arguments)
      );
    }
    l.processHistorySync = _;
  },
  98,
);
