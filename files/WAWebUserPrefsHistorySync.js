__d(
  "WAWebUserPrefsHistorySync",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebHistorySyncUtils",
    "WAWebProtobufsHistorySync.pb",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          t == null ||
            n == null ||
            (t ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] set last history sync chunk with chunk order ",
                    "",
                  ])),
                n,
              ),
              yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                  .MD_HISTORY_LAST_RECENT_SYNC_CHUNK_PROCESSED,
                { chunkOrder: n, progress: r },
              )),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                .MD_HISTORY_LAST_CHUNK_PROCESSED,
              t + "_" + n,
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .MD_HISTORY_LAST_CHUNK_PROCESSED,
      );
      return e;
    }
    function m() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .MD_HISTORY_LAST_RECENT_SYNC_CHUNK_PROCESSED,
      );
      return e;
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.INITIAL_HISTORY_SYNCED,
            !0,
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.INITIAL_HISTORY_SYNCED,
      );
      return e === !0;
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = yield y()) != null ? t : {};
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS,
            babelHelpers.extends({}, n, e),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS,
      );
      return e;
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC,
            e,
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC,
      )) != null
        ? e
        : 0;
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .ESTIMATED_HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC,
            e,
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .ESTIMATED_HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC,
      );
      return e != null ? e : 0;
    }
    function E() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").MD_KEYS.HISTORY_SYNC_REMAINING_PAUSED_SECONDS,
      );
      if (typeof e == "number") return e;
    }
    function k(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.HISTORY_SYNC_REMAINING_PAUSED_SECONDS,
        e,
      );
    }
    function I() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.HISTORY_SYNC_EARLIEST_DATE,
      );
      if (typeof e != "number" || e === 0) {
        var t,
          n =
            (t = o("WAWebUserPrefsMultiDevice").getPairingTimestamp()) != null
              ? t
              : o("WATimeUtils").unixTime(),
          a = o("WAWebHistorySyncUtils").getEarliestHistorySyncDate();
        return n - a;
      }
      return e;
    }
    function T(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.HISTORY_SYNC_EARLIEST_DATE,
        e,
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          if (
            !(
              n == null ||
              e !==
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT
            )
          ) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] set recent sync single chunk ",
                  " status to ",
                  "",
                ])),
              n,
              t,
            );
            var i = ((r = {}), (r[n] = t), r),
              l = (a = yield $()) != null ? a : {};
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                .HISTORY_SYNC_SINGLE_CHUNK_STATUS,
              babelHelpers.extends({}, l, i),
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_SINGLE_CHUNK_STATUS,
      );
      return e;
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").HASHED_KEYS.INITIAL_HIST_BOUNDARY,
            e,
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").HASHED_KEYS.INITIAL_HIST_BOUNDARY,
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .HISTORY_SYNC_STATUS_AFTER_PAIRING_LOGGING_COUNT,
            e,
          );
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_STATUS_AFTER_PAIRING_LOGGING_COUNT,
      );
      return e;
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = W()) != null ? t : 0;
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .HISTORY_SYNC_TOTAL_PROCESSED_MESSAGE_COUNT,
            n + e,
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_TOTAL_PROCESSED_MESSAGE_COUNT,
      );
      return e;
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").KEYS
              .HISTORY_SYNC_COMPLETE_ON_DEMAND_ACCESS_GRANTED,
            e,
          );
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      var e =
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").KEYS
            .HISTORY_SYNC_COMPLETE_ON_DEMAND_ACCESS_GRANTED,
        ) === !0;
      return e;
    }
    ((l.setLastHistorySyncedChunk = u),
      (l.getLastHistorySyncedChunk = d),
      (l.getLastHistoryRecentSyncedChunk = m),
      (l.setInitialHistorySyncComplete = p),
      (l.getInitialHistorySyncComplete = f),
      (l.setHistorySyncStatus = g),
      (l.getHistorySyncStatus = y),
      (l.setChunkCountForEndOfRecentHistorySync = C),
      (l.getChunkCountForEndOfRecentHistorySync = v),
      (l.setEstimatedChunkCountForEndOfRecentHistorySync = S),
      (l.getEstimatedChunkCountForEndOfRecentHistorySync = L),
      (l.getHistorySyncRemainingPausedSeconds = E),
      (l.setHistorySyncRemainingPausedSeconds = k),
      (l.getHistorySyncEarliestDate = I),
      (l.setHistorySyncEarliestDate = T),
      (l.setRecentSyncSingleChunkStatus = D),
      (l.getRecentSyncSingleChunkStatus = $),
      (l.setHistoryInitialSyncBoundary = P),
      (l.getHistoryInitialSyncBoundary = M),
      (l.setHistorySyncStatusAfterPairingLoggingCount = w),
      (l.getHistorySyncStatusAfterPairingLoggingCount = F),
      (l.setHistorySyncTotalProcessedMessageCount = O),
      (l.getHistorySyncTotalProcessedMessageCount = W),
      (l.setHistorySyncCompleteOnDemandAccessGranted = q),
      (l.getHistorySyncCompleteOnDemandAccessGranted = V));
  },
  98,
);
