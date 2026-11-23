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
    async function v(t, n, r) {
      if (
        t ===
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.PUSH_NAME
      )
        return !0;
      if (
        ([
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.FULL,
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT,
        ].includes(t) &&
          n === 1) ||
        (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
          t ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .ON_DEMAND &&
          n === 0)
      ) {
        if (
          t ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT
        ) {
          var a = await o(
            "WAWebUserPrefsHistorySync",
          ).getInitialHistorySyncComplete();
          return a === !0;
        }
        var i = await o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
        return !!(i != null && i.recentCompleted);
      }
      var l = await o("WAWebUserPrefsHistorySync").getLastHistorySyncedChunk();
      if (l == null) return !1;
      var u = l.split("_"),
        c = u[0],
        d = u[1];
      return c === "" + t && d === "" + (n - 1)
        ? !0
        : c === "" + t && d === "" + n
          ? (o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] isPreviousChunkProcessed: already done ",
                    "_",
                    " last=",
                    "",
                  ])),
                t,
                n,
                l,
              )
              .tags("history-sync"),
            await L(r, t, n),
            !1)
          : (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] isPreviousChunkProcessed: false ",
                    "_",
                    " last=",
                    "",
                  ])),
                t,
                n,
                l,
              )
              .tags("history-sync"),
            !1);
    }
    async function S(e, t, n) {
      if (
        o(
          "WAWebOmittedConversationMetadataCapabilities",
        ).canReadOmittedMetadata() &&
        (await (await h.load()).isPersistedOmittedMetadataTransport(t))
      )
        return !0;
      if (
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] check prev recent sync processed",
            ])),
        ),
        t === 1)
      ) {
        var r = await o(
          "WAWebUserPrefsHistorySync",
        ).getInitialHistorySyncComplete();
        return r === !0;
      }
      var a = await o(
        "WAWebUserPrefsHistorySync",
      ).getLastHistoryRecentSyncedChunk();
      if (a == null) return !1;
      var i = a.chunkOrder;
      return i === t - 1
        ? !0
        : i === t
          ? (o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
            await L(n, e, t),
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
    }
    function R(e) {
      return o("WAWebSchemaHistorySyncNotification")
        .getHistorySyncNotificationTable()
        .equals(["processed"], 0, { shouldDecrypt: !1 })
        .then(async function (e) {
          var t,
            n = e
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
            r = n.length > 0 ? n[0] : void 0,
            a = (t = r) == null ? void 0 : t.chunkOrder;
          if (a == null) {
            var i;
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] getNextUnProcessedNotification: chunkOrder null ",
                    "",
                  ])),
                (i = r) == null ? void 0 : i.msgKey,
              )
              .tags("history-sync");
            return;
          }
          if (r) {
            var l;
            if (
              (r.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT
                ? (l = await S(r.syncType, a, r.msgKey))
                : (l = await v(r.syncType, a, r.msgKey)),
              o("WAWebHistorySyncProgress").handleChunkProgress(l, r.syncType),
              !l)
            )
              return;
            r = await o("WAWebSchemaHistorySyncNotification")
              .getHistorySyncNotificationTable()
              .postflightDecryptSingleRecord(r);
          }
          return r;
        });
    }
    function L(e, t, n) {
      return (
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] remove notification ",
              "_",
              "",
            ])),
          t,
          n,
        ),
        T(e),
        o("WAWebSchemaHistorySyncNotification")
          .getHistorySyncNotificationTable()
          .remove(e)
          .catch(function (e) {
            o("WALogger")
              .LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        T(e),
        o("WAWebSchemaHistorySyncNotification")
          .getHistorySyncNotificationTable()
          .merge(e, { reuploadPending: !0 })
      );
    }
    function k(e) {
      T(e);
    }
    function I(e, t) {
      (y.add(e),
        t ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND && (C.add(e), D()));
    }
    function T(e) {
      (y.delete(e), C.delete(e) && D());
    }
    function D() {
      var e = C.size > 0;
      o("WAWebBackgroundPauseState").onDemandHistorySyncInFlightState.get() !==
        e &&
        o("WAWebBackgroundPauseState").onDemandHistorySyncInFlightState.set(e);
    }
    function x(e) {
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
    async function $(e, t) {
      (t === void 0 && (t = !1),
        await x(e).then(function () {
          o("WAWebUserPrefsHistorySync").setRecentSyncSingleChunkStatus(
            e.syncType,
            o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
              .NOTIFICATION_STORED,
            e.chunkOrder,
          );
        }),
        t && I(e.msgKey, e.syncType));
    }
    async function P() {
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
      var e = await R();
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
          I(e.msgKey, e.syncType));
      } else
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] next chunk null: no pending",
            ])),
        );
      return e;
    }
    ((l.inFlightChunk = y),
      (l.recentSyncChunkHandlingTriedCount = b),
      (l.updateCurrentlyProcessed = L),
      (l.markChunkForReuploadPending = E),
      (l.removeLocalFailureFromInFlightChunk = k),
      (l.enqueueNotification = $),
      (l.fetchNextHistorySyncChunkForProcessing = P));
  },
  98,
);
