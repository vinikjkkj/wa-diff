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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, r) {
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
          await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .MD_HISTORY_LAST_RECENT_SYNC_CHUNK_PROCESSED,
            { chunkOrder: n, progress: r },
          )),
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
            .MD_HISTORY_LAST_CHUNK_PROCESSED,
          t + "_" + n,
        ));
    }
    function c() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .MD_HISTORY_LAST_CHUNK_PROCESSED,
      );
      return e;
    }
    function d() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .MD_HISTORY_LAST_RECENT_SYNC_CHUNK_PROCESSED,
      );
      return e;
    }
    async function m() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.INITIAL_HISTORY_SYNCED,
        !0,
      );
    }
    function p() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.INITIAL_HISTORY_SYNCED,
      );
      return e === !0;
    }
    async function _(e) {
      var t,
        n = (t = await f()) != null ? t : {};
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS,
        babelHelpers.extends({}, n, e),
      );
    }
    function f() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS,
      );
      return e;
    }
    async function g(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC,
        e,
      );
    }
    function h() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC,
      )) != null
        ? e
        : 0;
    }
    async function y(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .ESTIMATED_HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC,
        e,
      );
    }
    function C() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .ESTIMATED_HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC,
      );
      return e != null ? e : 0;
    }
    function b() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").MD_KEYS.HISTORY_SYNC_REMAINING_PAUSED_SECONDS,
      );
      if (typeof e == "number") return e;
    }
    function v(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.HISTORY_SYNC_REMAINING_PAUSED_SECONDS,
        e,
      );
    }
    function S() {
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
    function R(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.HISTORY_SYNC_EARLIEST_DATE,
        e,
      );
    }
    async function L(e, t, n) {
      var r, a;
      if (
        !(
          n == null ||
          e !==
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.RECENT
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
          l = (a = await E()) != null ? a : {};
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
            .HISTORY_SYNC_SINGLE_CHUNK_STATUS,
          babelHelpers.extends({}, l, i),
        );
      }
    }
    function E() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_SINGLE_CHUNK_STATUS,
      );
      return e;
    }
    async function k(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").HASHED_KEYS.INITIAL_HIST_BOUNDARY,
        e,
      );
    }
    function I() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").HASHED_KEYS.INITIAL_HIST_BOUNDARY,
      );
    }
    async function T(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_STATUS_AFTER_PAIRING_LOGGING_COUNT,
        e,
      );
    }
    function D() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_STATUS_AFTER_PAIRING_LOGGING_COUNT,
      );
      return e;
    }
    async function x(e) {
      var t,
        n = (t = $()) != null ? t : 0;
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_TOTAL_PROCESSED_MESSAGE_COUNT,
        n + e,
      );
    }
    function $() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .HISTORY_SYNC_TOTAL_PROCESSED_MESSAGE_COUNT,
      );
      return e;
    }
    async function P(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS
          .HISTORY_SYNC_COMPLETE_ON_DEMAND_ACCESS_GRANTED,
        e,
      );
    }
    function N() {
      var e =
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").KEYS
            .HISTORY_SYNC_COMPLETE_ON_DEMAND_ACCESS_GRANTED,
        ) === !0;
      return e;
    }
    ((l.setLastHistorySyncedChunk = u),
      (l.getLastHistorySyncedChunk = c),
      (l.getLastHistoryRecentSyncedChunk = d),
      (l.setInitialHistorySyncComplete = m),
      (l.getInitialHistorySyncComplete = p),
      (l.setHistorySyncStatus = _),
      (l.getHistorySyncStatus = f),
      (l.setChunkCountForEndOfRecentHistorySync = g),
      (l.getChunkCountForEndOfRecentHistorySync = h),
      (l.setEstimatedChunkCountForEndOfRecentHistorySync = y),
      (l.getEstimatedChunkCountForEndOfRecentHistorySync = C),
      (l.getHistorySyncRemainingPausedSeconds = b),
      (l.setHistorySyncRemainingPausedSeconds = v),
      (l.getHistorySyncEarliestDate = S),
      (l.setHistorySyncEarliestDate = R),
      (l.setRecentSyncSingleChunkStatus = L),
      (l.getRecentSyncSingleChunkStatus = E),
      (l.setHistoryInitialSyncBoundary = k),
      (l.getHistoryInitialSyncBoundary = I),
      (l.setHistorySyncStatusAfterPairingLoggingCount = T),
      (l.getHistorySyncStatusAfterPairingLoggingCount = D),
      (l.setHistorySyncTotalProcessedMessageCount = x),
      (l.getHistorySyncTotalProcessedMessageCount = $),
      (l.setHistorySyncCompleteOnDemandAccessGranted = P),
      (l.getHistorySyncCompleteOnDemandAccessGranted = N));
  },
  98,
);
