__d(
  "WAWebLabyrinthShadowRunQpl",
  ["QPLFlow", "WAWebLabyrinthServerRetention", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891424375, "293"),
      s = 600 * 1e3;
    function u() {
      return o("QPLFlow").startQPLFlow(e, { timeoutInMs: s });
    }
    function c(e) {
      var t = e.carryOver,
        n = e.chats,
        r = e.comparedRange,
        a = e.historySync,
        i = e.reportedHistory,
        l = e.secondsSincePairing,
        s = e.series,
        u = e.summary,
        c = e.worker,
        f = n.flatMap(function (e) {
          return e.kind === "compared" ? [e] : [];
        }),
        g = o(
          "WAWebLabyrinthServerRetention",
        ).getLabyrinthServerRetentionDays();
      return {
        bool: {
          carry_previous_truncated: t == null ? void 0 : t.previousTruncated,
          history_sync_full_completed: a.fullCompleted,
          history_sync_initial_completed: a.initialCompleted,
          history_sync_recent_completed: a.recentCompleted,
          forced: s == null,
          reported_history_beyond_horizon: i == null ? null : i.days > g,
        },
        double: {
          history_sync_share: u.historySyncShare,
          labyrinth_share: u.labyrinthShare,
          recall: u.recall,
          window_days: r.days,
        },
        int: {
          carry_caught_up_in_labyrinth:
            t == null ? void 0 : t.caughtUpInLabyrinth,
          carry_caught_up_locally: t == null ? void 0 : t.caughtUpLocally,
          carry_previous_only_in_labyrinth:
            t == null ? void 0 : t.previousOnlyInLabyrinth,
          carry_previous_only_local: t == null ? void 0 : t.previousOnlyLocal,
          carry_still_only_in_labyrinth:
            t == null ? void 0 : t.stillOnlyInLabyrinth,
          carry_still_only_local: t == null ? void 0 : t.stillOnlyLocal,
          chats_acp2_restricted: d(n, "acp2-restricted"),
          chats_baseline_moved: f.filter(function (e) {
            return e.baselineMovedDuringRun;
          }).length,
          chats_compared: f.length,
          chats_listed: n.length,
          chats_no_local_chat: d(n, "no-local-chat"),
          chats_thread_error: d(n, "thread-error"),
          msgs_delivered_live: u.deliveredLive,
          msgs_in_both: u.inBoth,
          msgs_not_comparable_labyrinth: p(
            f.map(function (e) {
              return e.notComparable.labyrinth;
            }),
          ),
          msgs_not_comparable_local: p(
            f.map(function (e) {
              return e.notComparable.local;
            }),
          ),
          msgs_not_stored_by_history_sync: p(
            f.map(function (e) {
              return e.notStoredByHistorySync;
            }),
          ),
          msgs_only_local: u.onlyLocal,
          msgs_only_in_labyrinth: u.onlyInLabyrinth,
          msgs_only_in_labyrinth_beyond_history_sync:
            u.onlyInLabyrinthBeyondHistorySync,
          msgs_restorable_via_history_sync: u.restorableViaHistorySync,
          msgs_restorable_via_labyrinth: u.restorableViaLabyrinth,
          msgs_total: u.total,
          msgs_undecryptable: p(
            f.map(function (e) {
              return e.undecryptable;
            }),
          ),
          reported_history_days:
            i == null ? null : Math.floor(Math.min(i.days, g)),
          seconds_since_pairing: l,
          series_checkpoint_sec: s == null ? void 0 : s.checkpointSec,
          series_run_index: s == null ? void 0 : s.runIndex,
          server_retention_days: g,
          worker_compare_ms: _(c.compareMs),
          worker_decrypt_ms: _(c.decryptMs),
          worker_duration_ms: _(c.durationMs),
          worker_fetch_ms: _(c.fetchMs),
          worker_recheck_ms: _(c.recheckMs),
        },
        string_array: { thread_error_kinds: m(n) },
      };
    }
    function d(e, t) {
      return e.filter(function (e) {
        return e.kind === t;
      }).length;
    }
    function m(e) {
      var t = e.flatMap(function (e) {
        return e.kind === "thread-error"
          ? [e.error.kind + ":" + e.error.error.kind]
          : [];
      });
      return Array.from(new Set(t)).sort();
    }
    function p(e) {
      return e.reduce(function (e, t) {
        return e + t;
      }, 0);
    }
    function _(e) {
      return e == null ? null : Math.round(e);
    }
    ((l.startLabyrinthShadowRunQpl = u),
      (l.getLabyrinthShadowRunAnnotations = c));
  },
  98,
);
