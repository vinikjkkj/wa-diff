__d(
  "WAWebVoipWebTransportCallSummary",
  ["$InternalEnum", "WAWebVoipWaCallEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        Opened: "opened",
        Timeout: "timeout",
        Aborted: "aborted",
        Failed: "failed",
      }),
      s = n("$InternalEnum")({
        Unknown: 0,
        PreAccept: 1,
        PostAcceptPreActive: 2,
        PostActive: 3,
      }),
      u = n("$InternalEnum")({
        Unknown: 0,
        NoInboundDatagramTimeout: 1,
        ConnectionTimeout: 2,
        InvalidConfig: 3,
        Aborted: 4,
        HandshakeTimeout: 5,
        ImmediateReject: 6,
        SessionError: 7,
        StreamError: 8,
        WorkerError: 9,
        SendOnFailedConnection: 10,
        GroupCallDisabled: 11,
      }),
      c = (function () {
        function t() {
          ((this.$1 = []),
            (this.$2 = Date.now()),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = null),
            (this.$6 = !1),
            (this.$7 = !1),
            (this.$8 = null),
            (this.$9 = null),
            (this.$10 = null),
            (this.$11 = null),
            (this.$12 = null),
            (this.$13 = null),
            (this.$14 = null),
            (this.$15 = null),
            (this.$16 = !1));
        }
        var n = t.prototype;
        return (
          (n.recordEligibility = function (t, n) {
            ((this.$4 = t), (this.$5 = n));
          }),
          (n.recordCallStart = function () {
            this.$2 = Date.now();
          }),
          (n.recordCallState = function (t) {
            (this.$3 == null &&
              (t === o("WAWebVoipWaCallEnums").CallState.AcceptSent ||
                t === o("WAWebVoipWaCallEnums").CallState.AcceptReceived) &&
              (this.$3 = Date.now()),
              !this.$16 &&
                (t === o("WAWebVoipWaCallEnums").CallState.CallActive ||
                  t === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely) &&
                ((this.$16 = !0), (this.$15 = this.$17())));
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
            this.$6 = !0;
          }),
          (n.recordFallbackTriggered = function (t, n) {
            if (!this.$7) {
              var e = Date.now();
              ((this.$7 = !0),
                (this.$8 = e),
                (this.$9 = t),
                (this.$10 = n),
                (this.$11 = e - this.$2),
                (this.$12 = this.$3 != null ? e - this.$3 : null));
            }
          }),
          (n.recordFallbackSctpStart = function () {
            this.$13 == null && (this.$13 = this.$17());
          }),
          (n.recordFallbackSctpConnected = function () {
            this.$14 == null && (this.$14 = this.$17());
          }),
          (n.$17 = function () {
            var e = this.$8;
            return e != null ? Date.now() - e : null;
          }),
          (n.hasActivity = function () {
            return this.$1.length > 0;
          }),
          (n.snapshot = function () {
            var t = 0;
            for (var n of this.$1) n.outcome === e.Opened && t++;
            return {
              configEnabled: this.$4,
              runtimeEligible: this.$5,
              connectAttempted: this.$1.length > 0,
              connectOpened: t > 0,
              relayTrafficSent: this.$6,
              fallbackTriggered: this.$7,
              fallbackPhase: this.$9,
              fallbackReason: this.$10,
              fallbackSinceCallStartMs: this.$11,
              fallbackSinceAcceptMs: this.$12,
              fallbackSctpStartMs: this.$13,
              fallbackSctpConnectedMs: this.$14,
              fallbackToFirstActiveMs: this.$15,
              numRelayAttempts: this.$1.length,
              numOpened: t,
              attempts: this.$1.slice(),
            };
          }),
          t
        );
      })(),
      d = 4,
      m = new c(),
      p = !1,
      _ = !1,
      f = !1,
      g = null,
      h = null,
      y = null,
      C = new Map();
    function b(e) {
      return e === o("WAWebVoipWaCallEnums").CallState.Calling ||
        e === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived ||
        e === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
        e === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer ||
        e === o("WAWebVoipWaCallEnums").CallState.PreCalling ||
        e === o("WAWebVoipWaCallEnums").CallState.CallBCallStarting
        ? s.PreAccept
        : e === o("WAWebVoipWaCallEnums").CallState.AcceptSent ||
            e === o("WAWebVoipWaCallEnums").CallState.AcceptReceived ||
            e === o("WAWebVoipWaCallEnums").CallState.Rejoining ||
            e === o("WAWebVoipWaCallEnums").CallState.Link
          ? s.PostAcceptPreActive
          : e === o("WAWebVoipWaCallEnums").CallState.CallActive ||
              e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely
            ? s.PostActive
            : s.Unknown;
    }
    function v(e, t) {
      if ((t === void 0 && (t = !1), t && !p && _ && g == null)) {
        ((g = e), m.recordCallStart());
        return;
      }
      if (!p && g != null) {
        var n = m.snapshot();
        (_ && ((h = g), (y = n)), f && O(g, n));
      }
      ((m = new c()), (p = !1), (_ = !1), (f = !1), (g = e));
    }
    function S(e, t) {
      ((f = !0), m.recordEligibility(e, t), F());
    }
    function R(e) {
      g = e;
    }
    function L(e) {
      (p && ((m = new c()), (p = !1), (g = null)),
        (_ = !0),
        (f = !0),
        m.recordAttemptStart(e));
    }
    function E(e, t, n) {
      (m.recordAttemptComplete(e, t, n), F());
    }
    function k() {
      ((f = !0), m.recordRelayTrafficSent(), F());
    }
    function I(e) {
      (m.recordCallState(e), F());
    }
    function T(e, t) {
      ((f = !0), m.recordFallbackTriggered(b(e), t), F());
    }
    function D() {
      (m.recordFallbackSctpStart(), F());
    }
    function x() {
      (m.recordFallbackSctpConnected(), F());
    }
    function $() {
      return _ && m.hasActivity();
    }
    function P() {
      return _
        ? m.snapshot()
        : {
            configEnabled: null,
            runtimeEligible: null,
            connectAttempted: !1,
            connectOpened: !1,
            relayTrafficSent: !1,
            fallbackTriggered: !1,
            fallbackPhase: null,
            fallbackReason: null,
            fallbackSinceCallStartMs: null,
            fallbackSinceAcceptMs: null,
            fallbackSctpStartMs: null,
            fallbackSctpConnectedMs: null,
            fallbackToFirstActiveMs: null,
            attempts: [],
            numOpened: 0,
            numRelayAttempts: 0,
          };
    }
    function N() {
      return f ? m.snapshot() : null;
    }
    function M(e) {
      var t;
      return e == null
        ? null
        : f && e === g
          ? m.snapshot()
          : (t = C.get(e)) != null
            ? t
            : null;
    }
    function w(e) {
      return e == null
        ? _
          ? m.snapshot()
          : null
        : e === h && y != null
          ? y
          : _ && (g == null || e === g)
            ? m.snapshot()
            : null;
    }
    function A() {
      var e = m.snapshot();
      (_ && ((h = g), (y = e)), f && O(g, e), (p = !0));
    }
    function F() {
      p && f && O(g, m.snapshot());
    }
    function O(e, t) {
      if (e != null && (C.set(e, t), !(C.size <= d))) {
        var n = C.keys().next().value;
        typeof n == "string" && C.delete(n);
      }
    }
    ((l.WtRelayOutcome = e),
      (l.WtFallbackPhase = s),
      (l.WtFallbackReason = u),
      (l.resetWtCurrentCallActivity = v),
      (l.recordWtCallEligibility = S),
      (l.updateWtCurrentCallId = R),
      (l.recordWtRelayAttemptStart = L),
      (l.recordWtRelayAttemptComplete = E),
      (l.recordWtRelayTrafficSent = k),
      (l.recordWtCallState = I),
      (l.recordWtFallbackTriggered = T),
      (l.recordWtFallbackSctpStart = D),
      (l.recordWtFallbackSctpConnected = x),
      (l.hasWtActivityThisCall = $),
      (l.getWtCallSummaryIfCurrent = P),
      (l.getWtCurrentCallTelemetry = N),
      (l.getWtCallTelemetryForCall = M),
      (l.getWtCallSummaryForCall = w),
      (l.markWtCallSummaryClosed = A));
  },
  98,
);
