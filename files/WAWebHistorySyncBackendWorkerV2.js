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
              b = y.chatRows,
              v = y.chatsWithRecentOrFullSyncMsgs,
              S = y.lastMsgs,
              R = y.missingParentsCache,
              L = y.recentOrFullSyncMsgs,
              E = y.threadMsgs,
              k = y.totalChunkMsgCount,
              I = y.unifiedAddons;
            (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
              t.syncType,
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                .MESSAGE_PREPROCESSED,
              t.chunkOrder,
            ),
              L.length !== 0
                ? yield o(
                    "WAWebHandleHistorySyncMsg",
                  ).handleProgressiveHistorySyncMsgs(
                    L,
                    Array.from(v),
                    I,
                    S,
                    t.syncType,
                    t.chunkOrder,
                    C,
                    R,
                    E,
                  )
                : o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][recent sync] no messages from history sync need to handle",
                      ])),
                  ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncTotalProcessedMessageCount(k),
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
              var T = o(
                  "WAWebUserPrefsHistorySync",
                ).getHistoryInitialSyncBoundary(),
                D = new Set(),
                x = [],
                $ = 0;
              $ < g.conversations.length;
              $++
            ) {
              var P = g.conversations[$],
                N = o("WAWebWidFactory").createWid(P.id),
                M = b[$],
                w =
                  (M == null ? void 0 : M.id) != null
                    ? o("WAWebWidFactory").createWid(M.id)
                    : N;
              D.add(w.toString());
              var A = (T == null ? void 0 : T[P.id]) != null;
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
                .triggerHistorySyncChunkProcessed(D),
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
                  k,
                  v.length,
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
