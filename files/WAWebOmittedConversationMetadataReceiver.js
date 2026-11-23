__d(
  "WAWebOmittedConversationMetadataReceiver",
  [
    "WALogger",
    "WAPromiseQueue",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendEventBus",
    "WAWebMmsClient",
    "WAWebMsgKey",
    "WAWebOmittedConversationMetadataBatch",
    "WAWebOmittedConversationMetadataCapabilities",
    "WAWebOmittedConversationMetadataPairing",
    "WAWebOmittedConversationMetadataStore",
    "WAWebOmittedMetadataNoticeEvents",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "err",
    "getErrorSafe",
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
      g,
      h,
      y = "omitted-metadata-initial",
      C = new (o("WAPromiseQueue").PromiseQueueMap)();
    function b(t, n) {
      var a = t.omittedConversationMetadata;
      if (a != null && !r("gkx")("26258")) {
        var i, l;
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[odhs-v2] [OMITTED] RECEIVED: decoded batch index=",
              ", total=",
              ", records=",
              ".",
            ])),
          (i = a.batchIndex) != null ? i : "unknown",
          (l = a.batchCount) != null ? l : "unknown",
          a.conversations.length,
        );
      }
      if (t.omittedConversationMetadata != null) return S(t, n);
      if (
        !o(
          "WAWebOmittedConversationMetadataCapabilities",
        ).canReadOmittedMetadata()
      )
        return !1;
      if (
        t.syncType ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_BOOTSTRAP
      ) {
        if (t.omittedConversationMetadataSnapshotId == null)
          return (
            C.enqueue(y, async function () {
              (await o(
                "WAWebOmittedConversationMetadataStore",
              ).discardOmittedMetadataSnapshot(),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[odhs-v2] [INITIAL] NO OMITTED SNAPSHOT: primary did not announce omitted metadata.",
                    ])),
                ));
            }).catch(function (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[odhs-v2] Could not clear a stale metadata association.",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("omitted-metadata-initial-clear-failed");
            }),
            !1
          );
        var m = o("WAWebOmittedConversationMetadataPairing")
          .getOmittedMetadataPairingId()
          .then(
            function (e) {
              return { pairingId: e, error: null };
            },
            function (e) {
              return { pairingId: null, error: e };
            },
          );
        C.enqueue(y, async function () {
          var e = await m;
          try {
            if (e.pairingId == null) {
              var n;
              throw (n = e.error) != null
                ? n
                : r("err")("Omitted metadata pairing identity is unavailable");
            }
            (await o(
              "WAWebOmittedConversationMetadataStore",
            ).observeOmittedMetadataInitial(t, e.pairingId),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[odhs-v2] [INITIAL] BASELINE STORED: snapshot association and INITIAL identities recorded.",
                  ])),
              ));
          } catch (e) {
            throw (
              await o(
                "WAWebOmittedConversationMetadataStore",
              ).discardOmittedMetadataSnapshot(),
              e
            );
          }
        }).catch(function (e) {
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[odhs-v2] Could not persist the INITIAL metadata association.",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("omitted-metadata-initial-persist-failed");
        });
      }
      return !1;
    }
    async function v(e) {
      e ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT &&
        o(
          "WAWebOmittedConversationMetadataCapabilities",
        ).canReadOmittedMetadata() &&
        (await C.waitIfPending(y),
        await o(
          "WAWebOmittedConversationMetadataStore",
        ).observeOmittedMetadataOrdinaryRecent());
    }
    async function S(e, t) {
      var n = "storage availability";
      try {
        if (
          !o(
            "WAWebOmittedConversationMetadataCapabilities",
          ).canReadOmittedMetadata()
        )
          throw r("err")("Omitted metadata receiver storage is unavailable");
        ((n = "INITIAL baseline"),
          await C.waitIfPending(y),
          (n = "validation"));
        var a = await Promise.all([
            o(
              "WAWebOmittedConversationMetadataBatch",
            ).prepareOmittedMetadataBatch(e, t),
            o(
              "WAWebOmittedConversationMetadataPairing",
            ).getOmittedMetadataPairingId(),
          ]),
          i = a[0],
          l = a[1];
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[odhs-v2] [OMITTED] VALIDATED: batch ",
              "/",
              ", records=",
              ".",
            ])),
          i.index + 1,
          i.count,
          i.identities.length,
        ),
          (n = "storage"));
        var s = await o(
          "WAWebOmittedConversationMetadataStore",
        ).persistOmittedMetadataBatch(i, l);
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[odhs-v2] [OMITTED] STORED: batch ",
              "/",
              ", records=",
              ", exactRetry=",
              ", allBatchesStored=",
              ".",
            ])),
          i.index + 1,
          i.count,
          s.entries,
          s.retry,
          s.complete,
        ),
          s.complete &&
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[odhs-v2] [OMITTED] ALL BATCHES STORED: snapshot is complete; total batches=",
                  ".",
                ])),
              i.count,
            ),
          o("WAWebOmittedMetadataNoticeEvents").notifyOmittedMetadataStored(),
          (n = "transport bookkeeping"),
          await R(e, t),
          (n = "receipt"));
        var u = r("WAWebMsgKey").fromString(t.msgKey);
        return (
          await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: u.remote,
            type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
              .HISTORY_SYNC_COMPLETION,
            groupedReceipt: new Map().set(u.remote, [u.id]),
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
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[odhs-v2] Could not delete the metadata history sync blob.",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("omitted-metadata-blob-delete-failed");
              }),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[odhs-v2] [OMITTED] CHUNK DONE: receipt sent for batch ",
                "/",
                ", snapshot=",
                ".",
              ])),
            i.index + 1,
            i.count,
            s.complete ? "complete" : "partial",
          ),
          !0
        );
      } catch (e) {
        throw (
          o(
            "WAWebApiHistorySyncNotification",
          ).removeLocalFailureFromInFlightChunk(t.msgKey),
          o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[odhs-v2] [OMITTED] FAILED during ",
                  "; notification retained for retry.",
                ])),
              n,
            )
            .tags("history-sync"),
          e
        );
      }
    }
    async function R(e, t) {
      var n = await o(
          "WAWebUserPrefsHistorySync",
        ).getLastHistoryRecentSyncedChunk(),
        r = e.chunkOrder;
      if (r != null && (n == null || n.chunkOrder < r)) {
        var a;
        await o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
          e.syncType,
          r,
          (a = e.progress) != null ? a : 0,
        );
      }
      if (e.progress === 100 && r != null && (n == null || n.chunkOrder <= r)) {
        var i = await o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
        (i == null ? void 0 : i.recentCompleted) !== !0 &&
          (await o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
            recentCompleted: !0,
          }),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerRecentChatHistorySynced());
      }
      await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
        t.msgKey,
        e.syncType,
        e.chunkOrder,
      );
    }
    ((l.handleDecodedOmittedMetadata = b),
      (l.recordOrdinaryRecentForOmittedMetadata = v));
  },
  98,
);
