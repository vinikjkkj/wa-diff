__d(
  "WAWebAeaConsumerBackfillStatusOds",
  ["$InternalEnum", "WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        DISABLED: "disabled",
        COMPLETED: "completed",
        EXHAUSTED: "exhausted",
        NOT_STARTED: "in_progress.not_started",
        CONTACTS_NOT_SYNCED: "in_progress.contacts_not_synced",
        PREKEY_FETCH_FAILED: "in_progress.prekey_fetch_failed",
        ERROR: "in_progress.error",
        OFFLINE: "in_progress.offline",
      }),
      s = n("$InternalEnum").Mirrored([
        "ONE",
        "TWO",
        "THREE_TO_NINE",
        "TEN_PLUS",
        "UNKNOWN",
      ]);
    function u(t, n) {
      var o = c(n);
      e: {
        if (t === e.DISABLED) {
          r("WAWebODS").incr("web.aea.backfill.status.disabled");
          break e;
        }
        if (t === e.NOT_STARTED) {
          r("WAWebODS").incr("web.aea.backfill.status.in_progress.not_started");
          break e;
        }
        if (t === e.COMPLETED) {
          d(o);
          break e;
        }
        if (t === e.EXHAUSTED) {
          r("WAWebODS").incr("web.aea.backfill.status.exhausted");
          break e;
        }
        if (t === e.CONTACTS_NOT_SYNCED) {
          m(o);
          break e;
        }
        if (t === e.PREKEY_FETCH_FAILED) {
          p(o);
          break e;
        }
        if (t === e.ERROR) {
          _(o);
          break e;
        }
        if (t === e.OFFLINE) {
          f(o);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function c(e) {
      return e < 1
        ? s.UNKNOWN
        : e === 1
          ? s.ONE
          : e === 2
            ? s.TWO
            : e < 10
              ? s.THREE_TO_NINE
              : s.TEN_PLUS;
    }
    function d(e) {
      e: {
        if (e === s.ONE) {
          r("WAWebODS").incr("web.aea.backfill.status.completed.1");
          break e;
        }
        if (e === s.TWO) {
          r("WAWebODS").incr("web.aea.backfill.status.completed.2");
          break e;
        }
        if (e === s.THREE_TO_NINE) {
          r("WAWebODS").incr("web.aea.backfill.status.completed.3_9");
          break e;
        }
        if (e === s.TEN_PLUS) {
          r("WAWebODS").incr("web.aea.backfill.status.completed.10_plus");
          break e;
        }
        if (e === s.UNKNOWN) {
          r("WAWebODS").incr("web.aea.backfill.status.completed.unknown");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function m(e) {
      e: {
        if (e === s.ONE) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.contacts_not_synced.1",
          );
          break e;
        }
        if (e === s.TWO) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.contacts_not_synced.2",
          );
          break e;
        }
        if (e === s.THREE_TO_NINE) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.contacts_not_synced.3_9",
          );
          break e;
        }
        if (e === s.TEN_PLUS) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.contacts_not_synced.10_plus",
          );
          break e;
        }
        if (e === s.UNKNOWN) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.contacts_not_synced.unknown",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function p(e) {
      e: {
        if (e === s.ONE) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.prekey_fetch_failed.1",
          );
          break e;
        }
        if (e === s.TWO) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.prekey_fetch_failed.2",
          );
          break e;
        }
        if (e === s.THREE_TO_NINE) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.prekey_fetch_failed.3_9",
          );
          break e;
        }
        if (e === s.TEN_PLUS) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.prekey_fetch_failed.10_plus",
          );
          break e;
        }
        if (e === s.UNKNOWN) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.prekey_fetch_failed.unknown",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function _(e) {
      e: {
        if (e === s.ONE) {
          r("WAWebODS").incr("web.aea.backfill.status.in_progress.error.1");
          break e;
        }
        if (e === s.TWO) {
          r("WAWebODS").incr("web.aea.backfill.status.in_progress.error.2");
          break e;
        }
        if (e === s.THREE_TO_NINE) {
          r("WAWebODS").incr("web.aea.backfill.status.in_progress.error.3_9");
          break e;
        }
        if (e === s.TEN_PLUS) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.error.10_plus",
          );
          break e;
        }
        if (e === s.UNKNOWN) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.error.unknown",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function f(e) {
      e: {
        if (e === s.ONE) {
          r("WAWebODS").incr("web.aea.backfill.status.in_progress.offline.1");
          break e;
        }
        if (e === s.TWO) {
          r("WAWebODS").incr("web.aea.backfill.status.in_progress.offline.2");
          break e;
        }
        if (e === s.THREE_TO_NINE) {
          r("WAWebODS").incr("web.aea.backfill.status.in_progress.offline.3_9");
          break e;
        }
        if (e === s.TEN_PLUS) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.offline.10_plus",
          );
          break e;
        }
        if (e === s.UNKNOWN) {
          r("WAWebODS").incr(
            "web.aea.backfill.status.in_progress.offline.unknown",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.AeaBackfillStatus = e), (l.incrAeaBackfillStatusOds = u));
  },
  98,
);
