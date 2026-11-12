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
        D(function () {
          I();
        }));
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield x()) &&
            self.setTimeout(function () {
              D(function () {
                x();
              });
            }, _);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t = !1,
        n = function () {
          t || ((t = !0), e());
        };
      (o("WAWebPonyfillsIdleCallback").requestIdleCallback(n),
        self.setTimeout(n, p));
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              a = yield P(t);
            if (a == null) return !1;
            var i = O(a, n).filter(function (e) {
              return !E.has(e);
            });
            return (i.length > 0 && W(t, i), a.report.currentPending);
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield A(e);
          if (t == null || t.report.current == null || t.clockSyncErrorMs <= m)
            return t;
          var n = yield M(e);
          return n != null && n.clockSyncErrorMs < t.clockSyncErrorMs ? n : t;
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield A(e);
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        F.apply(this, arguments)
      );
    }
    function O(t, n) {
      var r = [],
        a = t.report,
        i = a.attempts,
        l = a.current,
        s = a.firstInstallLaunch;
      return (
        l != null &&
          (q(l)
            ? o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsStartupTraceReporter: successful launch without nav_completed",
                  ])),
              )
            : (B(l.id, function () {
                return U(l, t, n);
              }),
              r.push(l.id))),
        i.forEach(function (e, t) {
          (B(e.id, function () {
            return Q(e, t);
          }),
            r.push(e.id));
        }),
        s != null &&
          (B(s.id, function () {
            return X(s, i.length);
          }),
          r.push(s.id)),
        r
      );
    }
    function B(e, t) {
      L.has(e) || (t(), L.add(e));
    }
    function W(e, t) {
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
    function q(e) {
      return b[e.navOutcome] === 2 && e.points.nav_completed == null;
    }
    function U(e, t, n) {
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
        ? V(u, e.points, t.processStartWeb)
        : u.annotate({ int: babelHelpers.extends({}, H(e.points)) });
      var c = G(u, e, t);
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
    function V(e, t, n) {
      Object.keys(t).forEach(function (r) {
        e.addPoint(r, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(
            n + t[r],
          ),
        });
      });
    }
    function H(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          t["hyb_" + n + "_at_ms"] = Math.round(e[n]);
        }),
        t
      );
    }
    function G(e, t, n) {
      return z(t, n)
        ? n.clockSyncErrorMs > m
          ? C.ClockSyncError
          : j(e, n.report.level)
        : C.Invalid;
    }
    function z(e, t) {
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
    function j(e, t) {
      var n, r;
      (e.addPoint("web_time_origin", {
        timestamp: (r = o("WAWebWindowsStartupWebTimings")).toQplTimestamp(0),
      }),
        K(e, "bridge_ready", r.getWindowsBridgeReadyTime()),
        K(e, "web_first_paint", r.getFirstPaintTime()));
      var a = r.getNavigationTiming();
      return a == null
        ? C.Incomplete
        : (K(e, "web_dcl", a.domContentLoadedEventStart),
          t >= h &&
            (K(e, "web_worker_start", a.workerStart),
            K(e, "web_fetch_start", a.fetchStart),
            K(e, "web_response_start", a.responseStart)),
          ((n = a.domContentLoadedEventStart) != null ? n : 0) > 0
            ? C.Ok
            : C.Incomplete);
    }
    function K(e, t, n) {
      n != null &&
        n > 0 &&
        e.addPoint(t, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(n),
        });
    }
    function Q(e, t) {
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
    function X(e, t) {
      var n,
        r = o("WAWebQplFlowWrapper").QPL.markerStart(
          o("WAWebWindowsStartupQplEvents")
            .WINDOWS_HYBRID_STARTUP_ATTEMPT_EVENT,
          { instanceKey: t + 1 },
        );
      (r.annotate({
        int: babelHelpers.extends({}, e.annotations.int, H(e.points), {
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
      (l.reportStartupTraceWithRetry = I),
      (l.reportStartupTrace = x));
  },
  98,
);
