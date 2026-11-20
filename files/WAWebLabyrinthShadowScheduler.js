__d(
  "WAWebLabyrinthShadowScheduler",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = [
        { check: N, name: "gate" },
        { check: M, name: "canonical-user" },
        { check: w, name: "reported-history-start" },
        { check: A, name: "recent-history-sync" },
        { check: F, name: "history-sync-idle" },
        { check: O, name: "checkpoint-due" },
        { check: B, name: "device-registered" },
      ],
      f = 1e3,
      g = null,
      h = null;
    function y(t) {
      if (g != null)
        return (p || (p = n("Promise"))).resolve("already-running");
      var a = L(t)
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
          g = null;
        });
      return ((g = a), a);
    }
    function C(e) {
      var t, r;
      if (g != null) return (p || (p = n("Promise"))).resolve(null);
      var a = T({
        backupFromSec:
          (t =
            (r = e == null ? void 0 : e.reportedHistoryStartSec) != null
              ? r
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
        (g = a
          .then(function () {
            return "ran";
          })
          .finally(function () {
            g = null;
          })),
        a
      );
    }
    function b() {
      return o("WAPromiseReduce").promiseReduce(
        Array.from(_),
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = t.check,
                r = t.name;
              return (e.push({ name: r, skipReason: yield n() }), e);
            },
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        [],
      );
    }
    function v() {
      return h;
    }
    function S() {
      if (
        o("WAWebLabyrinthShadowGating").getLabyrinthShadowGate() !== "enabled"
      )
        return null;
      var e = o(
        "WAWebLabyrinthShadowSeries",
      ).getNextLabyrinthShadowCheckpointSec(q());
      return Math.max(0, e - o("WATimeUtils").unixTime()) * f;
    }
    function R() {
      return g != null;
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield P();
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
                    return k(e);
                  },
                  {
                    name: "shadow-run",
                    priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
                  },
                ).promise;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
            r = q(),
            a = o("WATimeUtils").unixTime(),
            i = yield T({
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
                (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                    .LABYRINTH_SHADOW_SERIES,
                  babelHelpers.extends(
                    {},
                    o(
                      "WAWebLabyrinthShadowSeries",
                    ).recordLabyrinthShadowSeriesRun(r, a),
                    { unresolved: l.report.unresolved },
                  ),
                )),
              "ran")
            : "failed";
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.backupFromSec,
            r = e.forced,
            a = e.series,
            i = e.trigger,
            l = o("WATimeUtils").millisTime(),
            s = yield x({
              backupFromSec: n != null ? n : void 0,
              previousUnresolved: (t = q().unresolved) != null ? t : null,
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
            (h = c),
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
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.trigger;
          try {
            var n = yield o(
              "WAWebLabyrinthShadowRunController",
            ).runLabyrinthShadow(e);
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
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return o("WAPromiseReduce").promiseReduce(
        Array.from(_),
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = t.check;
              return e != null ? e : yield n();
            },
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        null,
      );
    }
    function N() {
      var e = o("WAWebLabyrinthShadowGating").getLabyrinthShadowGate();
      return e === "enabled" ? null : e;
    }
    function M() {
      return o(
        "WAWebLabyrinthCanonicalUserFbid",
      ).getMaybeWaCanonicalUserFbid() == null
        ? "no-canonical-user"
        : null;
    }
    function w() {
      return o(
        "WAWebLabyrinthReportedHistoryStart",
      ).getLabyrinthReportedHistoryStartSec() == null
        ? "no-reported-history-start"
        : null;
    }
    function A() {
      var e;
      return ((e = o("WAWebUserPrefsHistorySync").getHistorySyncStatus()) ==
      null
        ? void 0
        : e.recentCompleted) === !0
        ? null
        : "recent-history-sync-pending";
    }
    function F() {
      return o("WAWebApiHistorySyncNotification").inFlightChunk.size > 0
        ? "history-sync-active"
        : null;
    }
    function O() {
      return o(
        "WAWebLabyrinthShadowSeries",
      ).getNextLabyrinthShadowCheckpointSec(q()) > o("WATimeUtils").unixTime()
        ? "next-checkpoint-not-due"
        : null;
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o(
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
        })),
        W.apply(this, arguments)
      );
    }
    function q() {
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
    ((l.scheduleLabyrinthShadowRun = y),
      (l.forceLabyrinthShadowRun = C),
      (l.getLabyrinthShadowEligibility = b),
      (l.getLastLabyrinthShadowRun = v),
      (l.getLabyrinthShadowCheckpointDelayMs = S),
      (l.isLabyrinthShadowRunInFlight = R));
  },
  98,
);
