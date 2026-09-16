__d(
  "WAWebVoipWebTransportCallSummary",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        Opened: "opened",
        Timeout: "timeout",
        Aborted: "aborted",
        Failed: "failed",
      }),
      l = (function () {
        function t() {
          ((this.$1 = []),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = !1),
            (this.$5 = !1));
        }
        var n = t.prototype;
        return (
          (n.recordEligibility = function (t, n) {
            ((this.$2 = t), (this.$3 = n));
          }),
          (n.recordAttemptStart = function (t) {
            this.$1.push({
              connectionId: t,
              startMs: Date.now(),
              elapsedMs: null,
              outcome: null,
              likelyCause: null,
            });
          }),
          (n.recordAttemptComplete = function (t, n, r) {
            for (var e = this.$1.length - 1; e >= 0; e--) {
              var o = this.$1[e];
              if (o.connectionId === t && o.outcome == null) {
                ((o.elapsedMs = Date.now() - o.startMs),
                  (o.outcome = n),
                  (o.likelyCause = r));
                return;
              }
            }
          }),
          (n.recordRelayTrafficSent = function () {
            this.$4 = !0;
          }),
          (n.recordFallbackTriggered = function () {
            this.$5 = !0;
          }),
          (n.hasActivity = function () {
            return this.$1.length > 0;
          }),
          (n.snapshot = function () {
            var t = 0;
            for (var n of this.$1) n.outcome === e.Opened && t++;
            return {
              configEnabled: this.$2,
              runtimeEligible: this.$3,
              connectAttempted: this.$1.length > 0,
              connectOpened: t > 0,
              relayTrafficSent: this.$4,
              fallbackTriggered: this.$5,
              numRelayAttempts: this.$1.length,
              numOpened: t,
              attempts: this.$1.slice(),
            };
          }),
          t
        );
      })(),
      s = 4,
      u = new l(),
      c = !1,
      d = !1,
      m = !1,
      p = null,
      _ = null,
      f = null,
      g = new Map();
    function h(e, t) {
      if ((t === void 0 && (t = !1), t && !c && d && p == null)) {
        p = e;
        return;
      }
      if (!c && p != null) {
        var n = u.snapshot();
        (d && ((_ = p), (f = n)), m && $(p, n));
      }
      ((u = new l()), (c = !1), (d = !1), (m = !1), (p = e));
    }
    function y(e, t) {
      ((m = !0), u.recordEligibility(e, t), x());
    }
    function C(e) {
      p = e;
    }
    function b(e) {
      (c && ((u = new l()), (c = !1), (p = null)),
        (d = !0),
        (m = !0),
        u.recordAttemptStart(e));
    }
    function v(e, t, n) {
      (u.recordAttemptComplete(e, t, n), x());
    }
    function S() {
      ((m = !0), u.recordRelayTrafficSent(), x());
    }
    function R() {
      ((m = !0), u.recordFallbackTriggered(), x());
    }
    function L() {
      return d && u.hasActivity();
    }
    function E() {
      return d
        ? u.snapshot()
        : {
            configEnabled: null,
            runtimeEligible: null,
            connectAttempted: !1,
            connectOpened: !1,
            relayTrafficSent: !1,
            fallbackTriggered: !1,
            attempts: [],
            numOpened: 0,
            numRelayAttempts: 0,
          };
    }
    function k() {
      return m ? u.snapshot() : null;
    }
    function I(e) {
      var t;
      return e == null
        ? null
        : m && e === p
          ? u.snapshot()
          : (t = g.get(e)) != null
            ? t
            : null;
    }
    function T(e) {
      return e == null
        ? d
          ? u.snapshot()
          : null
        : e === _ && f != null
          ? f
          : d && (p == null || e === p)
            ? u.snapshot()
            : null;
    }
    function D() {
      var e = u.snapshot();
      (d && ((_ = p), (f = e)), m && $(p, e), (c = !0));
    }
    function x() {
      c && m && $(p, u.snapshot());
    }
    function $(e, t) {
      if (e != null && (g.set(e, t), !(g.size <= s))) {
        var n = g.keys().next().value;
        typeof n == "string" && g.delete(n);
      }
    }
    ((i.WtRelayOutcome = e),
      (i.resetWtCurrentCallActivity = h),
      (i.recordWtCallEligibility = y),
      (i.updateWtCurrentCallId = C),
      (i.recordWtRelayAttemptStart = b),
      (i.recordWtRelayAttemptComplete = v),
      (i.recordWtRelayTrafficSent = S),
      (i.recordWtFallbackTriggered = R),
      (i.hasWtActivityThisCall = L),
      (i.getWtCallSummaryIfCurrent = E),
      (i.getWtCurrentCallTelemetry = k),
      (i.getWtCallTelemetryForCall = I),
      (i.getWtCallSummaryForCall = T),
      (i.markWtCallSummaryClosed = D));
  },
  66,
);
