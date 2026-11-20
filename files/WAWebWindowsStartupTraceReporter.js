__d(
  "WAWebWindowsStartupTraceReporter",
  [
    "$InternalEnum",
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
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
      m,
      p,
      _ = 50,
      f = 3,
      g = 2 * _,
      h = 5e3,
      y = 6e4,
      C = 75e3,
      b = 5e3,
      v = 2,
      S = 1,
      R = n("$InternalEnum")({
        Ok: 1,
        Invalid: 3,
        Incomplete: 5,
        ClockSyncError: 6,
      }),
      L = { 1: 2, 2: 3, 3: 4, 4: 3, 5: 2, 6: 113, 7: 3, 8: 4 },
      E = new Set([3, 8]),
      k = 5,
      I = !1,
      T = new Set(),
      D = new Set();
    function x() {
      I ||
        ((I = !0),
        N(function () {
          $();
        }));
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield M()) &&
            self.setTimeout(function () {
              N(function () {
                M();
              });
            }, y);
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      var t = !1,
        n = function () {
          t || ((t = !0), e());
        };
      (o("WAWebPonyfillsIdleCallback").requestIdleCallback(n),
        self.setTimeout(n, h));
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              a = yield A(t);
            if (a == null) return !1;
            var i = Q(a, n).filter(function (e) {
              return !D.has(e);
            });
            return (i.length > 0 && Y(t, i), a.report.currentPending);
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield z(e);
          if (t == null || t.report.current == null) return t;
          var n = O(
            t,
            yield B(e, {
              processStartWeb: t.processStartWeb,
              clockSyncErrorMs: t.clockSyncErrorMs,
            }),
          );
          if (n.clockSyncErrorMs <= _) return n;
          var r = yield H(e);
          return r != null && r.clockSyncErrorMs < n.clockSyncErrorMs ? r : n;
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return t != null && t.clockSyncErrorMs < e.clockSyncErrorMs
        ? babelHelpers.extends({}, e, t)
        : e;
    }
    function B(e, t, n, r) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if ((n === void 0 && (n = f), a === void 0 && (a = null), n === 0))
              return a;
            var i;
            try {
              i = yield q(e, t);
            } catch (i) {
              return (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsStartupTraceReporter: clock probe failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(i)),
                i instanceof o("WACustomError").TimeoutError
                  ? B(e, t, n - 1, a)
                  : a
              );
            }
            return i == null
              ? a
              : B(
                  e,
                  t,
                  n - 1,
                  a == null || i.clockSyncErrorMs < a.clockSyncErrorMs ? i : a,
                );
          },
        )),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.getNowSinceProcessStartMs == null) return null;
          var r = self.performance.now(),
            a = yield o("WAPromiseTimeout").promiseTimeout(
              (p || (p = n("Promise"))).resolve(
                e.getNowSinceProcessStartMs == null
                  ? void 0
                  : e.getNowSinceProcessStartMs(),
              ),
              g,
            ),
            i = self.performance.now();
          if (a == null || !Number.isFinite(a)) return null;
          var l = K(r, i, a);
          return V(l, t) ? l : null;
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return (
        Math.abs(e.processStartWeb - t.processStartWeb) <=
        e.clockSyncErrorMs + t.clockSyncErrorMs
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield z(e);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsStartupTraceReporter: clock sync retry failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("windows-startup-trace-retry-failed"),
              null
            );
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = self.performance.now(),
            n = yield e.takeStartupTrace == null
              ? void 0
              : e.takeStartupTrace(t),
            r = self.performance.now();
          if (n == null || n === "") return null;
          var a = o("WAWebWindowsStartupReportParser").parseStartupReport(n);
          return a == null
            ? (o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsStartupTraceReporter: invalid native report",
                  ])),
              ),
              null)
            : babelHelpers.extends(
                { report: a },
                K(t, r, a.nowSinceProcessStartMs),
              );
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t, n) {
      return {
        processStartWeb: (e + t) / 2 - n,
        clockSyncErrorMs: (t - e) / 2,
      };
    }
    function Q(t, n) {
      var r = [],
        a = t.report,
        i = a.attempts,
        l = a.current,
        s = a.firstInstallLaunch;
      return (
        l != null &&
          (J(l)
            ? o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsStartupTraceReporter: successful launch without nav_completed",
                  ])),
              )
            : (X(l.id, function () {
                return Z(l, t, n);
              }),
              r.push(l.id))),
        i.forEach(function (e, t) {
          (X(e.id, function () {
            return ie(e, t);
          }),
            r.push(e.id));
        }),
        s != null &&
          (X(s.id, function () {
            return le(s, i.length);
          }),
          r.push(s.id)),
        r
      );
    }
    function X(e, t) {
      T.has(e) || (t(), T.add(e));
    }
    function Y(e, t) {
      (t.forEach(function (e) {
        return D.add(e);
      }),
        self.setTimeout(function () {
          try {
            e.ackStartupReport == null || e.ackStartupReport(t);
          } catch (e) {
            (t.forEach(function (e) {
              return D.delete(e);
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
        }, C));
    }
    function J(e) {
      return L[e.navOutcome] === 2 && e.points.nav_completed == null;
    }
    function Z(e, t, n) {
      var r,
        a,
        i = t.processStartWeb,
        l = i + ((r = e.points.nav_completed) != null ? r : 0),
        s = o("WAWebQplFlowWrapper").QPL.markerStart(
          o("WAWebWindowsStartupQplEvents").WINDOWS_HYBRID_STARTUP_EVENT,
          {
            timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(i),
            instanceKey: S,
          },
        );
      (ee(s, e.points, i),
        t.clockSyncErrorMs > _ &&
          s.annotate({ int: babelHelpers.extends({}, te(e.points)) }));
      var u = ne(s, e, t);
      (s.annotate({
        int: babelHelpers.extends({}, e.annotations.int, {
          hyb_nav_outcome: e.navOutcome,
          hyb_clock_sync_error_ms: Math.round(t.clockSyncErrorMs),
          hyb_web_timing_status: u,
          hyb_reporter_ms: Math.round(self.performance.now() - n),
        }),
        string: babelHelpers.extends({}, e.annotations.string),
        bool: babelHelpers.extends({}, e.annotations.bool, {
          hyb_logged_in: o("WAWebUserPrefsMeUser").getMaybeMeLidUser() != null,
        }),
      }),
        s.end((a = L[e.navOutcome]) != null ? a : 3, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(l),
        }));
    }
    function ee(e, t, n) {
      Object.keys(t).forEach(function (r) {
        e.addPoint(r, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(
            n + t[r],
          ),
        });
      });
    }
    function te(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          t["hyb_" + n + "_at_ms"] = Math.round(e[n]);
        }),
        t
      );
    }
    function ne(e, t, n) {
      return re(t, n)
        ? n.clockSyncErrorMs > _
          ? R.ClockSyncError
          : oe(e, n.report.level)
        : R.Invalid;
    }
    function re(e, t) {
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
            i(a) >= -b;
    }
    function oe(e, t) {
      var n, r;
      (e.addPoint("web_time_origin", {
        timestamp: (r = o("WAWebWindowsStartupWebTimings")).toQplTimestamp(0),
      }),
        ae(e, "bridge_ready", r.getWindowsBridgeReadyTime()),
        ae(e, "web_first_paint", r.getFirstPaintTime()));
      var a = r.getNavigationTiming();
      return a == null
        ? R.Incomplete
        : (ae(e, "web_dcl", a.domContentLoadedEventStart),
          t >= v &&
            (ae(e, "web_worker_start", a.workerStart),
            ae(e, "web_fetch_start", a.fetchStart),
            ae(e, "web_response_start", a.responseStart)),
          ((n = a.domContentLoadedEventStart) != null ? n : 0) > 0
            ? R.Ok
            : R.Incomplete);
    }
    function ae(e, t, n) {
      n != null &&
        n > 0 &&
        e.addPoint(t, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(n),
        });
    }
    function ie(e, t) {
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
        n.end(E.has(e.navOutcome) ? 4 : 3));
    }
    function le(e, t) {
      var n,
        r = o("WAWebQplFlowWrapper").QPL.markerStart(
          o("WAWebWindowsStartupQplEvents")
            .WINDOWS_HYBRID_STARTUP_ATTEMPT_EVENT,
          { instanceKey: t + 1 },
        );
      (r.annotate({
        int: babelHelpers.extends({}, e.annotations.int, te(e.points), {
          hyb_nav_outcome: e.navOutcome,
          hyb_first_launch_after_update: k,
        }),
        string: babelHelpers.extends({}, e.annotations.string),
        bool: babelHelpers.extends({}, e.annotations.bool, {
          hyb_signed_out_launch: !0,
        }),
      }),
        r.end((n = L[e.navOutcome]) != null ? n : 3));
    }
    ((l.startReportingStartupTrace = x),
      (l.reportStartupTraceWithRetry = $),
      (l.reportStartupTrace = M));
  },
  98,
);
