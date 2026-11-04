__d(
  "WAWebWindowsStartupTraceReporter",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebPonyfillsIdleCallback",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsMeUser",
    "WAWebWindowsHybridBridgeCommon",
    "WAWebWindowsStartupQplEvents",
    "WAWebWindowsStartupReportParser",
    "WAWebWindowsStartupWebTimings",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 50,
      m = 5e3,
      p = 6e4,
      _ = 2,
      f = 1,
      g = n("$InternalEnum")({
        Ok: 1,
        Invalid: 3,
        Incomplete: 5,
        ClockSyncError: 6,
      }),
      h = { 1: 2, 2: 3, 3: 4, 4: 3, 5: 2, 6: 113, 7: 3, 8: 4 },
      y = new Set([3, 8]),
      C = 5,
      b = !1;
    function v() {
      b ||
        ((b = !0),
        L(function () {
          S();
        }));
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield E()) &&
            self.setTimeout(function () {
              L(function () {
                E();
              });
            }, p);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = !1,
        n = function () {
          t || ((t = !0), e());
        };
      (o("WAWebPonyfillsIdleCallback").requestIdleCallback(n),
        self.setTimeout(n, m));
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t =
                (e = o(
                  "WAWebWindowsHybridBridgeCommon",
                ).WAWebWindowsGetBridge()) == null
                  ? void 0
                  : e.nativeAppStateBridge;
            if ((t == null ? void 0 : t.takeStartupTrace) == null) return !1;
            var n = self.performance.now(),
              a = yield I(t);
            if (a == null) return !1;
            var i = N(a, n);
            return (
              i.length > 0 &&
                (t.ackStartupReport == null || t.ackStartupReport(i)),
              a.report.currentPending
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsStartupTraceReporter: report failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("windows-startup-trace-report-failed"),
              !1
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield $(e);
          if (t == null || t.report.current == null || t.clockSyncErrorMs <= d)
            return t;
          var n = yield D(e);
          return n != null && n.clockSyncErrorMs < t.clockSyncErrorMs ? n : t;
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield $(e);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsStartupTraceReporter: clock sync retry failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("windows-startup-trace-retry-failed"),
              null
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = self.performance.now(),
            n = yield e.takeStartupTrace == null
              ? void 0
              : e.takeStartupTrace(t),
            r = self.performance.now();
          if (n == null || n === "") return null;
          var a = o("WAWebWindowsStartupReportParser").parseStartupReport(n);
          return a == null
            ? (o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsStartupTraceReporter: invalid native report",
                  ])),
              ),
              null)
            : {
                report: a,
                processStartWeb: (t + r) / 2 - a.nowSinceProcessStartMs,
                clockSyncErrorMs: (r - t) / 2,
              };
        })),
        P.apply(this, arguments)
      );
    }
    function N(t, n) {
      var r = [],
        a = t.report,
        i = a.attempts,
        l = a.current;
      (l != null &&
        (M(l)
          ? o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WindowsStartupTraceReporter: successful launch without nav_completed",
                ])),
            )
          : (w(l, t, n), r.push(l.id))),
        i.forEach(function (e, t) {
          (W(e, t), r.push(e.id));
        }));
      var s = t.report.firstInstallLaunch;
      return (s != null && (q(s, i.length), r.push(s.id)), r);
    }
    function M(e) {
      return h[e.navOutcome] === 2 && e.points.nav_completed == null;
    }
    function w(e, t, n) {
      var r,
        a = t.clockSyncErrorMs <= d,
        i = e.points.nav_completed,
        l = a ? t.processStartWeb : 0,
        s = a && i != null ? t.processStartWeb + i : l,
        u = o("WAWebQplFlowWrapper").QPL.markerStart(
          o("WAWebWindowsStartupQplEvents").WINDOWS_HYBRID_STARTUP_EVENT,
          {
            timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(l),
            instanceKey: f,
          },
        ),
        c = g.ClockSyncError;
      (a
        ? (A(u, e.points, t.processStartWeb),
          (c = O(u, t.report.level, i == null ? null : s + t.clockSyncErrorMs)))
        : u.annotate({ int: babelHelpers.extends({}, F(e.points)) }),
        u.annotate({
          int: babelHelpers.extends({}, e.annotations.int, {
            hyb_nav_outcome: e.navOutcome,
            hyb_clock_sync_error_ms: Math.round(t.clockSyncErrorMs),
            hyb_web_timing_status: c,
            hyb_reporter_ms: Math.round(self.performance.now() - n),
          }),
          string: babelHelpers.extends({}, e.annotations.string),
          bool: babelHelpers.extends({}, e.annotations.bool, {
            hyb_logged_in:
              o("WAWebUserPrefsMeUser").getMaybeMeLidUser() != null,
          }),
        }),
        u.end((r = h[e.navOutcome]) != null ? r : 3, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(s),
        }));
    }
    function A(e, t, n) {
      Object.keys(t).forEach(function (r) {
        e.addPoint(r, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(
            n + t[r],
          ),
        });
      });
    }
    function F(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          t["hyb_" + n + "_at_ms"] = Math.round(e[n]);
        }),
        t
      );
    }
    function O(e, t, n) {
      var r;
      if (n != null && n < 0) return g.Invalid;
      (e.addPoint("web_time_origin", {
        timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(0),
      }),
        B(
          e,
          "bridge_ready",
          o("WAWebWindowsStartupWebTimings").getWindowsBridgeReadyTime(),
        ),
        B(
          e,
          "web_first_paint",
          o("WAWebWindowsStartupWebTimings").getFirstPaintTime(),
        ));
      var a = o("WAWebWindowsStartupWebTimings").getNavigationTiming();
      return a == null
        ? g.Incomplete
        : (B(e, "web_dcl", a.domContentLoadedEventStart),
          t >= _ &&
            (B(e, "web_worker_start", a.workerStart),
            B(e, "web_fetch_start", a.fetchStart),
            B(e, "web_response_start", a.responseStart)),
          ((r = a.domContentLoadedEventStart) != null ? r : 0) > 0
            ? g.Ok
            : g.Incomplete);
    }
    function B(e, t, n) {
      n != null &&
        n > 0 &&
        e.addPoint(t, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(n),
        });
    }
    function W(e, t) {
      var n = o("WAWebQplFlowWrapper").QPL.markerStart(
        o("WAWebWindowsStartupQplEvents").WINDOWS_HYBRID_STARTUP_ATTEMPT_EVENT,
        { instanceKey: t + 1 },
      );
      (n.annotate({
        int: babelHelpers.extends({}, e.annotations.int, {
          hyb_nav_outcome: e.navOutcome,
        }),
        string: babelHelpers.extends({}, e.annotations.string),
        bool: babelHelpers.extends({}, e.annotations.bool),
      }),
        n.end(y.has(e.navOutcome) ? 4 : 3));
    }
    function q(e, t) {
      var n,
        r = o("WAWebQplFlowWrapper").QPL.markerStart(
          o("WAWebWindowsStartupQplEvents")
            .WINDOWS_HYBRID_STARTUP_ATTEMPT_EVENT,
          { instanceKey: t + 1 },
        );
      (r.annotate({
        int: babelHelpers.extends({}, e.annotations.int, F(e.points), {
          hyb_nav_outcome: e.navOutcome,
          hyb_first_launch_after_update: C,
        }),
        string: babelHelpers.extends({}, e.annotations.string),
        bool: babelHelpers.extends({}, e.annotations.bool, {
          hyb_signed_out_launch: !0,
        }),
      }),
        r.end((n = h[e.navOutcome]) != null ? n : 3));
    }
    ((l.startReportingStartupTrace = v),
      (l.reportStartupTraceWithRetry = S),
      (l.reportStartupTrace = E));
  },
  98,
);
