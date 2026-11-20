__d(
  "WAWebLabyrinthShadowRunController",
  [
    "WAResultOrError",
    "WATimeUtils",
    "WAWebLabyrinthRestoreThreadController",
    "WAWebLabyrinthServerRetention",
    "WAWebLabyrinthShadowRunInWorker",
    "WAWebLabyrinthShadowRunQpl",
    "WAWebLabyrinthShadowSummary",
    "WAWebRelayEnvironment",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 20;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebLabyrinthShadowRunQpl").startLabyrinthShadowRunQpl();
          t.addAnnotations({ string: { trigger: e.trigger } });
          try {
            var n = yield c(e, t);
            return (
              n.success
                ? t.endSuccess(
                    o(
                      "WAWebLabyrinthShadowRunQpl",
                    ).getLabyrinthShadowRunAnnotations(n.value),
                  )
                : t.endFail(n.error.kind, {
                    string: { error_detail: n.error.error.kind },
                  }),
              n
            );
          } catch (e) {
            throw (
              t.endFail("exception", {
                string: { error_detail: r("getErrorSafe")(e).name },
              }),
              e
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = t.backupFromSec,
            a = t.previousUnresolved,
            i = t.series,
            l = o("WATimeUtils").unixTime(),
            s = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
            u = {
              endSec: l,
              pairingSec: s,
              startSec: Math.min(
                l,
                Math.max(
                  r != null ? r : 0,
                  l -
                    o(
                      "WAWebLabyrinthServerRetention",
                    ).getLabyrinthServerRetentionDays() *
                      o("WATimeUtils").DAY_SECONDS,
                ),
              ),
            },
            c = yield o(
              "WAWebLabyrinthRestoreThreadController",
            ).loadLabyrinthStateForRestore();
          if (!c.success)
            return o("WAResultOrError").makeError({
              error: c.error,
              kind: "load-state-error",
            });
          var d = c.value,
            m = d.ownerAccountId,
            p = d.state,
            _ = yield o(
              "WAWebRelayEnvironment",
            ).captureXControllerGraphQLAuth();
          n.addPoint("worker_start");
          var f = yield o(
            "WAWebLabyrinthShadowRunInWorker",
          ).runLabyrinthShadowInBackendWorker({
            auth: _,
            context: u,
            maxThreads: e,
            ownerAccountId: m,
            previousUnresolved: a != null ? a : null,
            state: p,
          });
          if ((n.addPoint("worker_end"), !f.success))
            return o("WAResultOrError").makeError(f.error);
          var g = f.value,
            h = g.chats,
            y = o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
          return o("WAResultOrError").makeResult({
            carryOver: g.carryOver,
            chats: h,
            historySync: {
              fullCompleted: (y == null ? void 0 : y.fullCompleted) === !0,
              initialCompleted:
                (y == null ? void 0 : y.initialCompleted) === !0,
              recentCompleted: (y == null ? void 0 : y.recentCompleted) === !0,
            },
            reportedHistory:
              r == null || r <= 0
                ? null
                : {
                    days: Math.max(0, (l - r) / o("WATimeUtils").DAY_SECONDS),
                    startSec: r,
                  },
            secondsSincePairing: s == null ? null : l - s,
            series: i != null ? i : null,
            unresolved: g.unresolved,
            worker: babelHelpers.extends({}, g.timings, {
              durationMs: g.durationMs,
              fetchMs: g.fetchMs,
            }),
            summary: o("WAWebLabyrinthShadowSummary").summarizeLabyrinthShadow(
              h.flatMap(function (e) {
                return e.kind === "compared" ? [e] : [];
              }),
            ),
            comparedRange: {
              days: (u.endSec - u.startSec) / o("WATimeUtils").DAY_SECONDS,
              endSec: u.endSec,
              startSec: u.startSec,
            },
          });
        })),
        d.apply(this, arguments)
      );
    }
    l.runLabyrinthShadow = s;
  },
  98,
);
