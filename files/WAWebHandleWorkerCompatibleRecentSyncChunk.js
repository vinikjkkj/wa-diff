__d(
  "WAWebHandleWorkerCompatibleRecentSyncChunk",
  [
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
    "decodeProtobuf",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
    async function R(t, n) {
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
        o("WAWebMetricsAttributionActions").startHistorySyncAttributionTracking(
          t.syncType,
        ));
      var a = await o("WAWebGetHistorySyncProgress").getHistorySyncProgress(t),
        i = o("WAWebSyncGatingUtils").isRecentSyncDownloadOptimizationEnabled(),
        l = i ? t.downloadedHistorySyncPayload : null,
        v = await o("WAWebHistorySyncNotificationUtils").getHistorySyncMetrics(
          t,
          !0,
        ),
        S = v.historySyncDataAppliedMetric,
        R = v.historySyncDownloadedMetric,
        E = v.historySyncStartDownloadingMetric,
        k = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
          entryPoint: "HandleWorkerCompatibleRecentSyncChunk",
        }),
        I = null;
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
          (I = l));
      else {
        (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
          t.syncType,
          o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADING,
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
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
            )
            .tags("history-sync"),
            (I = await o(
              "WAWebDownloadManager",
            ).downloadManager.downloadAndMaybeDecrypt(
              babelHelpers.extends(
                { signal: new AbortController().signal, downloadQpl: k },
                t.downloadOptions,
              ),
            )),
            k.endSuccess());
        } catch (e) {
          if (
            (k.endFailWithError("download_failed", String(e)),
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
          var T = r("WAWebMsgKey").fromString(t.msgKey);
          (o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric(
            {
              chunkDownloadFinishTimestamp: o("WATimeUtils").unixTimeMs(),
              historySyncDownloadMetric: R,
              isSuccess: !1,
              startTs: t.historySyncStepStartedTs,
            },
          ),
            r("WAWebSendHistSyncServerErrorReceiptJob")(
              T.remote,
              T.id,
              t.downloadOptions.mediaKey,
            ),
            await o(
              "WAWebApiHistorySyncNotification",
            ).markChunkForReuploadPending(t.msgKey));
          return;
        }
        (o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
          t.syncType,
          o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.DOWNLOADED,
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
      n.addPoint("download_end");
      var D =
        o("WAWebABProps").getABPropConfigValue(
          "web_history_sync_worker_enabled",
        ) === !0;
      if (
        (n.addPoint("history_sync_process_start", {
          bool: { isInWorker: D },
          int: {
            isWorkerV2: r("gkx")("17524") ? (r("gkx")("20033") ? 1 : 0) : -1,
          },
        }),
        D)
      ) {
        (await L({
          blob: I,
          chunkInfo: t,
          historySyncDataAppliedMetric: S,
          historySyncDownloadedMetric: R,
          progress: a,
          qpl: n,
        }),
          n.addPoint("history_sync_process_end"));
        return;
      }
      var x = new (o("WABinary").Binary)(I),
        $ = await o("WAGzip").inflate(x.readByteArrayView()),
        P = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
          $,
        ),
        N = [];
      (P.phoneNumberToLidMappings.forEach(function (e) {
        var t = e.lidJid,
          n = e.pnJid;
        t != null &&
          n != null &&
          N.push({
            lid: o("WAWebWidFactory").createUserLidOrThrow(t),
            pn: o("WAWebWidFactory").createUserWidOrThrow(n),
          });
      }),
        await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
          mappings: N,
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
          N.length,
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
            P.conversations.length,
          ),
        ));
      var M = o("WATimeUtils").unixTimeMs();
      (t.chunkOrder != null &&
        o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
        (P.conversations = P.conversations.reduce(function (e, t) {
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
          await o("WAWebReleaseToEventLoop").releaseToEventLoop());
        var O = await o(
            "WAWebPreprocessHistorySyncProto",
          ).preprocessHistorySyncProto(P, N),
          B = O.associatedMsgs,
          W = O.chatRows,
          q = O.chatsWithRecentOrFullSyncMsgs,
          U = O.lastMsgs,
          V = O.missingParentsCache,
          H = O.recentOrFullSyncMsgs,
          G = O.threadMsgs,
          z = O.totalChunkMsgCount,
          j = O.unifiedAddons;
        (i ||
          ((R.mdBootstrapMessagesCount = z),
          (R.mdBootstrapChatsCount = P.conversations.length),
          o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
            chunkDownloadFinishTimestamp: M,
            historySyncDownloadMetric: R,
            isSuccess: !0,
            startTs: t.historySyncStepStartedTs,
          })),
          o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
            t.syncType,
            o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
              .MESSAGE_PREPROCESSED,
            t.chunkOrder,
          ),
          H.length !== 0
            ? await o(
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
          await o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
            t.syncType,
            t.chunkOrder,
            a,
          ),
          o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
          await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
            t.msgKey,
            t.syncType,
            t.chunkOrder,
          ));
        for (
          var K = o(
              "WAWebUserPrefsHistorySync",
            ).getHistoryInitialSyncBoundary(),
            Q = new Set(),
            X = [],
            Y = 0;
          Y < P.conversations.length;
          Y++
        ) {
          var J = P.conversations[Y],
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
        (await Promise.all(X),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerHistorySyncChunkProcessed(Q),
          o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric(
            {
              historySyncDataAppliedMetric: S,
              startTs: t.historySyncStepStartedTs,
              isSuccess: !0,
            },
          ),
          o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
            t.syncType,
            o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.APPLIED,
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
          o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric(
            {
              historySyncDataAppliedMetric: S,
              startTs: t.historySyncStepStartedTs,
              isSuccess: !1,
              forceFlushWamBuffer: !0,
              failureReason: String(e),
            },
          ),
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
        await o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
          mappings: A,
          flushImmediately: !0,
          identityChangeHandlingEnabled: !1,
          learningSource: "other",
        }),
        await o("WAWebUpdateLidMetadataApi").updateLidMetadata({ updates: w }),
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
          (await o("WAWebSetUsernameJob").setUsernamesJob(F)),
        await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
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
        a === 100 &&
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
          await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
            recentCompleted: !0,
          }),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerRecentChatHistorySynced()),
        n.addPoint("history_sync_process_end"));
    }
    async function L(e) {
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
      var c = await o("WAWebBackendWorkerClient").getBackendWorkerBridge();
      (s.addPoint("get_bridge_end"),
        s.addPoint("process_in_worker_start", {
          int: { dataSize: t.byteLength },
        }));
      var d = await c.sendAndReceive(
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
          o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric(
            {
              historySyncDataAppliedMetric: a,
              startTs: n.historySyncStepStartedTs,
              isSuccess: !1,
              forceFlushWamBuffer: !0,
              failureReason: d.error,
            },
          ),
          s.endFail(d.error),
          r("err")(d.error)
        );
      var m = d.value,
        p = m.conversationLength,
        _ = m.totalChunkMsgCount;
      (o("WAWebSyncGatingUtils").isRecentSyncDownloadOptimizationEnabled() ||
        ((i.mdBootstrapMessagesCount = _),
        (i.mdBootstrapChatsCount = p),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: u,
          historySyncDownloadMetric: i,
          isSuccess: !0,
          startTs: n.historySyncStepStartedTs,
        })),
        await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
          n.msgKey,
          n.syncType,
          n.chunkOrder,
        ),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
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
          await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
            recentCompleted: !0,
          }),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerRecentChatHistorySynced()),
        s.addPoint("post_processing_end"));
    }
    ((l.handleWorkerCompatibleRecentSyncChunk = R),
      (l.doRecentHistorySyncinWorkerV2 = L));
  },
  98,
);
