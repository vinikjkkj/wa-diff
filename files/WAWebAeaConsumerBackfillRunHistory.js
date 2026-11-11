__d(
  "WAWebAeaConsumerBackfillRunHistory",
  [
    "$InternalEnum",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = n("$InternalEnum")({
        COMPLETE: "complete",
        ERROR: "error",
        CONTACTS_NOT_SYNCED: "contacts_not_synced",
        PREKEY_FETCH_FAILED: "prekey_fetch_failed",
        OFFLINE_DELIVERY_NOT_READY: "offline_delivery_not_ready",
      }),
      u = 7,
      c = 30;
    function d(e) {
      return e === s.CONTACTS_NOT_SYNCED || e === s.PREKEY_FETCH_FAILED;
    }
    function m(e) {
      var t = e.attemptCount,
        n = e.decisiveIncompleteCount,
        r = e.lastRun;
      return r == null || r.result === s.COMPLETE
        ? !1
        : (d(r.result) && n >= u) || t >= c;
    }
    function p() {
      var t;
      return (
        ((t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
            .AEA_CONSUMER_BACKFILL_COMPLETED_VERSION,
        )) != null
          ? t
          : 0) >= e
      );
    }
    function _() {
      var t,
        n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
            .AEA_CONSUMER_BACKFILL_RUN_HISTORY,
        );
      if (n == null || n.version !== e)
        return { attemptCount: 0, decisiveIncompleteCount: 0, lastRun: null };
      var r = s.cast(n.lastRunResult);
      return {
        attemptCount: n.attemptCount,
        decisiveIncompleteCount:
          (t = n.decisiveIncompleteCount) != null ? t : 0,
        lastRun:
          r == null
            ? null
            : {
                result: r,
                unconfirmedCount: n.unconfirmedCount,
                leftUnsetCount: n.leftUnsetCount,
                suspectedCount: n.suspectedCount,
                accountCount: n.accountCount,
              },
      };
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = _(),
            r = n.attemptCount,
            a = n.decisiveIncompleteCount;
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .AEA_CONSUMER_BACKFILL_RUN_HISTORY,
            {
              version: e,
              attemptCount: r + 1,
              decisiveIncompleteCount: a + (d(t.result) ? 1 : 0),
              lastRunResult: t.result,
              unconfirmedCount: t.unconfirmedCount,
              leftUnsetCount: t.leftUnsetCount,
              suspectedCount: t.suspectedCount,
              accountCount: t.accountCount,
            },
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.AEA_CONSUMER_BACKFILL_VERSION = e),
      (l.AeaBackfillRunResult = s),
      (l.AEA_BACKFILL_MAX_DECISIVE_INCOMPLETE_RUNS = u),
      (l.AEA_BACKFILL_MAX_RUNS = c),
      (l.isDecisiveIncompleteRun = d),
      (l.hasAeaBackfillReachedRunLimit = m),
      (l.isAeaBackfillCompleted = p),
      (l.readAeaBackfillRunHistory = _),
      (l.recordAeaBackfillRun = f));
  },
  98,
);
