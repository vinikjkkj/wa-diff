__d(
  "WAWebLogHistorySyncStatusAfterPairingJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebApiHistorySyncNotification",
    "WAWebHistorySyncNotificationUtils",
    "WAWebMdBootstrapHistorySyncStatusAfterPairingWamEvent",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSyncBootstrap",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumActiveTimeAfterPairing",
    "WAWebWamEnumMdBootstrapHistoryPayloadType",
    "WAWebWamEnumMdHistorySyncStatusResult",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(t, r) {
      var a = (o("WATimeUtils").unixTime() - t) / 60;
      return a < 5
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] skip status log: too soon after pairing",
              ])),
          ),
          (f || (f = n("Promise"))).resolve())
        : o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "logHistorySyncStatusAfterPairing",
              function (e) {
                return h(e.timeAfterPairingMins, e.loggingCount);
              },
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
            )
            .waitUntilCompleted({ timeAfterPairingMins: a, loggingCount: r });
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t >= 5) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] skip status log: logged 5+ times",
                ])),
            );
            return;
          }
          if (e >= 60) {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] log status for 60 minutes after pairing",
                ])),
            ),
              yield C(
                o("WAWebWamEnumActiveTimeAfterPairing")
                  .ACTIVE_TIME_AFTER_PAIRING.MINS_60,
              ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncStatusAfterPairingLoggingCount(5));
            return;
          }
          if (t < 4 && e >= 40) {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] log status for 40 minutes after pairing",
                ])),
            ),
              yield C(
                o("WAWebWamEnumActiveTimeAfterPairing")
                  .ACTIVE_TIME_AFTER_PAIRING.MINS_40,
              ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncStatusAfterPairingLoggingCount(4));
            return;
          }
          if (t < 3 && e >= 20) {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] log status for 20 minutes after pairing",
                ])),
            ),
              yield C(
                o("WAWebWamEnumActiveTimeAfterPairing")
                  .ACTIVE_TIME_AFTER_PAIRING.MINS_20,
              ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncStatusAfterPairingLoggingCount(3));
            return;
          }
          if (t < 2 && e >= 10) {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] log status for 10 minutes after pairing",
                ])),
            ),
              yield C(
                o("WAWebWamEnumActiveTimeAfterPairing")
                  .ACTIVE_TIME_AFTER_PAIRING.MINS_10,
              ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncStatusAfterPairingLoggingCount(2));
            return;
          }
          if (t < 1 && e >= 5) {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] log status for 5 minutes after pairing",
                ])),
            ),
              yield C(
                o("WAWebWamEnumActiveTimeAfterPairing")
                  .ACTIVE_TIME_AFTER_PAIRING.MINS_5,
              ),
              o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncStatusAfterPairingLoggingCount(1));
            return;
          }
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] do not log status as no requirment meets",
              ])),
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield v(e);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = yield o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getMdSessionId(),
            i = new (o(
              "WAWebMdBootstrapHistorySyncStatusAfterPairingWamEvent",
            ).MdBootstrapHistorySyncStatusAfterPairingWamEvent)({
              mdBootstrapHistoryPayloadType: o(
                "WAWebWamEnumMdBootstrapHistoryPayloadType",
              ).MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.RECENT_HISTORY,
              mdSessionId: a,
              mdTimestamp: o("WATimeUtils").unixTimeMs(),
              activeTimeAfterPairing: e,
              isLoopRunning: r("WAWebSyncBootstrap").getIsHistorySyncRunning(),
            }),
            l = yield o(
              "WAWebUserPrefsHistorySync",
            ).getLastHistoryRecentSyncedChunk(),
            s = l != null ? l.chunkOrder : -1,
            u = l != null ? l.progress : -1;
          ((i.lastProcessedNotificationChunkOrder = s),
            (i.lastProcessedNotificationChunkProgress = u));
          var c =
            (t = yield o(
              "WAWebUserPrefsHistorySync",
            ).getHistorySyncTotalProcessedMessageCount()) != null
              ? t
              : 0;
          i.totalProcessedMessageCount = c;
          var d = yield o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
          if ((d == null ? void 0 : d.recentCompleted) === !0) {
            ((i.mdHistorySyncStatusResult = o(
              "WAWebWamEnumMdHistorySyncStatusResult",
            ).MD_HISTORY_SYNC_STATUS_RESULT.SUCCESS),
              i.commit());
            return;
          }
          var m = yield o(
              "WAWebHistorySyncNotificationUtils",
            ).getUnprocessedRecentSyncNotifications(),
            p = m.length;
          i.unprocessedNotificationCount = p;
          var _ = p > 0 ? ((n = m[0].chunkOrder) != null ? n : 0) : -1;
          if (
            ((i.nextNotificationChunkOrder = _),
            o("WAWebApiHistorySyncNotification").inFlightChunk.size > 0)
          ) {
            ((i.mdHistorySyncStatusResult = o(
              "WAWebWamEnumMdHistorySyncStatusResult",
            ).MD_HISTORY_SYNC_STATUS_RESULT.IN_PROGRESS),
              i.commit());
            return;
          }
          var f = l ? s + 1 : 1,
            g = yield o(
              "WAWebUserPrefsHistorySync",
            ).getRecentSyncSingleChunkStatus(),
            h = R(g, f);
          ((i.mdHistorySyncStatusResult = h), i.commit());
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return e == null || e[t] == null
        ? o("WAWebWamEnumMdHistorySyncStatusResult")
            .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_RECEIVE
        : (function (e) {
            return e ===
              o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType.RECEIVED
              ? o("WAWebWamEnumMdHistorySyncStatusResult")
                  .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_STORE_CHUNK
              : e ===
                  o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                    .NOTIFICATION_STORED
                ? o("WAWebWamEnumMdHistorySyncStatusResult")
                    .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_FETCH
                : e ===
                    o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                      .DOWNLOADING
                  ? o("WAWebWamEnumMdHistorySyncStatusResult")
                      .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_DOWNLOAD
                  : e ===
                      o("WAWebUserPrefsTypes").HistorySyncSingleChunkStatusType
                        .DOWNLOADED
                    ? o("WAWebWamEnumMdHistorySyncStatusResult")
                        .MD_HISTORY_SYNC_STATUS_RESULT.PROTOBUF_ERROR
                    : e ===
                        o("WAWebUserPrefsTypes")
                          .HistorySyncSingleChunkStatusType.DECODED
                      ? o("WAWebWamEnumMdHistorySyncStatusResult")
                          .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_PREPROCESS
                      : e ===
                          o("WAWebUserPrefsTypes")
                            .HistorySyncSingleChunkStatusType
                            .MESSAGE_PREPROCESSED
                        ? o("WAWebWamEnumMdHistorySyncStatusResult")
                            .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_ENCRYPT
                        : e ===
                            o("WAWebUserPrefsTypes")
                              .HistorySyncSingleChunkStatusType.ENCRYPTED
                          ? o("WAWebWamEnumMdHistorySyncStatusResult")
                              .MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_STORE
                          : o("WAWebWamEnumMdHistorySyncStatusResult")
                              .MD_HISTORY_SYNC_STATUS_RESULT.OTHER_ERROR;
          })(e[t]);
    }
    ((l.logHistorySyncStatusAfterPairingJob = g),
      (l.logHistorySyncStatusAfterPairing = h),
      (l.commitHistorySyncStatusData = C));
  },
  98,
);
