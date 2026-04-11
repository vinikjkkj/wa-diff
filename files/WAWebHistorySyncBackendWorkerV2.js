__d(
  "WAWebHistorySyncBackendWorkerV2",
  [
    "Promise",
    "WABinary",
    "WACommonTaskScheduler",
    "WAGzip",
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebApiChatBulkGetByHistory",
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
          var l = yield o("WAWebGetHistorySyncProgress").getHistorySyncProgress(
              t,
            ),
            _ = new (o("WABinary").Binary)(a),
            f = yield o("WAGzip").inflate(_.readByteArrayView()),
            g = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
              f,
            ),
            h = [];
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
            yield (p || (p = n("Promise"))).all([i.dbReady, i.abPropsReady]),
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
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
            var y = yield o(
                "WAWebPreprocessHistorySyncProto",
              ).preprocessHistorySyncProto(g, h),
              C = y.associatedMsgs,
              b = y.chatsWithRecentOrFullSyncMsgs,
              v = y.lastMsgs,
              S = y.missingParentsCache,
              R = y.recentOrFullSyncMsgs,
              L = y.threadMsgs,
              E = y.totalChunkMsgCount,
              k = y.unifiedAddons;
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              t.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                .MESSAGE_PREPROCESSED,
              t.chunkOrder,
            ),
              R.length !== 0
                ? yield o(
                    "WAWebHandleHistorySyncMsg",
                  ).handleProgressiveHistorySyncMsgs(
                    R,
                    Array.from(b),
                    k,
                    v,
                    t.syncType,
                    t.chunkOrder,
                    C,
                    S,
                    L,
                  )
                : o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] no messages from history sync need to handle",
                      ])),
                  ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncTotalProcessedMessageCount(E),
              yield o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
                t.syncType,
                t.chunkOrder,
                l,
              ),
              o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
              yield o(
                "WAWebApiHistorySyncNotification",
              ).updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder));
            for (
              var I = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                T = new Set(),
                D = yield o(
                  "WAWebApiChatBulkGetByHistory",
                ).bulkGetChatsMaybeByHistory(
                  g.conversations.map(function (e) {
                    return e.id;
                  }),
                ),
                x = [],
                $ = 0;
              $ < g.conversations.length;
              $++
            ) {
              var P = g.conversations[$],
                N = o("WAWebWidFactory").createWid(P.id),
                M = D[$],
                w =
                  (M == null ? void 0 : M.id) != null
                    ? o("WAWebWidFactory").createWid(M.id)
                    : N;
              T.add(w.toString());
              var A = (I == null ? void 0 : I[P.id]) != null;
              if (A) {
                var F = P.endOfHistoryTransferType;
                F != null &&
                  x.push(
                    o(
                      "WAWebHistorySyncWorkerCompatibleNotificationUtils",
                    ).updateEndOfHistorySync(w, F),
                  );
              }
            }
            (yield (p || (p = n("Promise"))).all(x),
              o("WAWebBackendEventBusWorkerCompatible")
                .getBackendEventBus()
                .triggerHistorySyncChunkProcessed(T),
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
                  E,
                  b.length,
                ),
              ));
          } catch (e) {
            throw e;
          }
          return g;
        })),
        f.apply(this, arguments)
      );
    }
    l.processHistorySync = _;
  },
  98,
);
