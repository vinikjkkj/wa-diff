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
      C = !1;
    function b() {
      C ||
        ((C = !0),
        R(function () {
          v();
        }));
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield L()) &&
            self.setTimeout(function () {
              R(function () {
                L();
              });
            }, p);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = !1,
        n = function () {
          t || ((t = !0), e());
        };
      (o("WAWebPonyfillsIdleCallback").requestIdleCallback(n),
        self.setTimeout(n, m));
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              a = yield k(t);
            if (a == null) return !1;
            var i = P(a, n);
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield x(e);
          if (t == null || t.report.current == null || t.clockSyncErrorMs <= d)
            return t;
          var n = yield T(e);
          return n != null && n.clockSyncErrorMs < t.clockSyncErrorMs ? n : t;
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
          try {
            return yield x(e);
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        $.apply(this, arguments)
      );
    }
    function P(t, n) {
      var r = [],
        a = t.report,
        i = a.attempts,
        l = a.current;
      return (
        l != null &&
          (N(l)
            ? o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsStartupTraceReporter: successful launch without nav_completed",
                  ])),
              )
            : (M(l, t, n), r.push(l.id))),
        i.forEach(function (e, t) {
          (B(e, t), r.push(e.id));
        }),
        r
      );
    }
    function N(e) {
      return h[e.navOutcome] === 2 && e.points.nav_completed == null;
    }
    function M(e, t, n) {
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
        ? (w(u, e.points, t.processStartWeb),
          (c = F(u, t.report.level, i == null ? null : s + t.clockSyncErrorMs)))
        : u.annotate({ int: A(e.points) }),
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
    function w(e, t, n) {
      Object.keys(t).forEach(function (r) {
        e.addPoint(r, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(
            n + t[r],
          ),
        });
      });
    }
    function A(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          t["hyb_" + n + "_at_ms"] = Math.round(e[n]);
        }),
        t
      );
    }
    function F(e, t, n) {
      var r;
      if (n != null && n < 0) return g.Invalid;
      (e.addPoint("web_time_origin", {
        timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(0),
      }),
        O(
          e,
          "bridge_ready",
          o("WAWebWindowsStartupWebTimings").getWindowsBridgeReadyTime(),
        ),
        O(
          e,
          "web_first_paint",
          o("WAWebWindowsStartupWebTimings").getFirstPaintTime(),
        ));
      var a = o("WAWebWindowsStartupWebTimings").getNavigationTiming();
      return a == null
        ? g.Incomplete
        : (O(e, "web_dcl", a.domContentLoadedEventStart),
          t >= _ &&
            (O(e, "web_worker_start", a.workerStart),
            O(e, "web_fetch_start", a.fetchStart),
            O(e, "web_response_start", a.responseStart)),
          ((r = a.domContentLoadedEventStart) != null ? r : 0) > 0
            ? g.Ok
            : g.Incomplete);
    }
    function O(e, t, n) {
      n != null &&
        n > 0 &&
        e.addPoint(t, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(n),
        });
    }
    function B(e, t) {
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
    ((l.startReportingStartupTrace = b),
      (l.reportStartupTraceWithRetry = v),
      (l.reportStartupTrace = L));
  },
  98,
);
