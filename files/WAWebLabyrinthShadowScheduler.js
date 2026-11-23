__d(
  "WAWebLabyrinthShadowScheduler",
  [
    "TaskSchedulerPriority",
    "WALogger",
    "WAPromiseReduce",
    "WATimeUtils",
    "WAWebApiHistorySyncNotification",
    "WAWebLabyrinthCanonicalUserFbid",
    "WAWebLabyrinthDebugDeviceStatusController",
    "WAWebLabyrinthReportedHistoryStart",
    "WAWebLabyrinthShadowCarryOver",
    "WAWebLabyrinthShadowGating",
    "WAWebLabyrinthShadowRunController",
    "WAWebLabyrinthShadowSeries",
    "WAWebLabyrinthTaskScheduler",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = [
        { check: T, name: "gate" },
        { check: D, name: "canonical-user" },
        { check: x, name: "reported-history-start" },
        { check: $, name: "recent-history-sync" },
        { check: P, name: "history-sync-idle" },
        { check: N, name: "checkpoint-due" },
        { check: M, name: "device-registered" },
      ],
      _ = 1e3,
      f = null,
      g = null;
    function h(t) {
      if (f != null) return Promise.resolve("already-running");
      var n = R(t)
        .catch(function (n) {
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[labyrinth-shadow] ",
                    ": run failed",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("labyrinth-shadow-run-failed"),
            "failed"
          );
        })
        .finally(function () {
          f = null;
        });
      return ((f = n), n);
    }
    function y(e) {
      var t, n;
      if (f != null) return Promise.resolve(null);
      var r = E({
        backupFromSec:
          (t =
            (n = e == null ? void 0 : e.reportedHistoryStartSec) != null
              ? n
              : o(
                  "WAWebLabyrinthReportedHistoryStart",
                ).getLabyrinthReportedHistoryStartSec()) != null
            ? t
            : void 0,
        forced: !0,
        series: null,
        trigger: "manual",
      });
      return (
        (f = r
          .then(function () {
            return "ran";
          })
          .finally(function () {
            f = null;
          })),
        r
      );
    }
    function C() {
      return o("WAPromiseReduce").promiseReduce(
        Array.from(p),
        async function (e, t) {
          var n = t.check,
            r = t.name;
          return (e.push({ name: r, skipReason: await n() }), e);
        },
        [],
      );
    }
    function b() {
      return g;
    }
    function v() {
      if (
        o("WAWebLabyrinthShadowGating").getLabyrinthShadowGate() !== "enabled"
      )
        return null;
      var e = o(
        "WAWebLabyrinthShadowSeries",
      ).getNextLabyrinthShadowCheckpointSec(w());
      return Math.max(0, e - o("WATimeUtils").unixTime()) * _;
    }
    function S() {
      return f != null;
    }
    async function R(e) {
      var t = await I();
      return t != null
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[labyrinth-shadow] ",
                ": skipped, ",
                "",
              ])),
            e,
            t,
          ),
          t)
        : o("WAWebLabyrinthTaskScheduler")
            .getLabyrinthTaskScheduler()
            .run(
              function () {
                return L(e);
              },
              {
                name: "shadow-run",
                priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
              },
            ).promise;
    }
    async function L(e) {
      var t,
        n = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
        r = w(),
        a = o("WATimeUtils").unixTime(),
        i = await E({
          backupFromSec:
            (t = o(
              "WAWebLabyrinthReportedHistoryStart",
            ).getLabyrinthReportedHistoryStartSec()) != null
              ? t
              : void 0,
          forced: !1,
          series: {
            checkpointSec: o(
              "WAWebLabyrinthShadowSeries",
            ).getLabyrinthShadowCheckpointSec(r, a),
            runIndex: r.runs,
          },
          trigger: e,
        }),
        l = i.outcome;
      return l.kind === "report"
        ? (o("WAWebUserPrefsMultiDevice").getPairingTimestamp() === n &&
            (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LABYRINTH_SHADOW_SERIES,
              babelHelpers.extends(
                {},
                o("WAWebLabyrinthShadowSeries").recordLabyrinthShadowSeriesRun(
                  r,
                  a,
                ),
                { unresolved: l.report.unresolved },
              ),
            )),
          "ran")
        : "failed";
    }
    async function E(e) {
      var t,
        n = e.backupFromSec,
        r = e.forced,
        a = e.series,
        i = e.trigger,
        l = o("WATimeUtils").millisTime(),
        s = await k({
          backupFromSec: n != null ? n : void 0,
          previousUnresolved: (t = w().unresolved) != null ? t : null,
          series: a,
          trigger: i,
        }),
        c = {
          finishedAtMs: o("WATimeUtils").millisTime(),
          forced: r,
          outcome: s,
          startedAtMs: l,
          trigger: i,
        };
      return (
        (g = c),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[labyrinth-shadow] ",
              ": ran, ",
              "",
            ])),
          i,
          s.kind,
        ),
        c
      );
    }
    async function k(e) {
      var t = e.trigger;
      try {
        var n = await o("WAWebLabyrinthShadowRunController").runLabyrinthShadow(
          e,
        );
        return n.success
          ? { kind: "report", report: n.value }
          : { error: n.error, kind: "error" };
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[labyrinth-shadow] ",
                  ": run threw",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("labyrinth-shadow-run-exception"),
          { kind: "exception" }
        );
      }
    }
    function I() {
      return o("WAPromiseReduce").promiseReduce(
        Array.from(p),
        async function (e, t) {
          var n = t.check;
          return e != null ? e : await n();
        },
        null,
      );
    }
    function T() {
      var e = o("WAWebLabyrinthShadowGating").getLabyrinthShadowGate();
      return e === "enabled" ? null : e;
    }
    function D() {
      return o(
        "WAWebLabyrinthCanonicalUserFbid",
      ).getMaybeWaCanonicalUserFbid() == null
        ? "no-canonical-user"
        : null;
    }
    function x() {
      return o(
        "WAWebLabyrinthReportedHistoryStart",
      ).getLabyrinthReportedHistoryStartSec() == null
        ? "no-reported-history-start"
        : null;
    }
    function $() {
      var e;
      return ((e = o("WAWebUserPrefsHistorySync").getHistorySyncStatus()) ==
      null
        ? void 0
        : e.recentCompleted) === !0
        ? null
        : "recent-history-sync-pending";
    }
    function P() {
      return o("WAWebApiHistorySyncNotification").inFlightChunk.size > 0
        ? "history-sync-active"
        : null;
    }
    function N() {
      return o(
        "WAWebLabyrinthShadowSeries",
      ).getNextLabyrinthShadowCheckpointSec(w()) > o("WATimeUtils").unixTime()
        ? "next-checkpoint-not-due"
        : null;
    }
    async function M() {
      try {
        var e = await o(
          "WAWebLabyrinthDebugDeviceStatusController",
        ).getLabyrinthDebugDeviceStatus();
        return e.success
          ? e.value.status === "ready"
            ? null
            : "device-not-registered"
          : (o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[labyrinth-shadow] device status: ",
                    "",
                  ])),
                e.error.kind,
              )
              .catching(e.error.error.error),
            "device-status-error");
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[labyrinth-shadow] device status threw",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("labyrinth-shadow-device-status-threw"),
          "device-status-error"
        );
      }
    }
    function w() {
      var e,
        t,
        n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LABYRINTH_SHADOW_SERIES,
        ),
        r =
          (e =
            (t = o("WAWebUserPrefsMultiDevice").getPairingTimestamp()) != null
              ? t
              : n == null
                ? void 0
                : n.pairingSec) != null
            ? e
            : o("WATimeUtils").unixTime();
      return o("WAWebLabyrinthShadowSeries").getLabyrinthShadowSeries(
        n == null
          ? null
          : {
              lastRunSec: n.lastRunSec,
              pairingSec: n.pairingSec,
              runs: n.runs,
              unresolved: o(
                "WAWebLabyrinthShadowCarryOver",
              ).readLabyrinthShadowUnresolved(n.unresolved),
            },
        r,
      );
    }
    ((l.scheduleLabyrinthShadowRun = h),
      (l.forceLabyrinthShadowRun = y),
      (l.getLabyrinthShadowEligibility = C),
      (l.getLastLabyrinthShadowRun = b),
      (l.getLabyrinthShadowCheckpointDelayMs = v),
      (l.isLabyrinthShadowRunInFlight = S));
  },
  98,
);
