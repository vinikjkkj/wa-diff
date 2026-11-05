__d(
  "WAWebApiHistorySyncNotification",
  [
    "WALogger",
    "WAWebBackgroundPauseState",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncProgress",
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
      h = new Set(),
      y = new Set(),
      C = {};
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                yield E(n, e, t),
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
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                yield E(n, e, t),
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
        R.apply(this, arguments)
      );
    }
    function L(t) {
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
                      return !h.has(e.msgKey) && !e.reuploadPending;
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
                      ? (s = yield S(a.syncType, i, a.msgKey))
                      : (s = yield b(a.syncType, i, a.msgKey)),
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
    function E(e, t, n) {
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
        D(e),
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
    function k(e) {
      return (
        D(e),
        o("WAWebSchemaHistorySyncNotification")
          .getHistorySyncNotificationTable()
          .merge(e, { reuploadPending: !0 })
      );
    }
    function I(e) {
      D(e);
    }
    function T(e, t) {
      (h.add(e),
        t ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND && (y.add(e), x()));
    }
    function D(e) {
      (h.delete(e), y.delete(e) && x());
    }
    function x() {
      var e = y.size > 0;
      o("WAWebBackgroundPauseState").onDemandHistorySyncInFlightState.get() !==
        e &&
        o("WAWebBackgroundPauseState").onDemandHistorySyncInFlightState.set(e);
    }
    function $(e) {
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
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t === void 0 && (t = !1),
            yield $(e).then(function () {
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                e.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .NOTIFICATION_STORED,
                e.chunkOrder,
              );
            }),
            t && T(e.msgKey, e.syncType));
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (h.size > 0)
            return (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] next chunk null: inFlight=",
                    "",
                  ])),
                h.size,
              ),
              null
            );
          var e = yield L();
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
              T(e.msgKey, e.syncType));
          } else
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] next chunk null: no pending",
                ])),
            );
          return e;
        })),
        w.apply(this, arguments)
      );
    }
    ((l.inFlightChunk = h),
      (l.recentSyncChunkHandlingTriedCount = C),
      (l.updateCurrentlyProcessed = E),
      (l.markChunkForReuploadPending = k),
      (l.removeLocalFailureFromInFlightChunk = I),
      (l.enqueueNotification = P),
      (l.fetchNextHistorySyncChunkForProcessing = M));
  },
  98,
);
