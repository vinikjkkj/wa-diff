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
      d,
      m = 50,
      p = 5e3,
      _ = 6e4,
      f = 75e3,
      g = 5e3,
      h = 2,
      y = 1,
      C = n("$InternalEnum")({
        Ok: 1,
        Invalid: 3,
        Incomplete: 5,
        ClockSyncError: 6,
      }),
      b = { 1: 2, 2: 3, 3: 4, 4: 3, 5: 2, 6: 113, 7: 3, 8: 4 },
      v = new Set([3, 8]),
      S = 5,
      R = !1,
      L = new Set(),
      E = new Set();
    function k() {
      R ||
        ((R = !0),
        x(function () {
          T();
        }));
    }
    function I() {
      (L.clear(), E.clear());
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield $()) &&
            self.setTimeout(function () {
              x(function () {
                $();
              });
            }, _);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t = !1,
        n = function () {
          t || ((t = !0), e());
        };
      (o("WAWebPonyfillsIdleCallback").requestIdleCallback(n),
        self.setTimeout(n, p));
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              a = yield N(t);
            if (a == null) return !1;
            var i = B(a, n).filter(function (e) {
              return !E.has(e);
            });
            return (i.length > 0 && q(t, i), a.report.currentPending);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsStartupTraceReporter: report failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("windows-startup-trace-report-failed"),
              !1
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield F(e);
          if (t == null || t.report.current == null || t.clockSyncErrorMs <= m)
            return t;
          var n = yield w(e);
          return n != null && n.clockSyncErrorMs < t.clockSyncErrorMs ? n : t;
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield F(e);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsStartupTraceReporter: clock sync retry failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("windows-startup-trace-retry-failed"),
              null
            );
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = self.performance.now(),
            n = yield e.takeStartupTrace == null
              ? void 0
              : e.takeStartupTrace(t),
            r = self.performance.now();
          if (n == null || n === "") return null;
          var a = o("WAWebWindowsStartupReportParser").parseStartupReport(n);
          return a == null
            ? (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
        O.apply(this, arguments)
      );
    }
    function B(t, n) {
      var r = [],
        a = t.report,
        i = a.attempts,
        l = a.current,
        s = a.firstInstallLaunch;
      return (
        l != null &&
          (U(l)
            ? o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsStartupTraceReporter: successful launch without nav_completed",
                  ])),
              )
            : (W(l.id, function () {
                return V(l, t, n);
              }),
              r.push(l.id))),
        i.forEach(function (e, t) {
          (W(e.id, function () {
            return X(e, t);
          }),
            r.push(e.id));
        }),
        s != null &&
          (W(s.id, function () {
            return Y(s, i.length);
          }),
          r.push(s.id)),
        r
      );
    }
    function W(e, t) {
      L.has(e) || (t(), L.add(e));
    }
    function q(e, t) {
      (t.forEach(function (e) {
        return E.add(e);
      }),
        self.setTimeout(function () {
          try {
            e.ackStartupReport == null || e.ackStartupReport(t);
          } catch (e) {
            (t.forEach(function (e) {
              return E.delete(e);
            }),
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsStartupTraceReporter: acknowledging the report failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("windows-startup-trace-ack-failed"));
          }
        }, f));
    }
    function U(e) {
      return b[e.navOutcome] === 2 && e.points.nav_completed == null;
    }
    function V(e, t, n) {
      var r,
        a = t.clockSyncErrorMs <= m,
        i = e.points.nav_completed,
        l = a ? t.processStartWeb : 0,
        s = a && i != null ? t.processStartWeb + i : l,
        u = o("WAWebQplFlowWrapper").QPL.markerStart(
          o("WAWebWindowsStartupQplEvents").WINDOWS_HYBRID_STARTUP_EVENT,
          {
            timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(l),
            instanceKey: y,
          },
        );
      a
        ? H(u, e.points, t.processStartWeb)
        : u.annotate({ int: babelHelpers.extends({}, G(e.points)) });
      var c = z(u, e, t);
      (u.annotate({
        int: babelHelpers.extends({}, e.annotations.int, {
          hyb_nav_outcome: e.navOutcome,
          hyb_clock_sync_error_ms: Math.round(t.clockSyncErrorMs),
          hyb_web_timing_status: c,
          hyb_reporter_ms: Math.round(self.performance.now() - n),
        }),
        string: babelHelpers.extends({}, e.annotations.string),
        bool: babelHelpers.extends({}, e.annotations.bool, {
          hyb_logged_in: o("WAWebUserPrefsMeUser").getMaybeMeLidUser() != null,
        }),
      }),
        u.end((r = b[e.navOutcome]) != null ? r : 3, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(s),
        }));
    }
    function H(e, t, n) {
      Object.keys(t).forEach(function (r) {
        e.addPoint(r, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(
            n + t[r],
          ),
        });
      });
    }
    function G(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          t["hyb_" + n + "_at_ms"] = Math.round(e[n]);
        }),
        t
      );
    }
    function z(e, t, n) {
      return j(t, n)
        ? n.clockSyncErrorMs > m
          ? C.ClockSyncError
          : K(e, n.report.level)
        : C.Invalid;
    }
    function j(e, t) {
      var n,
        r = e.points,
        o = r.nav_completed,
        a = r.navigate,
        i = function (n) {
          return t.processStartWeb + n + t.clockSyncErrorMs;
        };
      return o != null
        ? i(o) >= 0
        : a != null &&
            ((n = e.annotations.int.hyb_nav_restarts) != null ? n : 0) === 0 &&
            i(a) >= -g;
    }
    function K(e, t) {
      var n, r;
      (e.addPoint("web_time_origin", {
        timestamp: (r = o("WAWebWindowsStartupWebTimings")).toQplTimestamp(0),
      }),
        Q(e, "bridge_ready", r.getWindowsBridgeReadyTime()),
        Q(e, "web_first_paint", r.getFirstPaintTime()));
      var a = r.getNavigationTiming();
      return a == null
        ? C.Incomplete
        : (Q(e, "web_dcl", a.domContentLoadedEventStart),
          t >= h &&
            (Q(e, "web_worker_start", a.workerStart),
            Q(e, "web_fetch_start", a.fetchStart),
            Q(e, "web_response_start", a.responseStart)),
          ((n = a.domContentLoadedEventStart) != null ? n : 0) > 0
            ? C.Ok
            : C.Incomplete);
    }
    function Q(e, t, n) {
      n != null &&
        n > 0 &&
        e.addPoint(t, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(n),
        });
    }
    function X(e, t) {
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
        n.end(v.has(e.navOutcome) ? 4 : 3));
    }
    function Y(e, t) {
      var n,
        r = o("WAWebQplFlowWrapper").QPL.markerStart(
          o("WAWebWindowsStartupQplEvents")
            .WINDOWS_HYBRID_STARTUP_ATTEMPT_EVENT,
          { instanceKey: t + 1 },
        );
      (r.annotate({
        int: babelHelpers.extends({}, e.annotations.int, G(e.points), {
          hyb_nav_outcome: e.navOutcome,
          hyb_first_launch_after_update: S,
        }),
        string: babelHelpers.extends({}, e.annotations.string),
        bool: babelHelpers.extends({}, e.annotations.bool, {
          hyb_signed_out_launch: !0,
        }),
      }),
        r.end((n = b[e.navOutcome]) != null ? n : 3));
    }
    ((l.startReportingStartupTrace = k),
      (l.resetLoggedLaunchesForTests = I),
      (l.reportStartupTraceWithRetry = T),
      (l.reportStartupTrace = $));
  },
  98,
);
