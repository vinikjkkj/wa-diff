__d(
  "WAWebOmittedConversationMetadataReceiver",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      y,
      C = "omitted-metadata-initial",
      b = new (o("WAPromiseQueue").PromiseQueueMap)();
    function v(t, a) {
      var i = t.omittedConversationMetadata;
      if (i != null && !r("gkx")("26258")) {
        var l, m;
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[odhs-v2] [OMITTED] RECEIVED: decoded batch index=",
              ", total=",
              ", records=",
              ".",
            ])),
          (l = i.batchIndex) != null ? l : "unknown",
          (m = i.batchCount) != null ? m : "unknown",
          i.conversations.length,
        );
      }
      if (t.omittedConversationMetadata != null) return L(t, a);
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
            b
              .enqueue(
                C,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (yield o(
                    "WAWebOmittedConversationMetadataStore",
                  ).discardOmittedMetadataSnapshot(),
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[odhs-v2] [INITIAL] NO OMITTED SNAPSHOT: primary did not announce omitted metadata.",
                        ])),
                    ));
                }),
              )
              .catch(function (e) {
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
        var p = o("WAWebOmittedConversationMetadataPairing")
          .getOmittedMetadataPairingId()
          .then(
            function (e) {
              return { pairingId: e, error: null };
            },
            function (e) {
              return { pairingId: null, error: e };
            },
          );
        b.enqueue(
          C,
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield p;
            try {
              if (e.pairingId == null) {
                var n;
                throw (n = e.error) != null
                  ? n
                  : r("err")(
                      "Omitted metadata pairing identity is unavailable",
                    );
              }
              (yield o(
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
                yield o(
                  "WAWebOmittedConversationMetadataStore",
                ).discardOmittedMetadataSnapshot(),
                e
              );
            }
          }),
        ).catch(function (e) {
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
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .RECENT &&
            o(
              "WAWebOmittedConversationMetadataCapabilities",
            ).canReadOmittedMetadata() &&
            (yield b.waitIfPending(C),
            yield o(
              "WAWebOmittedConversationMetadataStore",
            ).observeOmittedMetadataOrdinaryRecent());
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
          var a = "storage availability";
          try {
            if (
              !o(
                "WAWebOmittedConversationMetadataCapabilities",
              ).canReadOmittedMetadata()
            )
              throw r("err")(
                "Omitted metadata receiver storage is unavailable",
              );
            ((a = "INITIAL baseline"),
              yield b.waitIfPending(C),
              (a = "validation"));
            var i = yield (y || (y = n("Promise"))).all([
                o(
                  "WAWebOmittedConversationMetadataBatch",
                ).prepareOmittedMetadataBatch(e, t),
                o(
                  "WAWebOmittedConversationMetadataPairing",
                ).getOmittedMetadataPairingId(),
              ]),
              l = i[0],
              s = i[1];
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[odhs-v2] [OMITTED] VALIDATED: batch ",
                  "/",
                  ", records=",
                  ".",
                ])),
              l.index + 1,
              l.count,
              l.identities.length,
            ),
              (a = "storage"));
            var u = yield o(
              "WAWebOmittedConversationMetadataStore",
            ).persistOmittedMetadataBatch(l, s);
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
              l.index + 1,
              l.count,
              u.entries,
              u.retry,
              u.complete,
            ),
              u.complete &&
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[odhs-v2] [OMITTED] ALL BATCHES STORED: snapshot is complete; total batches=",
                      ".",
                    ])),
                  l.count,
                ),
              o(
                "WAWebOmittedMetadataNoticeEvents",
              ).notifyOmittedMetadataStored(),
              (a = "transport bookkeeping"),
              yield k(e, t),
              (a = "receipt"));
            var c = r("WAWebMsgKey").fromString(t.msgKey);
            return (
              yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: c.remote,
                type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                  .HISTORY_SYNC_COMPLETION,
                groupedReceipt: new Map().set(c.remote, [c.id]),
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
                l.index + 1,
                l.count,
                u.complete ? "complete" : "partial",
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
                  a,
                )
                .tags("history-sync"),
              e
            );
          }
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
          var n = yield o(
              "WAWebUserPrefsHistorySync",
            ).getLastHistoryRecentSyncedChunk(),
            r = e.chunkOrder;
          if (r != null && (n == null || n.chunkOrder < r)) {
            var a;
            yield o("WAWebUserPrefsHistorySync").setLastHistorySyncedChunk(
              e.syncType,
              r,
              (a = e.progress) != null ? a : 0,
            );
          }
          if (
            e.progress === 100 &&
            r != null &&
            (n == null || n.chunkOrder <= r)
          ) {
            var i = yield o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
            (i == null ? void 0 : i.recentCompleted) !== !0 &&
              (yield o("WAWebUserPrefsHistorySync").setHistorySyncStatus({
                recentCompleted: !0,
              }),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerRecentChatHistorySynced());
          }
          yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
            t.msgKey,
            e.syncType,
            e.chunkOrder,
          );
        })),
        I.apply(this, arguments)
      );
    }
    ((l.handleDecodedOmittedMetadata = v),
      (l.recordOrdinaryRecentForOmittedMetadata = S));
  },
  98,
);
