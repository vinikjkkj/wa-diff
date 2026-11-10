__d(
  "WAWebApiHistorySyncNotification",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBackgroundPauseState",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncProgress",
    "WAWebOmittedConversationMetadataCapabilities",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaHistorySyncNotification",
    "WAWebSyncGatingUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
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
      h = r("JSResourceForInteraction")(
        "WAWebOmittedConversationMetadataStore",
      ).__setRef("WAWebApiHistorySyncNotification"),
      y = new Set(),
      C = new Set(),
      b = {};
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            e ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .PUSH_NAME
          )
            return !0;
          if (
            ([
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .FULL,
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT,
            ].includes(e) &&
              t === 1) ||
            (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
              e ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .ON_DEMAND &&
              t === 0)
          ) {
            if (
              e ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT
            ) {
              var r = yield o(
                "WAWebUserPrefsHistorySync",
              ).getInitialHistorySyncComplete();
              return r === !0;
            }
            var a = yield o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
            return !!(a != null && a.recentCompleted);
          }
          var i = yield o(
            "WAWebUserPrefsHistorySync",
          ).getLastHistorySyncedChunk();
          if (i == null) return !1;
          var l = i.split("_"),
            s = l[0],
            u = l[1];
          return s === "" + e && u === "" + (t - 1)
            ? !0
            : s === "" + e && u === "" + t
              ? (o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] isPreviousChunkProcessed: already done ",
                        "_",
                        " last=",
                        "",
                      ])),
                    e,
                    t,
                    i,
                  )
                  .tags("history-sync"),
                yield k(n, e, t),
                !1)
              : (o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] isPreviousChunkProcessed: false ",
                        "_",
                        " last=",
                        "",
                      ])),
                    e,
                    t,
                    i,
                  )
                  .tags("history-sync"),
                !1);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            o(
              "WAWebOmittedConversationMetadataCapabilities",
            ).canReadOmittedMetadata() &&
            (yield (yield h.load()).isPersistedOmittedMetadataTransport(t))
          )
            return !0;
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] check prev recent sync processed",
                ])),
            ),
            t === 1)
          ) {
            var r = yield o(
              "WAWebUserPrefsHistorySync",
            ).getInitialHistorySyncComplete();
            return r === !0;
          }
          var a = yield o(
            "WAWebUserPrefsHistorySync",
          ).getLastHistoryRecentSyncedChunk();
          if (a == null) return !1;
          var i = a.chunkOrder;
          return i === t - 1
            ? !0
            : i === t
              ? (o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] isPreviousChunkProcessed: already done ",
                        "_",
                        " order=",
                        " prog=",
                        "",
                      ])),
                    e,
                    t,
                    a.chunkOrder,
                    a.progress,
                  )
                  .tags("history-sync"),
                yield k(n, e, t),
                !1)
              : (o("WALogger")
                  .LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] isPreviousChunkProcessed: false ",
                        "_",
                        " last=",
                        "",
                      ])),
                    e,
                    t,
                    i,
                  )
                  .tags("history-sync"),
                !1);
        })),
        L.apply(this, arguments)
      );
    }
    function E(t) {
      return o("WAWebSchemaHistorySyncNotification")
        .getHistorySyncNotificationTable()
        .equals(["processed"], 0, { shouldDecrypt: !1 })
        .then(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n,
                  r = t
                    .filter(function (e) {
                      return !y.has(e.msgKey) && !e.reuploadPending;
                    })
                    .sort(function (e, t) {
                      return e.syncType !== t.syncType
                        ? t.syncType - e.syncType
                        : e.chunkOrder != null && t.chunkOrder != null
                          ? e.chunkOrder - t.chunkOrder
                          : 0;
                    }),
                  a = r.length > 0 ? r[0] : void 0,
                  i = (n = a) == null ? void 0 : n.chunkOrder;
                if (i == null) {
                  var l;
                  o("WALogger")
                    .LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] getNextUnProcessedNotification: chunkOrder null ",
                          "",
                        ])),
                      (l = a) == null ? void 0 : l.msgKey,
                    )
                    .tags("history-sync");
                  return;
                }
                if (a) {
                  var s;
                  if (
                    (a.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.RECENT
                      ? (s = yield R(a.syncType, i, a.msgKey))
                      : (s = yield v(a.syncType, i, a.msgKey)),
                    o("WAWebHistorySyncProgress").handleChunkProgress(
                      s,
                      a.syncType,
                    ),
                    !s)
                  )
                    return;
                  a = yield o("WAWebSchemaHistorySyncNotification")
                    .getHistorySyncNotificationTable()
                    .postflightDecryptSingleRecord(a);
                }
                return a;
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    function k(e, t, n) {
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] remove notification ",
              "_",
              "",
            ])),
          t,
          n,
        ),
        x(e),
        o("WAWebSchemaHistorySyncNotification")
          .getHistorySyncNotificationTable()
          .remove(e)
          .catch(function (e) {
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] updateCurrentlyProcessed failed with error ",
                    "",
                  ])),
                String(e),
              )
              .tags("history-sync");
          })
      );
    }
    function I(e) {
      return (
        x(e),
        o("WAWebSchemaHistorySyncNotification")
          .getHistorySyncNotificationTable()
          .merge(e, { reuploadPending: !0 })
      );
    }
    function T(e) {
      x(e);
    }
    function D(e, t) {
      (y.add(e),
        t ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND && (C.add(e), $()));
    }
    function x(e) {
      (y.delete(e), C.delete(e) && $());
    }
    function $() {
      var e = C.size > 0;
      o("WAWebBackgroundPauseState").onDemandHistorySyncInFlightState.get() !==
        e &&
        o("WAWebBackgroundPauseState").onDemandHistorySyncInFlightState.set(e);
    }
    function P(e) {
      var t = o("WAWebHistorySyncLogUtils").getHistorySyncBasicChunkInfoString(
          e.syncType,
          e.chunkOrder,
          e.isReupload,
        ),
        n = e.downloadOptions.mediaKey,
        r = e.downloadOptions.directPath,
        a = e.downloadOptions.filehash,
        i = e.downloadOptions.encFilehash;
      ((e.downloadOptions.mediaKey = ""),
        (e.downloadOptions.directPath = ""),
        (e.downloadOptions.filehash = ""),
        (e.downloadOptions.encFilehash = ""));
      var l = babelHelpers.extends({}, e, {
        chunkEncryptionKey: n,
        directPath: r,
        filehash: a,
        encFilehash: i,
      });
      return (
        (e.processed = 0),
        o("WAWebSchemaHistorySyncNotification")
          .getHistorySyncNotificationTable()
          .createOrMerge(e.msgKey, l)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t === void 0 && (t = !1),
            yield P(e).then(function () {
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                e.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .NOTIFICATION_STORED,
                e.chunkOrder,
              );
            }),
            t && D(e.msgKey, e.syncType));
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (y.size > 0)
            return (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] next chunk null: inFlight=",
                    "",
                  ])),
                y.size,
              ),
              null
            );
          var e = yield E();
          if (e) {
            var t = o(
              "WAWebHistorySyncLogUtils",
            ).getHistorySyncBasicChunkInfoString(
              e == null ? void 0 : e.syncType,
              e == null ? void 0 : e.chunkOrder,
              e == null ? void 0 : e.isReupload,
            );
            ((e.downloadOptions.mediaKey = e.chunkEncryptionKey),
              delete e.chunkEncryptionKey,
              (e.downloadOptions.directPath =
                e.directPath || e.downloadOptions.directPath),
              delete e.directPath,
              (e.downloadOptions.filehash =
                e.downloadOptions.filehash === ""
                  ? e.filehash
                  : e.downloadOptions.filehash),
              delete e.filehash,
              (e.downloadOptions.encFilehash = e.encFilehash),
              delete e.encFilehash,
              D(e.msgKey, e.syncType));
          } else
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] next chunk null: no pending",
                ])),
            );
          return e;
        })),
        A.apply(this, arguments)
      );
    }
    ((l.inFlightChunk = y),
      (l.recentSyncChunkHandlingTriedCount = b),
      (l.updateCurrentlyProcessed = k),
      (l.markChunkForReuploadPending = I),
      (l.removeLocalFailureFromInFlightChunk = T),
      (l.enqueueNotification = N),
      (l.fetchNextHistorySyncChunkForProcessing = w));
  },
  98,
);
