__d(
  "WAWebApiHistorySyncNotification",
  [
    "WALogger",
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
      y = {};
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                yield L(n, e, t),
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
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                yield L(n, e, t),
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
        S.apply(this, arguments)
      );
    }
    function R(t) {
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
                      ? (s = yield v(a.syncType, i, a.msgKey))
                      : (s = yield C(a.syncType, i, a.msgKey)),
                    o("WAWebHistorySyncProgress").handleChunkProgress(s),
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
    function L(e, t, n) {
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
        h.delete(e),
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
    function E(e) {
      return (
        h.delete(e),
        o("WAWebSchemaHistorySyncNotification")
          .getHistorySyncNotificationTable()
          .merge(e, { reuploadPending: !0 })
      );
    }
    function k(e) {
      h.delete(e);
    }
    function I(e) {
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
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t === void 0 && (t = !1),
            yield I(e).then(function () {
              o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
                e.syncType,
                o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                  .NOTIFICATION_STORED,
                e.chunkOrder,
              );
            }),
            t && h.add(e.msgKey));
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          var e = yield R();
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
              h.add(e.msgKey));
          } else
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] next chunk null: no pending",
                ])),
            );
          return e;
        })),
        $.apply(this, arguments)
      );
    }
    ((l.inFlightChunk = h),
      (l.recentSyncChunkHandlingTriedCount = y),
      (l.updateCurrentlyProcessed = L),
      (l.markChunkForReuploadPending = E),
      (l.removeLocalFailureFromInFlightChunk = k),
      (l.enqueueNotification = T),
      (l.fetchNextHistorySyncChunkForProcessing = x));
  },
  98,
);
