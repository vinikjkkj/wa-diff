__d(
  "WAWebWindowsStartupTraceReporter",
  [
    "$InternalEnum",
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 50,
      _ = 3,
      f = 2 * p,
      g = 5e3,
      h = 6e4,
      y = 75e3,
      C = 5e3,
      b = 2,
      v = 1,
      S = n("$InternalEnum")({
        Ok: 1,
        Invalid: 3,
        Incomplete: 5,
        ClockSyncError: 6,
      }),
      R = { 1: 2, 2: 3, 3: 4, 4: 3, 5: 2, 6: 113, 7: 3, 8: 4 },
      L = new Set([3, 8]),
      E = 5,
      k = !1,
      I = new Set(),
      T = new Set();
    function D() {
      k ||
        ((k = !0),
        $(function () {
          x();
        }));
    }
    async function x() {
      (await P()) &&
        self.setTimeout(function () {
          $(function () {
            P();
          });
        }, h);
    }
    function $(e) {
      var t = !1,
        n = function () {
          t || ((t = !0), e());
        };
      (o("WAWebPonyfillsIdleCallback").requestIdleCallback(n),
        self.setTimeout(n, g));
    }
    async function P() {
      try {
        var t,
          n =
            (t = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) ==
            null
              ? void 0
              : t.nativeAppStateBridge;
        if ((n == null ? void 0 : n.takeStartupTrace) == null) return !1;
        var a = self.performance.now(),
          i = await N(n);
        if (i == null) return !1;
        var l = q(i, a).filter(function (e) {
          return !T.has(e);
        });
        return (l.length > 0 && V(n, l), i.report.currentPending);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WindowsStartupTraceReporter: report failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("windows-startup-trace-report-failed"),
          !1
        );
      }
    }
    async function N(e) {
      var t = await B(e);
      if (t == null || t.report.current == null) return t;
      var n = M(
        t,
        await w(e, {
          processStartWeb: t.processStartWeb,
          clockSyncErrorMs: t.clockSyncErrorMs,
        }),
      );
      if (n.clockSyncErrorMs <= p) return n;
      var r = await O(e);
      return r != null && r.clockSyncErrorMs < n.clockSyncErrorMs ? r : n;
    }
    function M(e, t) {
      return t != null && t.clockSyncErrorMs < e.clockSyncErrorMs
        ? babelHelpers.extends({}, e, t)
        : e;
    }
    async function w(e, t, n, a) {
      if ((n === void 0 && (n = _), a === void 0 && (a = null), n === 0))
        return a;
      var i;
      try {
        i = await A(e, t);
      } catch (i) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "WindowsStartupTraceReporter: clock probe failed",
                ])),
            )
            .catching(r("getErrorSafe")(i)),
          i instanceof o("WACustomError").TimeoutError ? w(e, t, n - 1, a) : a
        );
      }
      return i == null
        ? a
        : w(
            e,
            t,
            n - 1,
            a == null || i.clockSyncErrorMs < a.clockSyncErrorMs ? i : a,
          );
    }
    async function A(e, t) {
      if (e.getNowSinceProcessStartMs == null) return null;
      var n = self.performance.now(),
        r = await o("WAPromiseTimeout").promiseTimeout(
          Promise.resolve(
            e.getNowSinceProcessStartMs == null
              ? void 0
              : e.getNowSinceProcessStartMs(),
          ),
          f,
        ),
        a = self.performance.now();
      if (r == null || !Number.isFinite(r)) return null;
      var i = W(n, a, r);
      return F(i, t) ? i : null;
    }
    function F(e, t) {
      return (
        Math.abs(e.processStartWeb - t.processStartWeb) <=
        e.clockSyncErrorMs + t.clockSyncErrorMs
      );
    }
    async function O(e) {
      try {
        return await B(e);
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
    }
    async function B(e) {
      var t = self.performance.now(),
        n = await (e.takeStartupTrace == null ? void 0 : e.takeStartupTrace(t)),
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
        : babelHelpers.extends(
            { report: a },
            W(t, r, a.nowSinceProcessStartMs),
          );
    }
    function W(e, t, n) {
      return {
        processStartWeb: (e + t) / 2 - n,
        clockSyncErrorMs: (t - e) / 2,
      };
    }
    function q(e, t) {
      var n = [],
        r = e.report,
        a = r.attempts,
        i = r.current,
        l = r.firstInstallLaunch;
      return (
        i != null &&
          (H(i)
            ? o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsStartupTraceReporter: successful launch without nav_completed",
                  ])),
              )
            : (U(i.id, function () {
                return G(i, e, t);
              }),
              n.push(i.id))),
        a.forEach(function (e, t) {
          (U(e.id, function () {
            return J(e, t);
          }),
            n.push(e.id));
        }),
        l != null &&
          (U(l.id, function () {
            return Z(l, a.length);
          }),
          n.push(l.id)),
        n
      );
    }
    function U(e, t) {
      I.has(e) || (t(), I.add(e));
    }
    function V(e, t) {
      (t.forEach(function (e) {
        return T.add(e);
      }),
        self.setTimeout(function () {
          try {
            e.ackStartupReport == null || e.ackStartupReport(t);
          } catch (e) {
            (t.forEach(function (e) {
              return T.delete(e);
            }),
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsStartupTraceReporter: acknowledging the report failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("windows-startup-trace-ack-failed"));
          }
        }, y));
    }
    function H(e) {
      return R[e.navOutcome] === 2 && e.points.nav_completed == null;
    }
    function G(e, t, n) {
      var r,
        a,
        i = t.processStartWeb,
        l = i + ((r = e.points.nav_completed) != null ? r : 0),
        s = o("WAWebQplFlowWrapper").QPL.markerStart(
          o("WAWebWindowsStartupQplEvents").WINDOWS_HYBRID_STARTUP_EVENT,
          {
            timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(i),
            instanceKey: v,
          },
        );
      (z(s, e.points, i),
        t.clockSyncErrorMs > p &&
          s.annotate({ int: babelHelpers.extends({}, j(e.points)) }));
      var u = K(s, e, t);
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
        s.end((a = R[e.navOutcome]) != null ? a : 3, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(l),
        }));
    }
    function z(e, t, n) {
      Object.keys(t).forEach(function (r) {
        e.addPoint(r, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(
            n + t[r],
          ),
        });
      });
    }
    function j(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          t["hyb_" + n + "_at_ms"] = Math.round(e[n]);
        }),
        t
      );
    }
    function K(e, t, n) {
      return Q(t, n)
        ? n.clockSyncErrorMs > p
          ? S.ClockSyncError
          : X(e, n.report.level)
        : S.Invalid;
    }
    function Q(e, t) {
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
            i(a) >= -C;
    }
    function X(e, t) {
      var n, r;
      (e.addPoint("web_time_origin", {
        timestamp: (r = o("WAWebWindowsStartupWebTimings")).toQplTimestamp(0),
      }),
        Y(e, "bridge_ready", r.getWindowsBridgeReadyTime()),
        Y(e, "web_first_paint", r.getFirstPaintTime()));
      var a = r.getNavigationTiming();
      return a == null
        ? S.Incomplete
        : (Y(e, "web_dcl", a.domContentLoadedEventStart),
          t >= b &&
            (Y(e, "web_worker_start", a.workerStart),
            Y(e, "web_fetch_start", a.fetchStart),
            Y(e, "web_response_start", a.responseStart)),
          ((n = a.domContentLoadedEventStart) != null ? n : 0) > 0
            ? S.Ok
            : S.Incomplete);
    }
    function Y(e, t, n) {
      n != null &&
        n > 0 &&
        e.addPoint(t, {
          timestamp: o("WAWebWindowsStartupWebTimings").toQplTimestamp(n),
        });
    }
    function J(e, t) {
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
        n.end(L.has(e.navOutcome) ? 4 : 3));
    }
    function Z(e, t) {
      var n,
        r = o("WAWebQplFlowWrapper").QPL.markerStart(
          o("WAWebWindowsStartupQplEvents")
            .WINDOWS_HYBRID_STARTUP_ATTEMPT_EVENT,
          { instanceKey: t + 1 },
        );
      (r.annotate({
        int: babelHelpers.extends({}, e.annotations.int, j(e.points), {
          hyb_nav_outcome: e.navOutcome,
          hyb_first_launch_after_update: E,
        }),
        string: babelHelpers.extends({}, e.annotations.string),
        bool: babelHelpers.extends({}, e.annotations.bool, {
          hyb_signed_out_launch: !0,
        }),
      }),
        r.end((n = R[e.navOutcome]) != null ? n : 3));
    }
    ((l.startReportingStartupTrace = D),
      (l.reportStartupTraceWithRetry = x),
      (l.reportStartupTrace = P));
  },
  98,
);
